console.log("Script loaded");
"use strict"

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
  //console.log(products);


    const search_tag_product = document.getElementById("searchByProduct");         

    search_tag_product.addEventListener("keypress", function(){
        userValue = search_tag_product.value;
        const filteredProducts = products.filter(product => {
            if(product.name.toLowerCase().includes(userValue)){           
                return product}
        })
        return renderProducts(filteredProducts);

    })
    const search_tag_price = document.getElementById("searchByPrice");
    search_tag_price.addEventListener("input",function(){
        userPrice = search_tag_price.value;
        maxPrice = parseInt(userPrice)
               
        const filteredByPrice = products.filter(product =>{
            if(product.price< maxPrice){
                return product;
            }
            
        } )
        if(userPrice=== ""){
         filteredByPrice= products;
        }
        return renderProducts(filteredByPrice)
    } )
    const select_tag = document.getElementById("sortingProducts");
    select_tag.addEventListener("change", sortingByPrice);
    function sortingByPrice(){
        const userSelection = select_tag.options[select_tag.selectedIndex].value;
       if(userSelection==="lowtohighrating"){
            const lowpricedproducts = products.sort((a,b)=> a.rating-b.rating);
            renderProducts(lowpricedproducts)
        }
        else if(userSelection==="hightolowrating"){
            const highpricedproducts = products.sort((a,b)=> b.rating-a.rating);
            renderProducts(highpricedproducts)
        }
        else if(userSelection==="lowtohigh"){
            const lowpricedproducts = products.sort((a,b)=> a.price-b.price);
            renderProducts(lowpricedproducts)
        }
        else if(userSelection==="hightolow"){
            const highpricedproducts = products.sort((a,b)=> b.price-a.price);
            renderProducts(highpricedproducts)
        }
    }
   

  