const request = require('request');
const prettyjson = require('prettyjson');

const { refresh_token, client_id, client_secret } = require('../config/config');
const options = {
    method: 'GET',
    url: 'https://api.imgur.com/3/image/yYUoXWu',
    headers: {
        Authorization: `Client-ID ${client_id}`
    },
    formData: {

    }
};

request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log(JSON.parse(response.body));
});

// const unirest = require('unirest');
// const API_KEY = "8a033badf4msh837054cf09a77f3p1dc57bjsn3e8bcb209e2c";
// const CLIENT_ID = client_id;

// unirest.get("https://imgur-apiv3.p.rapidapi.com/3/account/MwangiMacharia")
//     .header("X-RapidAPI-Key", API_KEY)
//     .header("Authorization", `Client-ID ${CLIENT_ID}`)
//     .end(result => {
//         console.log(result.body);
//     });