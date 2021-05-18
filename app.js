//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res)=>{

    var today = new Date();
    var currentDay = today.getDay();
    
    var week = ["Sunday", "Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = week[currentDay];

    res.render("list", {kindOfDay: day});
});


app.listen(3000, function(){
    console.log("Server is running at port 3000!");
});