//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=> {

    var today = new Date();
    var options = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    };

    var day = today.toLocaleDateString("ja-JP", options);

    res.render("list", {
        kindOfDay: day,
        addItems: items
    });
});

app.post("/", (req, res)=> {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server is running at port 3000!");
});