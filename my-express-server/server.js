const express = require('express');
const res = require('express/lib/response');

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: kmjordan2009.kj@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Kevin and I love beer, sports and code.");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Beer</li><li>Sports</li><li>Code</li></ul>");
})

app.listen(3000, function(){
    console.log('listening on port 3000');
});