//Functions as elements of Array

function first_function(){
    console.log("this is first element in array");
}
function second_function(){
    console.log("this is second element in array");
}
function third_function(){
    console.log("this is third element in array");
}
const arrayOfFunctions = [first_function(), second_function(), third_function()];
for(let i=0; i<arrayOfFunctions.length; i++ ){
    arrayOfFunctions[i];
}
//creating  function as a const and declaring a function normally. 

const variableFunction = function (){
    console.log("This is function expression");
}
function normalFunction (){
    console.log("This is function declaration");
}
//Creating an object that has a key whose value is a function. and calling this function.
 const obj = {
     multiply : function (x,y){
         return x*y
     }
 }

 console.log(obj.multiply(2,4))