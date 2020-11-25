"use strict"
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";
function getDanishLetters(string){
    const arrayOfString = string.split("");
    let total=0;
    let noOfå =0;
    let noOfæ =0;
    let noOfø =0;
    for(let i=0; i<arrayOfString.length; i++){
     switch (arrayOfString[i]){
            case "å":
            total+=1;
            noOfå+=1;
            break;
            case "æ":
            total+=1;
            noOfæ+=1;
            break;
            case "ø":
            total+=1;;
            noOfø+=1;
            break;
            
        }
    }
    return { total :total, å :noOfå, æ:noOfæ,ø:noOfø}
}

console.log(getDanishLetters(danishString));
console.log(getDanishLetters(danishString2));