document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  if (cartItems.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.innerHTML = "<p>Total: $0</p>"; 
    return;
  }

  let total = 0; 

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="item-details">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
      <button class="remove-item" data-index="${index}">Remove</button>
    `;
    container.appendChild(li);

    const price = parseFloat(item.price.replace('$', '')); 
    total += price;
  });


  totalElement.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`; 
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-item")) {
      const index = parseInt(e.target.getAttribute("data-index"));
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      location.reload();
    }
  });
});
