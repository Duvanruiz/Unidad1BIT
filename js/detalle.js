// Simulamos una base de datos
const imagenes = [
    {
      id: 1,
      titulo: "Atardecer en la costa",
      categoria: "Naturaleza",
      imagen: "assets/img/atardecer.jpeg",
      autor: "María López",
      descripcion: "Una vista serena del atardecer sobre el mar, capturando la tranquilidad del momento."
    },
    {
      id: 2,
      titulo: "Ciudad nocturna",
      categoria: "Urbano",
      imagen: "assets/img/ciudad.jpg",
      autor: "Pedro Díaz",
      descripcion: "La ciudad iluminada por la noche, con una mezcla vibrante de luces y sombras."
    },
    {
      id: 3,
      titulo: "Retrato con sombra",
      categoria: "Retratos",
      imagen: "assets/img/retrato.jpg",
      autor: "Lucía Gómez",
      descripcion: "Un retrato artístico jugando con las sombras para resaltar los rasgos faciales."
    },
    {
      id: 4,
      titulo: "Abstracción en azul",
      categoria: "Abstracto",
      imagen: "assets/img/abstracto.jpg",
      autor: "Arturo Salazar",
      descripcion: "Formas libres y movimiento en tonos azules que inspiran calma y creatividad."
    }
  ];
  
  // Extraer ID de la URL
  function obtenerIdDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
  }
  
  function mostrarDetalle() {
    const id = obtenerIdDesdeURL();
    const imagen = imagenes.find(img => img.id === id);
  
    const contenedor = document.getElementById("detalle-imagen");
  
    if (!imagen) {
      contenedor.innerHTML = `<p class="text-danger">Imagen no encontrada.</p>`;
      return;
    }
  
    contenedor.innerHTML = `
      <div class="row">
        <div class="col-md-6 mb-4">
          <img src="${imagen.imagen}" alt="${imagen.titulo}" class="img-fluid rounded shadow img-zoom" />
        </div>
        <div class="col-md-6">
          <h2>${imagen.titulo}</h2>
          <p class="text-muted">Por ${imagen.autor} | <span class="text-acento">${imagen.categoria}</span></p>
          <p>${imagen.descripcion}</p>
          <a href="galeria.html" class="btn btn-acento mt-3">Volver a la galería</a>
        </div>
      </div>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", mostrarDetalle);
  