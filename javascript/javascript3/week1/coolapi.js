fetch('http://api.icndb.com/jokes/random/3')
.then(response=> response.json())
.then(response=> {
   // console.log(response)       
    response.value.forEach(element => {
        const h3 = document.createElement("h3")
        h3.innerText= element.joke;
        document.body.appendChild(h3);
        
    });
});