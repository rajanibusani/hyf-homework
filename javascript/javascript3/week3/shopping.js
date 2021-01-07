
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
const input = document.getElementById("search");
input.addEventListener("input", () => {
  const productName = input.value;
  const ulTag = document.getElementById("search_results");
  ulTag.innerHTML = "";
  if (productName) {
    shoppingCart.searchProduct(productName).forEach(product => {
      const liTag = document.createElement("li");
      liTag.textContent = `${product.name}:${product.price}`;
      ulTag.appendChild(liTag);
    });
  }
});


//Adding Products
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);
const laptop = new Product("Lenovo Laptop", 6000)
shoppingCart.addProduct(laptop);
const iphone = new Product("Apple Iphone11", 4500)
shoppingCart.addProduct(iphone);
const cam = new Product("camera", 2000)
shoppingCart.addProduct(cam);
//shoppingCart.removeProduct(cam)


shoppingCart.getUser();
shoppingCart.renderProducts()


const plant = new Product("plant", 50);
plant.convertToCurrency("USD");//8.25