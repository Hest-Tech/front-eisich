const express = require('express');
const request = require('request');
const crypto = require("crypto");
const constants = require("constants");
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const keyPath = path.join(__dirname, '../../https/key.pem')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
* openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
*/

const consumer_key = "E0gQOuAJvM81GUS5SGPVyz73J1Fi4r6u",
    consumer_secret = "W5BSmOYgSkIkSbNZ",
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    auth = "Basic " + Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

const processLipaNaMpesaRequest = async ({
    phoneNumber,
    shortCode,
    amount,
    vendor
}) => {
    let response = await request(
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

            // CAUTION: This is a 512 bit RSA demo key - NEVER USE THIS SOMEWHERE FOR REAL!
            // const privatekey = fs.readFileSync(new URL(`file:///${keyPath}`));
            const passKey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
            const timestamp = new Date().toISOString().slice(-24).replace(/\D/g,'').slice(0, 14);
            const b64string = shortCode + passKey + timestamp;
            const bufferToEncrypt = Buffer.from(b64string);
            
            const encryptedKey = bufferToEncrypt.toString('base64');
            console.log(encryptedKey.length);

            request(
                {
                    method: 'POST',
                    url: url,
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
                        "CallBackURL": "https://e8c9f650.ngrok.io/hooks/mpesa",
                        "AccountReference": "test",
                        "TransactionDesc": "test"
                    }
                },
                (error, response, body) => {
                    // Use the body object to extract the response
                    console.log(body)
                }
            )
        }
    )

    return response;
}


module.exports = {
    processLipaNaMpesaRequest: processLipaNaMpesaRequest
}

