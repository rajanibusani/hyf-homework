//fullname
function getFullname(firstname,surname){
    return firstname+' '+surname;
}
const fullname = getFullname('Bill','Gates');
console.log(fullname);

//use formalname with full names
function getFullname(firstname,surname,useFormalName){    
    if (useFormalName == true){
        useFormalName = 'Lord';    
    } else { 
        useFormalName = '';
    }
 return useFormalName+' '+firstname+' '+surname;
}
const fullname1= getFullname('Susan','cleeve', true);
const fullname2= getFullname('Mark', 'wiens',false);
console.log(fullname1);
console.log(fullname2);

//Event day
let day = new Date();
let today = day.getDay();
const sevenDays = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];
function getEventWeekday(eventInDays){
    let eventDay = (today+eventInDays)%7;
   return sevenDays[eventDay];   
}
console.log(getEventWeekday(11)); //if today is wednesday, logs out sunday.
console.log(getEventWeekday(2)); //if today is wednesday, logs out Friday.

//Weather Wear

function getWhatToWear(temperature){
    if(temperature>=17){
        return "shorts and t-shirt"
    }else if (temperature>=10){
        return "Sweater and jeans"
    }else if (temperature>=0){
        return "winter jacket and wool hat"
    }else{
        return "winter jacket,boots, scarf,hand gloves and wool hat"
    }
}
const clothesToWear = getWhatToWear(0);
console.log(`As per the Weather outside and suggested clothes to wear are ${clothesToWear}.`);

// classstudents

const class16Students = [];
function addStudentToClass(studentName) {  
if(studentName === "") {
    console.log('You cannot add an empty string to a class');
}else if (class16Students.includes(studentName)){
    console.log(`Student ${studentName} is already in the class.The same person cannot be added to the class.`)
}else if (class16Students.length<6){
  class16Students.push(studentName);}
else if(class16Students.length=6){
    if(studentName === "Queen Margrethe II" || class16Students.includes('Queen Margrethe II')){
        class16Students.push(studentName); 
      }
         else{
      console.log('Cannot add more students to class 16')
        }
}      
  return class16Students;
  
}

function getNumberOfStudents() {  
   console.log(`Number of students in class are : ${class16Students.length}`);   
}


addStudentToClass('Sofia');
addStudentToClass('Sandhana');
addStudentToClass('Charmi');
addStudentToClass('Rajani');
addStudentToClass("");
addStudentToClass('Jyothi');
addStudentToClass('Tithi');
addStudentToClass('Rajani')
addStudentToClass('maanvi');
addStudentToClass("Queen Margrethe II")

console.log(class16Students)
getNumberOfStudents();

// Candy helper
const boughtCandy= [];
let candyPrice;
let boughtCandyPrices =0;
const amountToSpend = Math.random()*100;
console.log(`you have total amount tospend ${amountToSpend}.`)
//function for calculating candyprices
function addCandy(candyType, weight){
     switch (candyType){
     case 'Sweet':
        candyPrice = weight*0.5 ;
        boughtCandy.push(candyPrice);
        break;
     case 'Chocolate':
         candyPrice = weight*0.7;
         boughtCandy.push(candyPrice); 
         break;
     case 'Toffee':
         candyPrice = weight*1.1;
         boughtCandy.push(candyPrice); 
        break;
     case 'Chewing-gum':
         candyPrice = weight*0.03;
          boughtCandy.push(candyPrice); 
         break;             
 }
 return boughtCandy; 
}
addCandy('Sweet',25)
addCandy('Toffee',20)
addCandy('Chocolate',25)
addCandy('Chewing-gum',10)
console.log(boughtCandy);

// for adding all the candyprices in array
let i=0;
while (i<boughtCandy.length){
    boughtCandyPrices +=boughtCandy[i];
    i++;
}  
console.log(`price for bought candy ${boughtCandyPrices}.`);
function canBuyMoreCandy(){
    if (boughtCandyPrices < amountToSpend){
        return true;
    } else{
        return false;
    }
}

if (canBuyMoreCandy()=== true){
    console.log(`You have amount ${amountToSpend-boughtCandyPrices} left to spend .You can buy more, so please do!`)
}else{
    console.log('No money to spend,Enough candy for you!')
}
