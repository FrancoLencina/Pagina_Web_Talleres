const form = document.getElementById("formRegistro");
const previewContainer = document.getElementById("preview-container");
const btnHome = document.getElementById("btn-home");
const titulo = document.getElementById("tituloHome");

//Ir al Home
titulo.addEventListener("click", () => {
  location.href = "index.html";
});

//Mostrar la preview
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const profesor = document.getElementById("profesor").value;
  const descripcion = document.getElementById("descripcion").value;
  const rubro = document.getElementById("rubro").value;
  const telefono = document.getElementById("telefono").value;
  const redes = document.getElementById("redes").value;
  const direccion = document.getElementById("direccion").value;

  const imagenInput = document.getElementById("imagen");

  let imagenURL = "taller-default.png";

  if (imagenInput.files.length > 0) {
    imagenURL = URL.createObjectURL(imagenInput.files[0]);
  }

  previewContainer.innerHTML = `
    <h4>Taller cargado. Esperando aprobación.✅</h4>
    <div class="taller-card">
      <h2>${nombre}</h2>
      <h3>Profesor ${profesor}</h3>
      <img src="${imagenURL}" alt="Taller" />
      <p>${descripcion}</p>
    </div>
  `;

  form.classList.add("oculto");

  btnHome.classList.remove("oculto");
});

//Boton para volver al home liego de la preview
btnHome.addEventListener("click", () => {
  window.location.href = "index.html";
});



