document.addEventListener("DOMContentLoaded", function () {
    const shopButton = document.querySelector(".hero button");
    if(shopButton){
        shopButton.addEventListener("click",function(){
            alert("Shop Now button clicked!");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.closest('.product');
      const productName = product.querySelector('h3').textContent;
      const productPrice = product.querySelector('p').textContent;
      const productImage = product.querySelector('.product-image').src;

      const item = {
        name: productName,
        price: productPrice,
        image: productImage,
      };

      let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      alert(`${productName} added to cart!`);
    });
  });
  
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${item.image}" width="100">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <hr/>
    `;
    container.appendChild(div);
  });
});
