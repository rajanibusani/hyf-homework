//Task1: Future age calculator 

let yearOfBirth = 1988;
// used let to check with other yearofbirth and other futureyear values. 
let yearFuture = 2030;

const age = yearFuture-yearOfBirth;
/*
console.log('\"You will be '+ age + ' years old in ' + yearFuture+ '.\"')
*/
const stringText = '\"You will be '+ age + ' years old in ' + yearFuture+ '.\"';
console.log(stringText)

//TASK2: A dog age calculator

const dogYearOfBirth = 2015; //fixed. No assignment of new values.
const dogYearFuture = 2025; //can assign and check with other years.
let dogYear = dogYearFuture-dogYearOfBirth;

let shouldShowResultInDogYears = false;
if(shouldShowResultInDogYears){
    dogYear *= 7;
    console.log(`\"Your dog will be ${dogYear} dog years in ${dogYearFuture}.\"`)   
} else {
    console.log(`\"your dog will be ${dogYear} human years old in ${dogYearFuture}.\"`)
}

//Task3:House price estimator.

let widthOfHouse;
widthOfHouse = [8,5];
let heightOfHouse;
heightOfHouse = [10,8];
let depthOfHouse;
depthOfHouse = [10,11];
let gardenSizeInM2;
gardenSizeInM2 = [100,70];

//Peters house price
let volumeInMeters1 = widthOfHouse[0]*heightOfHouse[0]*depthOfHouse[0];
const amtPayingByPeter = 2500000;
let priceOfPetersHouse;
priceOfPetersHouse = volumeInMeters1 * 2.5 * 1000 + gardenSizeInM2[0] * 300;

if (priceOfPetersHouse < amtPayingByPeter){
    console.log(`Actual price of the house is ${priceOfPetersHouse}.\nPeter is paying (${amtPayingByPeter}) too high for the house.`)
    
} else if (priceOfPetersHouse == amtPayingByPeter){
    console.log('Peter is paying the right amout for the house.');
}
else {
    console.log(`Actual price of the house is ${priceOfPetersHouse}.\nPeter is paying (${amtPayingByPeter}) too little for the house.`)
}

//Julias houseprice 
let volumeInMeters2 = widthOfHouse[1]*heightOfHouse[1]*depthOfHouse[1];
const amtPayingByJulia = 1000000;
let priceOfJuliasHouse;
priceOfJuliasHouse = volumeInMeters2 * 2.5 * 1000 + gardenSizeInM2[1] * 300;
console.log(`Actual price of the Julia\'s house is ${priceOfJuliasHouse}.`);
if (priceOfJuliasHouse < amtPayingByJulia){
console.log(`Julia is paying (${amtPayingByJulia}) too high for the house.`)  
} else if (priceOfJuliasHouse == amtPayingByJulia){
    console.log('Julia is paying the right amout for the house.');
}
else {
    console.log(`Julia is paying (${amtPayingByJulia}) too little for the house.`) 
}

//Task4: Ez Namey (Startup name generator)

let firstWords = ['Easy','Awesome','Corporate','Trade','Creativ','Software','Computer','Digital','Professional','Innovative'];
let secondWords = ['Developers', 'Tech', 'Services','Solutions','Systems','Development','Tech Tools','Technologies','Group','Technologies'];
const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * secondWords.length);
const startupName = firstWords[randomNumber1]+' '+secondWords[randomNumber2];
console.log(`The startup: \"${startupName}\" containes ${startupName.length} characters.`);
