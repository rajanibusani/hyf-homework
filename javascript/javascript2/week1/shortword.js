"use strict"
const danishWords = ["bil", "plante", "kaffe", "bog","ø",  "planetarium"];

function getShortestWord (array){
    let shortWord = array[0];
    for(let i=1; i<array.length; i++){     
        
       if(array[i].length < shortWord.length){
           shortWord = array[i];           
        }
    }
    return 'shortest string is '+shortWord;
    
}

const shortestString = getShortestWord(danishWords);
console.log(shortestString);
