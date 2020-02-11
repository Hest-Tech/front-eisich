const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

const db = require('./database/dbConfig');
const lipaNaMpesa = require('./payment-gateways/daraja/lipaNaMpesa');
const hook = require('./payment-gateways/daraja/webHook');
const { ValidateMpesaData } = require('./payment-gateways/daraja/validate');
const { port } = require('./config/config');
const PORT = port || 5000;


// create an express app and configure it with bodyParser middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1', require('./routes/categories'));

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

app.listen(PORT, console.log(`server listening on port ${PORT}`));


// module.exports = {
//     app
// }