document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value.trim();
    const pass = document.getElementById("pass").value.trim();

    if (!user || !pass) {
      alert("Por favor completa todos los campos.");
    } else {
      alert(`Bienvenido, ${user}!`);
      // Aquí podrías redirigir o enviar datos al servidor.
    }
  });

  // Animación al cargar
  const animateIn = document.querySelector(".animate-slide-in");
  animateIn.classList.add("visible");
});
