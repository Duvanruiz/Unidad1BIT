const imagenes = [
    {
      id: 1,
      titulo: "Atardecer en la costa",
      categoria: "Naturaleza",
      imagen: "assets/img/atardecer.jpg",
      autor: "María López"
    },
    {
      id: 2,
      titulo: "Ciudad nocturna",
      categoria: "Urbano",
      imagen: "assets/img/ciudad.jpg",
      autor: "Pedro Díaz"
    },
    {
      id: 3,
      titulo: "Retrato con sombra",
      categoria: "Retratos",
      imagen: "assets/img/retrato.jpg",
      autor: "Lucía Gómez"
    },
    {
      id: 4,
      titulo: "Abstracción en azul",
      categoria: "Abstracto",
      imagen: "assets/img/abstracto.jpg",
      autor: "Arturo Salazar"
    },
    // Agrega más...
  ];
  
  const categorias = ["Todas", ...new Set(imagenes.map(img => img.categoria))];
  
  function renderFiltros() {
    const contenedor = document.getElementById("filtros");
    categorias.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-dark btn-sm";
      btn.textContent = cat;
      btn.dataset.categoria = cat;
      contenedor.appendChild(btn);
    });
  }
  
  function renderGaleria(filtro = "Todas") {
    const contenedor = document.getElementById("galeria-grid");
    contenedor.innerHTML = "";
  
    const filtradas = filtro === "Todas"
      ? imagenes
      : imagenes.filter(img => img.categoria === filtro);
  
    filtradas.forEach(img => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3 mb-4";
  
      col.innerHTML = `
        <div class="card-custom h-100" role="button" onclick="verDetalle(${img.id})">
          <img src="${img.imagen}" class="img-fluid" alt="${img.titulo}">
          <div class="p-2">
            <h6 class="mb-1">${img.titulo}</h6>
            <small class="text-muted">${img.autor}</small>
          </div>
        </div>
      `;
  
      contenedor.appendChild(col);
    });
  }
  
  function verDetalle(id) {
    // Simulamos navegación al detalle
    window.location.href = `detalle.html?id=${id}`;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderFiltros();
    renderGaleria();
  
    // Delegación de eventos para filtros
    document.getElementById("filtros").addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const categoria = e.target.dataset.categoria;
        renderGaleria(categoria);
      }
    });
  });
  