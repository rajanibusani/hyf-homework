"use strict"
//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  for (let i=0; i<names.length;i++){
    if(names[i]===nameToRemove){
     names.splice(i,1);
    }   
  }
  console.log(names);
  // will logout ["Peter", "Yana", "kristina", "Rasmus", "Samuel", "katrine", "Tala"];
  
  
// Exercise : When will we be there??

const travelInformation = {
    speed: 50,
    destinationDistance: 432
  };
function calcTimeToArrive(speed, destinationDistance){
    const time =  destinationDistance/speed;
    let hours = Math.floor(time);
let minutes = Math.round((time-hours)*60);
return `${hours} hours ${minutes} minutes`
}
const travelTime = calcTimeToArrive(travelInformation.speed, travelInformation.destinationDistance);
console.log('Time to reach destination : '+travelTime+'.');

//will logout Time to reach destination : 8 hours 38 minutes.

//Series duration exercise

 const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  }
];
const averageLifeSpan = 80;
// 1 year = approx. 8766 hours
const averageLifeSpanInHours = averageLifeSpan * 8766;
let total =0;
function seriesDurationInLife() {

  for (let i=0; i<seriesDurations.length; i++){
  // changing the days, and minutes to hours
  const totalDurationInHours = (seriesDurations[i].days*24)+ seriesDurations[i].hours+ (seriesDurations[i].minutes/60);
  
  const percentageInLifeSpan = (totalDurationInHours/averageLifeSpanInHours)*100;
  console.log(`${seriesDurations[i].title} took ${percentageInLifeSpan.toFixed(3)}% of my life.`); 
/*will logout Game of thrones took 0.010% of my life.
              Sopranos took 0.012% of my life.
              The Wire took 0.009% of my life.*/

 total+=percentageInLifeSpan;
}
console.log(`In total that is ${total.toFixed(3)}% of my life.`);
// In total that is 0.031% of my life.
}
seriesDurationInLife();

// NOTES saving App

const notes = [];

function saveNote(content, id) {  
  notes.push({content:content, id:id});
}

saveNote("shopping groceries", 1);
saveNote("Do laundry", 2);
saveNote("pay bills",3);
saveNote("pick up online-order",4)

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}, {content: 'Pay bills', id: 3},{content: "pick up online-order", id: 4}]

//Get a note with id value

function getNote(id) {

  for (let i=0; i<notes.length; i++){
    if(notes[i].id === id){
      return notes[i];
    }    
  }  
  return 'Error: please provide suitable id value';
}
const thirdNote = getNote(3);
console.log(thirdNote); // {content: 'Pay bills', id: 3}

console.log(getNote(0)); //Error: please provide suitable id value;


//logout all notes

function logOutNotesFormatted() {

  for(let i=0; i<notes.length; i++){
   console.log(`The note with id:${notes[i].id}, has the following note text: ${notes[i].content}.`)
   
  }
}
logOutNotesFormatted(); 