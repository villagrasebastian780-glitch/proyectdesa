// =========================
// Carrito con localStorage
// =========================

// Recuperar carrito desde localStorage o iniciar vacío
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Guardar carrito
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Actualizar carrito en index.html
function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  if (!cartItems || !cartTotal || !cartCount) return; // si no está en index.html, no hace nada

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.specs} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = cart.length;
}

// Botones "Agregar al carrito"
document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const specs = btn.dataset.specs;
    const price = parseFloat(btn.dataset.price);

    cart.push({ name, specs, price });
    saveCart();
    updateCart();

    alert(`${name} agregado al carrito ✅`);
  });
});

// Inicializar carrito en index.html
updateCart();
