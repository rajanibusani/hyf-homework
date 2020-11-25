"use strict"
const button_tag_1 = document.getElementById("button_1");
const spiritAnimals = ["Wolf", "Butterfly", "Turtle", "Lion", "Deer", "Horse", "Tiger", "Peacock", "Bee", "Panther"];
 const randomNumber1 = Math.floor(Math.random()*10); 
    
 const h2_tag = document.getElementById("spiritinfo");

const getSpiritAnimal = function(){
   
    const userName = document.getElementById("name").value;        
    h2_tag.innerHTML = userName + '-'+ spiritAnimals[randomNumber1];               
}
button_tag_1.addEventListener('click', getSpiritAnimal);

const button_tag_2 = document.getElementById("button_2") ;
button_tag_2.innerHTML= "Get new spirit animal";

    
function getNewSpiritAnimal(){
    const userName = document.getElementById("name").value; 
    if(userName){
        const randomNumber2 = Math.floor(Math.random()*10); 
    h2_tag.innerHTML = userName + '-'+ spiritAnimals[randomNumber2];
}else{
    h2_tag.innerHTML = "Please enter your name";
}
}
button_tag_2.addEventListener('click', getNewSpiritAnimal);
