const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const lipaNaMpesa = require('./payment-gateways/daraja/lipaNaMpesa')
const hook = require('./payment-gateways/daraja/webHook');
const { ValidateMpesaData } = require('./payment-gateways/daraja/validate');

// create an express app and configure it with bodyParser middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
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

const server = app.listen(5000, () => {
    let port = server.address().port;
    console.log(`server listening on port ${port}`);
});


module.exports = {
    app
}