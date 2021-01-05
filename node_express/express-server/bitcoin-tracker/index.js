const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', function (req, res) {
    console.log(req.body);
    var crypto = req.body.crypto;
    var currency = req.body.currency;
    var amount = req.body.amount;

    var url = `https://rest.coinapi.io/v1/exchangerate/${crypto}/${currency}`;
    console.log(url);

    var value;
    var result;

    request(
        {
            headers: { "X-CoinAPI-Key": "DE6EA2BF-5ECF-4C87-9DDD-6BF9BA7C0545" },
            uri: url,
            method: 'GET'
        }, function (error, rest, body) {
            if (!error && res.statusCode == 200) {
                var data = JSON.parse(body);
                value = data.rate;
                console.log(value);
                result = "<h1> " + amount + " " + crypto + " = " + amount * value + " " + currency + "</h1>";
                res.write("<p>" + data.time + "</p>");
                res.write(result);
                res.send();
            }
        });
})

app.listen(3000, function (req, res) {
    console.log("Server started at port 3000");
});