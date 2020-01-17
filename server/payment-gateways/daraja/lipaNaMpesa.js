const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const { pass_key, consumer_key, consumer_secret } = require('../../config/config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
* openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
*/

const url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    auth = "Basic " + Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

const processLipaNaMpesaRequest = async ({
    phoneNumber = null,
    shortCode = null,
    amount = null,
    vendor = null
}, resp) => {
    let jsonResponse = null;
    await request(
        {
            url,
            headers: {
                "Authorization": auth
            }
        },
        (error, response, body) => {
            // Use the body object to extract OAuth access token
            let res = JSON.parse(body);
            let access_token = "Bearer " + res.access_token;
            console.log(access_token);
            let url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

            const timestamp = new Date().toISOString().slice(-24).replace(/\D/g, '').slice(0, 14);
            const b64string = shortCode + pass_key + timestamp;
            const bufferToEncrypt = Buffer.from(b64string);
            const encryptedKey = bufferToEncrypt.toString('base64');

            console.log(encryptedKey.length);

            request(
                {
                    method: 'POST',
                    url,
                    headers: {
                        "Authorization": access_token
                    },
                    json: {
                        "BusinessShortCode": shortCode, // (Paybill or Buygoods)
                        "Password": encryptedKey,
                        "Timestamp": timestamp,
                        "TransactionType": "CustomerPayBillOnline",
                        "Amount": amount,
                        "PartyA": phoneNumber, // number sending money
                        "PartyB": vendor, // organisation receiving the funds
                        "PhoneNumber": phoneNumber, // Number to receive the STK Pin Prompt
                        "CallBackURL": "https://f3383a3e.ngrok.io/hooks/mpesa",
                        "AccountReference": "test",
                        "TransactionDesc": "test"
                    }
                },
                (error, response, body) => {
                    // Use the body object to extract the response
                    console.log(body)
                    return resp.json({
                        "status": 200,
                        "message": 'Success',
                        "body": body
                    });
                }
            )
        }
    )


}


module.exports = {
    processLipaNaMpesaRequest
}

