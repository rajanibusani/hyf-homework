"use strict"
//creating tags in js for name, input field, button, h2.
const br_tag_1 = document.createElement("br");
document.body.appendChild(br_tag_1);

const label_tag = document.createElement("label");
label_tag.innerHTML= "Name: ";
document.body.appendChild(label_tag);

const input_tag = document.createElement("input");
input_tag.setAttribute("type", "text");
input_tag.setAttribute("id", "name");
input_tag.setAttribute("value", "");
document.body.appendChild(input_tag);

const span_tag_1 = document.createElement("span");
span_tag_1.innerHTML = " "
document.body.appendChild(span_tag_1);

const button_tag = document.createElement("button");      
button_tag.innerHTML = "Click Me";
document.body.appendChild(button_tag);

//function to get name-spirit animal
const spiritAnimals = ["Wolf", "Butterfly", "Turtle", "Lion", "Deer", "Horse", "Tiger", "Peacock", "Bee", "Panther"];
function getspiritAnimal(){
 const userName = document.getElementById("name").value;
 const h4_tag = document.createElement("h4");
document.body.appendChild(h4_tag);
 if(userName){         
 const randomNumber1 = Math.floor(Math.random()*10); 
 h4_tag.innerHTML = userName + '-'+ spiritAnimals[randomNumber1];
 }
 else{
     h4_tag.innerHTML = "Enter name to get spirit animal"
 }        
}
// functions for radio buttons
 function click_button(){
 button_tag.addEventListener('click', getspiritAnimal) }
 
 function mouse_over(){
 input_tag.addEventListener('mouseenter', getspiritAnimal) }

 function text_typing(){
 input_tag.addEventListener('keydown', getspiritAnimal) }   