"use strict"
let personName;//declared here for global scope.
const todoArray = [];

function getReply(command){
    if(typeof(command)!= "string"){
     return 'please enter a valid command'       
    }
const arrayOfCommand = command.split(' '); 
const todo = command.substring(4,command.length-11); // extracting the characters for pushing todoactivity 
const firstNumber = Number(arrayOfCommand[2]); //converting into numbers for mathematical operation
const secondNumber = Number(arrayOfCommand[4]);


     switch (command){
         case 'Hello my name is Rajani Busani':
             personName = arrayOfCommand[4];
               return `Nice to meet you ${personName}`; 
             break;           
         case 'What is my name?':
             if(personName){
               return 'your name is ' + personName+'.'; 
             }else{
               return'please enter your name';
             }
             break;
         case 'Add fishing to my todo':                               
             todoArray.push(todo);
               return `${todo} added to your todo.`;
             break;
         case 'Add singing in the shower to my todo':
             todoArray.push(todo);             
               return todo+' added to your todo.';
             break;
         case 'Add buying the flowers to my todo':                               
             todoArray.push(todo);
               return `${todo} added to your todo.`;
             break;
         case 'Remove fishing from my todo':        
              return removeTodoActivity(command)
             break;
         case 'What is on my todo?':
              const todoString  = todoArray.join(' and ');              
               return `You have ${todoArray.length} todos - ${todoString}.`
             break;
           case 'What day is it today?':
               const today = new Date();
               const date = today.getDate();
               const month = today.getMonth();
               const months = ["January","February","March","April","May","June","July",
               "August","September","October","November","December"];
               const year = today.getFullYear();
                 return `${date}th of ${months[month]}, ${year}`; 
               break;
           case 'what is 3 + 3':
               if (arrayOfCommand[3]=== '+'){
                   const sum = firstNumber+secondNumber; 
                   return sum;                  
               }
               break;
            case 'what is 4 * 12':
                if (arrayOfCommand[3]=== '*'){
                    const multiplication = firstNumber*secondNumber;
                    return multiplication;
                    break;                    
                }
             case 'Set a timer for 4 minutes':
                 const timeInMinutes = arrayOfCommand[4];
                 const timeInMilliseconds = timeInMinutes * 60 * 1000;
                // setTimeout(timer(), timeInMilliseconds) ; 
                setTimeout(timer, timeInMilliseconds); 
                return  `timer set for ${timeInMinutes} minutes`;
                break; 

            case 'Arithmetic operations of a and b':  //extra command to voice assistant.
                const a = Math.floor(Math.random()*100+1);
                const b = Math.floor(Math.random()*10+1);              
                  
                  console.log(`Two Numbers are ${a} and ${b}`); //Two Numbers are 44 and 3
                  return arithmeticOperations(a,b); 
             default:
                 return 'Please enter the command in required format.'                   
     }
}
//function to remove todo's from array
function removeTodoActivity(command){
    const removeTodo = command.substring(7,command.length-13); //fishing  
    
    for(let i=0; i<todoArray.length; i++){
    if(todoArray[i]===removeTodo){
        todoArray.splice(i,1)
    }
}
return 'Removed '+removeTodo+ ' from your todo.';

}

// setting timer function
function timer(){
     console.log('Timer Done')
 }
 // for arithmetic operations of two numbers
function arithmeticOperations(a,b){
     const sumOfNumbers = a+b;
     const substractionOfNumbers = a-b;
     const divisionOfNumbers = a/b;
     const multiplicationOfNumbers = a*b;
     return {
         sumValue : sumOfNumbers,
         substractionValue : substractionOfNumbers,
         multiplicationValue : multiplicationOfNumbers,
         divisionValue : Number(divisionOfNumbers.toFixed(2))
     }
 }


console.log(getReply(12345)); //please enter a valid command
console.log(getReply('hi'))//Please enter the command in required format.
console.log(getReply("What is my name?")); // please enter your name.
console.log(getReply("Hello my name is Rajani Busani"));//Nice to meet you Rajani
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo"));//singing in the shower added to your todo.
console.log(getReply("Add buying the flowers to my todo"));//buying the flowers added to your todo.
console.log(getReply("Remove fishing from my todo"));//Removed fishing from your todo.
console.log(getReply('What is on my todo?'));//You have 2 todos - singing in the shower,buying the flowers.
console.log(getReply('What day is it today?'));//17th of November, 2020
console.log(getReply('what is 3 + 3'));  // 6
console.log(getReply('what is 4 * 12')); // 48
console.log(getReply('Set a timer for 4 minutes')); //timer set for 4 minutes, after time 'Timer Done'
console.log(getReply('Arithmetic operations of a and b'));
//ex: Two Numbers are 44 and 3,{sumValue: 47, substractionValue: 41, multiplicationValue: 132, divisionValue: 14.67}