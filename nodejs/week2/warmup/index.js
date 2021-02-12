const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res) =>{
    const first = req.query.first;
    const second = req.query.second;
    const add = function (){
       return  parseInt(first)+parseInt(second);    }   
console.log(add())
res.send(`Addition of ${first} and ${second} is ${add()}.`)
});

app.get("/numbers/multiply/:first/:second", (req, res) =>{
    const first = req.params.first;
    const second = req.params.second;
    const multiply = function (){
       return  parseInt(first)*parseInt(second);    }   
console.log(multiply())
res.send(`Multiplication of ${first} and ${second} is ${multiply()}.`)
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
