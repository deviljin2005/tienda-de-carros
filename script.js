// Mostrar mensaje en consola
console.log("🚗 Bienvenido a AutoStore");

// Toggle menú responsive
const menuBtn = document.getElementById("menu-btn");
const navUl = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// Alerta al comprar
const botones = document.querySelectorAll(".producto .btn");
botones.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("✅ Tu pedido ha sido agregado al carrito");
  });
});
