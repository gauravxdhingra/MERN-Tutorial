const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const date = require(path.join(__dirname, 'date.js'));

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.get('/', function (req, res) {
    const day = date();
    res.render('list', { listTitle: day, newListItems: items });
})

app.post('/', (req, res) => {
    let item = req.body.newItem;
    if (item) items.push(item);
    res.redirect('/');
})

app.get('/work', (req, res) => {
    res.render('list', { listTitle: "Work List", newListItems: workItems });
})

app.post('/work', (req, res) => {
    let item = req.body.newItem;
    if (item)
        if (req.body.list == "Work") {
            workItems.push(item);
            res.redirect('/work');
        } else {
            items.push(item);
            res.redirect('/');
        }
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
});