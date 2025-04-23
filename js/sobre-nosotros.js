document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contacto-form");
    const exito = document.getElementById("mensaje-exito");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();
  
      if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoValido.test(correo)) {
        alert("Por favor, ingresa un correo válido.");
        return;
      }
  
      // Simulación de envío
      exito.classList.remove("d-none");
      form.reset();
    });
  });
  