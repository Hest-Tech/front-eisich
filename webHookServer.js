const prettyjson = require('prettyjson');
const express = require('express');
const bodyParser = require('body-parser');
var crypto = require("crypto");
var constants = require("constants");
const fs = require('fs');

const options = {
    noColor: true
};

// create an express app and configure it with boadyParser middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create our webhook endpoint to recive webhooks from Safaricom
app.post('/hooks/mpesa', (req, res) => {
    console.log('-----------Received M-Pesa webhook-----------');

    // format and dump the request payload recieved from safaricom in the terminal
    console.log(prettyjson.render(req.body, options));
    console.log('-----------------------');

    let message = {
        "ResponseCode": "00000000",
        "ResponseDesc": "success"
    };

    // respond to safaricom servers with a success message
    res.json(message);
});

var request = require('request'),
    consumer_key = "E0gQOuAJvM81GUS5SGPVyz73J1Fi4r6u",
    consumer_secret = "W5BSmOYgSkIkSbNZ",
    url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    auth = "Basic " + Buffer.from(consumer_key + ":" + consumer_secret).toString("base64");

request(
    {
        url: url,
        headers: {
            "Authorization": auth
        }
    },
    function (error, response, body) {
        // TODO: Use the body object to extract OAuth access token
        let res = JSON.parse(body);
        let access_token = "Bearer " + res.access_token;
        // console.log(access_token);
        let url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

        request(
            {
                method: 'POST',
                url: url,
                headers: {
                    "Authorization": access_token
                },
                json: {
                    "BusinessShortCode": "174379",
                    "Password": "kSXGZM4ybnot/SVuqhZ5pqfWgNfUdRgnM7Mk/h92JbzbdLu36uSEacDJLt6hmPbdkpk7BBj7yd9BUdcnl16q+J0wnCbzXq84JVvM+ENi9XyDj8DNVcu7DjSEPJrg1jjOiVERJ2xThrgxKg9YgkEo8/8KBqpGjvgs02XbE7QTmtqM7dUwXxAlj4H76s47LEq18U0Gy/k9yuge1cdih02FLjPwHKezE+OsDUrm/cKRElPMuGvPNZHdo4uqFtzRkhAXXfHc+oDtFs8o8DVaH4LF4bGr4v2PIGxeLX7CGagBs+sgnXSYsdd98a9PAR4zXmQHl26EuoIrPobLOHFXXJ3BlQ==",
                    "Timestamp": "20191219181927",
                    "TransactionType": "CustomerPayBillOnline",
                    "Amount": "1",
                    "PartyA": "254729710290",
                    "PartyB": "174379",
                    "PhoneNumber": "254729710290",
                    "CallBackURL": "https://a6f0fa1f.ngrok.io/hooks/mpesa",
                    "AccountReference": "test",
                    "TransactionDesc": "test"
                }
            },
            function (error, response, body) {
                // TODO: Use the body object to extract the response
                console.log(body)
            }
        )
    }
)

// CAUTION: This is a 512 bit RSA demo key - NEVER USE THIS SOMEWHERE FOR REAL!
var privatekey = fs.readFileSync("./https/key.pem", "utf8");
var bufferToEncrypt = Buffer.from("174379W5BSmOYgSkIkSbNZ20191219181927", 'binary');

var encrypted = crypto.publicEncrypt(
    { "key": privatekey, padding: constants.RSA_PKCS1_PADDING },
    bufferToEncrypt);

console.log(encrypted.toString("base64").length);
var buf = Buffer.from("174379W5BSmOYgSkIkSbNZ20191219181927", 'binary').toString('base64');
console.log(buf.length);
null;

const server = app.listen(5000, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`server listening on port ${port}`);
});


