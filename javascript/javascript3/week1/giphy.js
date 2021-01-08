"user strict"
const searchTag = document.querySelector("#search")
const btn = document.querySelector("#button")
const limit = document.querySelector("#number")
const div = document.getElementById("giphyimages");
function reset() {
  div.innerHTML = "";
}

function getGiphys() {
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=0amYlv8K1cFW1zpTSWkJiMdd7OUueNSt&q=${searchTag.value}&limit=${limit.value}&offset=0&rating=g&lang=en`)
    .then(response => response.json())
    .then(giphyData => {
      reset();
      
      giphyData.data.forEach(giphy => {
        const img = document.createElement("img")
        img.src = `${giphy.images.fixed_width.url}`
        div.appendChild(img);             

      });

    })

}
btn.addEventListener("click", getGiphys);
limit.addEventListener("input", getGiphys)
