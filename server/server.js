const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const lipaNaMpesa = require('./payment-gateways/daraja/lipaNaMpesa')
const hook = require('./payment-gateways/daraja/webHook');

// create an express app and configure it with bodyParser middleware
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.post("/", (req, res) => {
    console.log(req.body) // populated!
    // res.send(200, req.body);
});

app.post('/lipaNaMpesa', (req, res) => {
    console.log('lipaNaMpesa')
    try {
        switch(req.body.exampleRadios) {
            case 'lipaNaMpesa':
                return lipaNaMpesa.processLipaNaMpesaRequest(req.body);
            default:
                return;
        }
    } catch (e) {
        console.log(e);
    }
    res.json({
        "status": 200,
        "message": 'Success'
    });
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