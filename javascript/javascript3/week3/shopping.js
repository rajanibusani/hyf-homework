
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    fetch('https://v6.exchangerate-api.com/v6/da8bb38c7b1ae865d25ddfb0/latest/DKK')
      .then(response => response.json())
      .then(data => {
        const currencies = data.conversion_rates
        const convertCurrency = this.price * currencies[currency];
        console.log(convertCurrency)
      })
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    this.products = this.products.filter(item => item !== product);
  }

  searchProduct(productname) {
    const searchedProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(productname.toLowerCase())
    );
    return searchedProducts;
  }
  getTotal() {
    const totalPrice = this.products.reduce((totalPrice, product) => totalPrice + product.price, 0);
    return totalPrice;
  }
  getUser() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => {
        const user = document.getElementById("user");
        user.textContent = 'Welcome : ' + data.username;
      })
  }

  renderProducts() {
    const shoppingContainer = document.getElementById("Shoppingcart")
    //fot total price of products
    const total = document.createElement("p");
    total.textContent = 'Total Price of Items : ' + this.getTotal();
    shoppingContainer.appendChild(total)

    //for products

    const olTag = document.createElement("ol");
    olTag.textContent = "";
    olTag.textContent = 'Shopping Cart has ' + this.products.length + ' products';
    shoppingContainer.appendChild(olTag)
    this.products.forEach(product => {
      const nameTag = document.createElement("li");
      nameTag.textContent = `Item : ${product.name}, Price : ${product.price}`;
      olTag.appendChild(nameTag)

    })

  }
}
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector(".modal-close")
const input = document.getElementById("search");
const modalBtn = document.querySelector('.modal-btn')

//searching the products by name and getting the products info in modal
modalBtn.addEventListener("click", () => {
  modalBg.classList.add('bg-active'); //making modal visible
  const productName = input.value;
  const ulTag = document.getElementById("search_results");
  ulTag.innerHTML = "";
  if (productName) {
    const resultProducts = shoppingCart.searchProduct(productName);
    console.log(resultProducts)
    if (resultProducts.length > 0) {
      ulTag.textContent = 'No of Products Found ' + resultProducts.length;
      shoppingCart.searchProduct(productName).forEach(product => {
        const liTag = document.createElement("li");
        liTag.textContent = `${product.name}:${product.price}`;
        ulTag.appendChild(liTag);
      })
    } else {
      ulTag.textContent = "No Products Found"
    }

  }
});

//closing modal box
modalClose.addEventListener('click', () => {
  modalBg.classList.remove('bg-active');

})

//Adding Products
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const laptop = new Product("Lenovo Laptop", 6000)
shoppingCart.addProduct(laptop);
const iphone = new Product("Apple Iphone11", 4500)
shoppingCart.addProduct(iphone);
const iphone12 = new Product("Apple Iphone12", 6500)
shoppingCart.addProduct(iphone12);
const laptop2= new Product("Dell Laptop", 5000);
shoppingCart.addProduct(laptop2);
const cam = new Product("camera", 2000)
shoppingCart.addProduct(cam);
//shoppingCart.removeProduct(cam)


shoppingCart.getUser();
shoppingCart.renderProducts()


const plant = new Product("plant", 50);
plant.convertToCurrency("USD");//8.25