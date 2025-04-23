const destacados = [
    {
      id: 1,
      titulo: "Atardecer en la costa",
      imagen: "assets/img/atardecer.jpg",
      autor: "María López"
    },
    {
      id: 2,
      titulo: "Bosque encantado",
      imagen: "assets/img/bosque.jpeg",
      autor: "Carlos Pérez"
    }
  ];
  
  const categorias = ["Naturaleza", "Urbano", "Retratos", "Abstracto", "Animales"];
  
  // Renderiza las imágenes destacadas
  function renderDestacados() {
    const contenedor = document.getElementById("destacados");
    destacados.forEach(item => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-lg-4 mb-4";
  
      col.innerHTML = `
        <div class="card-custom">
          <img src="${item.imagen}" alt="${item.titulo}" class="img-fluid" />
          <div class="p-3">
            <h5 class="mb-1">${item.titulo}</h5>
            <p class="text-muted small mb-0">Autor: ${item.autor}</p>
          </div>
        </div>
      `;
  
      contenedor.appendChild(col);
    });
  }
  
  // Renderiza las categorías
  function renderCategorias() {
    const contenedor = document.getElementById("categorias");
  
    categorias.forEach(cat => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3 mb-3";
  
      col.innerHTML = `
        <div class="p-3 bg-light rounded text-center border shadow-sm h-100">
          <span class="text-acento fw-semibold">${cat}</span>
        </div>
      `;
  
      contenedor.appendChild(col);
    });
  }
  
  // Inicializa funciones al cargar la página
  document.addEventListener("DOMContentLoaded", () => {
    renderDestacados();
    renderCategorias();
  });