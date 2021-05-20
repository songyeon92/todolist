//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require( __dirname + "/date.js");

const app = express();

const items = [];
const workitems = [];

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{

    let day = date.getDate();

    res.render("list", { 
        listTitle: day, 
        yoTe: items
    });
});

app.post("/", (req, res)=> {

    const item = req.body.wtd; 

    if (req.body.list === "Work") {
        workitems.push(item);
        res.redirect("/work");
    } else {
        items.push(item); 
        res.redirect("/");  
    }

});

app.get("/work", (req, res) => {
    res.render("list", { listTitle: "Work List", yoTe: workitems });
});

app.post("/work", (req, res)=> {
    const item = req.body.wtd; 
    workitems.push(item); 
    res.redirect("/work");
});


app.listen(3000, function(){
    console.log("Server is running at port 3000!");
});