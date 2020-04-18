const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const path = require('path');
const favicon = require('express-favicon');

const db = require('./database/dbConfig');
const lipaNaMpesa = require('./payment-gateways/daraja/lipaNaMpesa');
const imgur = require('./imgur/app');
const hook = require('./payment-gateways/daraja/webHook');
const { ValidateMpesaData } = require('./payment-gateways/daraja/validate');
const { mode, client_id, port } = require('./config/config');
const PORT = port || 5000;


// create an express app and configure it with bodyParser middleware
const app = express();
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1', require('./routes/categories'));
app.use('/api/v1/products', require('./routes/products'));

const validateNum = new ValidateMpesaData();

app.post('/lipaNaMpesa', (req, res) => {
    try {
        switch (req.body.exampleRadios) {
            case 'lipaNaMpesa':
                let validateData = validateNum.validateMpesaReq(req.body, res);
                let lipaNaMpesaReq = lipaNaMpesa.processLipaNaMpesaRequest(req.body, res);
                return validateData ? validateData : lipaNaMpesaReq;
            default:
                return;
        }
    } catch (e) {
        console.log(e);
    }

    console.log('-->', req.body);
});

app.post('/hooks/mpesa', (req, res) => {
    try {
        hook.requestHook(req, res);
    } catch (e) {
        console.log(e);
    }
});

// app.post('/auth/google/callback', (req, res) => {
//     try {
//         console.log('-----------Received Google Photos API webhook-----------');

//         console.log(req.body);
//         console.log('-----------------------');

//         let message = {
//             "ResponseCode": 200,
//             "ResponseDesc": "success"
//         };

//         res.json(message);
//     } catch (e) {
//         console.log(e);
//     }
// })


// console.log('----------------> ', mode);
// if (mode === "production") {
    app.use(express.static(path.join(__dirname, '../build')));
    app.get('/*', (req, res) => {
        console.log('dirname: ', __dirname)
        res.sendFile(path.join(__dirname, '../build', 'index.html'));
    });
// }

app.listen(PORT, console.log(`server listening on port ${PORT}`));


// module.exports = {
//     app
// }