const contenedor = document.getElementById("lista-talleres");
const titulo = document.getElementById("titulo-buscador");
const btnRegistro = document.getElementById("btnRegistro");

//Refrescar la página 
titulo.addEventListener("click", () => {
  location.reload();
});

//Ir al Registro
btnRegistro.addEventListener("click", () => {
  location.href = "registro.html";
});

//Crear y mostrar las Tarjetas de talleres
function crearCard(taller) {
  return `
    <div class="taller-card" data-id="${taller.id}" data-lat="${taller.lat}" data-lon="${taller.lon}">
      <h2>${taller.nombre}</h2>
      <h3>${taller.profesor}</h3>
      <img src="${taller.imagen}" alt="Taller" />
      <p>${taller.descripcion}</p>
    </div>
  `;
}

function mostrarTalleres() {
  contenedor.innerHTML = "";

  talleres.forEach(taller => {
    contenedor.innerHTML += crearCard(taller);
  });
}

mostrarTalleres();