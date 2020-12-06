"use strict"
console.log("Script loaded");

const products = getAvailableProducts();
function renderProducts(products) {
  const ul_tag = document.querySelector("ul");
  ul_tag.innerHTML = "";
  for (const product of products){
      const li_tag = document.createElement("li");
      ul_tag.appendChild(li_tag);
      const h2_tag = document.createElement("h2");
      h2_tag.innerHTML = product.name;
      li_tag.appendChild(h2_tag);
      const p_pricetag = document.createElement("p");
      p_pricetag.innerHTML = "Price: " + product.price;
      li_tag.appendChild(p_pricetag);         
      const p_ratingtag = document.createElement("p");
      p_ratingtag.innerHTML = "Rating: " + product.rating;
      li_tag.appendChild(p_ratingtag);
   }       
     
  }

  renderProducts(products);
  console.log(products);