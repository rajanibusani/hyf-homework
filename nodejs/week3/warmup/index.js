const { request: req, request } = require("express");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/calculator", (req, res) => res.send("nodejs week3 homework"));

function checkParameters(req, res, next) {
  const objectOfParams = Object.values(req.query)
  const arrayOfParams = objectOfParams.flat(1);
  if (!arrayOfParams.some(isNaN) && !arrayOfParams.includes("")) {
    let operator = req.params.operator;
    next()
  } else {
    res.status(400).send("Enter Numbers")
  }

}

app.get("/calculator/:operator", checkParameters, (req, res) => {
  //  console.log(req.query)
  const operator = req.params.operator;
  console
  const objectOfParams = Object.values(req.query)
  const arrayOfParams = objectOfParams.flat();
  if (!arrayOfParams.some(isNaN) && !arrayOfParams.includes("")) {
    if (operator === "add") {
      const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue);
      const additionOfParams = arrayOfParams.reduce(reducer, 0)
      res.send(`${additionOfParams}`)
    } else if (operator === "subtraction") {
      const reducer = (accumulator, currentValue) => parseInt(accumulator) - parseInt(currentValue);
      const subtractionOfParams = arrayOfParams.reduce(reducer)
      res.send(`${subtractionOfParams}`)
    } else if (operator === "multiplication") {
      const reducer = (accumulator, currentValue) => parseInt(accumulator) * parseInt(currentValue);
      const multiplicationOfParams = arrayOfParams.reduce(reducer)
      res.send(`${multiplicationOfParams}`)
    } else if (operator === "division") {
      const reducer = (accumulator, currentValue) => parseFloat(accumulator) / parseFloat(currentValue);
      const divisionOfParams = arrayOfParams.reduce(reducer)
      res.send(`${divisionOfParams}`)
    }
  } else {
    res.status(400).send("Enter Numbers")
  }

});

app.post("/calculator/:operator", (req, res) => {
  const operator = req.params.operator;
  console.log(req.body)
  const objectOfParams = Object.values(req.body)
  const arrayOfParams = objectOfParams.flat(1)
  if (!arrayOfParams.some(isNaN) && !arrayOfParams.includes("")) {
      if (operator === "add") {
      const reducer = (accumulator, currentValue) => accumulator + parseInt(currentValue);
      const additionOfParams = arrayOfParams.reduce(reducer, 0)
      res.send(`${additionOfParams}`)
    } else if (operator === "subtraction") {
      const reducer = (accumulator, currentValue) => parseInt(accumulator) - parseInt(currentValue);
      const subtractionOfParams = arrayOfParams.reduce(reducer)
      res.send(`${subtractionOfParams}`)
    } else if (operator === "multiplication") {
      const reducer = (accumulator, currentValue) => parseInt(accumulator) * parseInt(currentValue);
      const multiplicationOfParams = arrayOfParams.reduce(reducer)
      res.send(`${multiplicationOfParams}`)
    } else if (operator === "division") {
      const reducer = (accumulator, currentValue) => parseFloat(accumulator) / parseFloat(currentValue);
      const divisionOfParams = arrayOfParams.reduce(reducer)
      res.send(`${divisionOfParams}`)
    }
  } else {
    res.status(400).send("Enter Numbers")
  }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
