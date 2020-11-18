"use strict"
console.log("Savenote app with my unique feature.")
/*with in savenote app, i want add check mark which will help to separate finished and unfinished tasks*/ 
const notes = [];
const finishedTasks=[];
const unfinishedTasks=[];
function saveNote(content, id,check) {  
   notes.push({content:content, id:id});

  if (check){
      finishedTasks.push({content:content, id:id});    
    
  }else {
 
  unfinishedTasks.push({content:content, id:id});    
}

}

saveNote("shopping groceries", 1);
saveNote("Do laundry", 2,);
saveNote("paying bills",3);
saveNote("Pick up online-order", 1, true)


console.log(notes)// will log out all the notes
console.log(finishedTasks)
//[{content: "Pick up online-order", id: 1}]

console.log(unfinishedTasks)
/*[{content: "shopping groceries", id: 1}
  {content: "Do laundry", id: 2}
  {content: "paying bills", id: 3}]*/
