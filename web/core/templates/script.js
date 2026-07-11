// =========================
// Carrito con localStorage
// =========================
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  if (!cartItems || !cartTotal || !cartCount) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - ${item.specs} - $${item.price.toFixed(2)}`;

    // Botón eliminar
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Eliminar";
    removeBtn.classList.add("remove-btn");
    removeBtn.addEventListener("click", () => {
      cart.splice(index, 1); // quitar producto
      saveCart();
      updateCart();
    });

    div.appendChild(removeBtn);
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

// Botón vaciar carrito
const clearCart = document.getElementById("clearCart");
if (clearCart) {
  clearCart.addEventListener("click", () => {
    cart = [];
    saveCart();
    updateCart();
  });
}

// Abrir/cerrar carrito
const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");

if (cartBtn && cartPanel) {
  cartBtn.addEventListener("click", () => {
    const hidden = cartPanel.getAttribute("aria-hidden");
    cartPanel.setAttribute("aria-hidden", hidden === "true" ? "false" : "true");
  });
}

// Inicializar carrito
updateCart();


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  alert(`Gracias ${nombre}, hemos recibido tu mensaje:\n${mensaje}\nTe contactaremos a ${correo}`);
  contactForm.reset();
});

