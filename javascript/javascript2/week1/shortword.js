const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord (){
    let shortWord;
    for(let i=1; i<danishWords.length; i++){     
        
       if(danishWords[i].length < danishWords[i-1].length){
           shortWord = danishWords[i];
        }else{
            shortWord = danishWords[i-1];
        }
    }
    return 'shortest string is '+shortWord;
    
}
//getShortestWord(danishWords);
const shortestString = getShortestWord(danishWords);
console.log(shortestString);
