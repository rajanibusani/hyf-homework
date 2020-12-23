// Movies exercise : Bad Movies Array 

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(response=>response.json())
.then(movies=>{    
const badMovies = movies.filter(movie=>movie.rating<=3);
console.log(badMovies);  
const oldBadMovies= badMovies.filter(movie=>movie.year>=2000);
console.log(oldBadMovies)
})