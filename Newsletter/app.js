const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/signup.html")
})

app.post('/', function (req, res) {
    var data = req.body;
    var fname = data.fname;
    var lname = data.lname;
    var email = data.email;

    var exp = {
        members: [
            { email_address: email, status: "subscribed", merge_fields: { FNAME: fname, LNAME: lname } }
        ],
    };

    var jsonData = JSON.stringify(exp);

    var options = {
        url: "https://us7.api.mailchimp.com/3.0/lists/4bfc0ed812",
        method: "POST",
        headers: { "Authorization": 'gauravxdhingra 42c22f1dfd8417a32ddbf04178ff1c56-us7' },
        body: jsonData
    }

    request(options, function (err, response, body) {
        if (err) {
            res.sendFile(__dirname + "/failure.html");
        } else {
            if (response.statusCode === 200)
                res.sendFile(__dirname + "/success.html"); else
                res.sendFile(__dirname + "/failure.html");
        }
    });
})

app.post('/failure', function (req, res) {
    res.redirect("/");
})


app.listen(process.env.PORT || 3000, function (req, res) {
    console.log('listening on port 3000');
})

// 4bfc0ed812
// 42c22f1dfd8417a32ddbf04178ff1c56-us7