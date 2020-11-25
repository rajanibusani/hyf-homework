"use strict"
console.log("Script loaded");

const products = getAvailableProducts();
function renderProducts(products) {
    const ul_tag = document.querySelector("ul");
    for (const product of products){
        const li_tag = document.createElement("li");
        li_tag.innerHTML= "<h2>"+product.name+"</h2>"+"<span> price: "+product.price+"</span>"+"<br>"+"<span> rating: "+product.rating+"</span>"+"<br>";
        ul_tag.appendChild(li_tag);
    }

  }  
  renderProducts(products);
  console.log(products);