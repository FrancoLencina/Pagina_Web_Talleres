const form = document.getElementById("formRegistro");
const previewContainer = document.getElementById("preview-container");
const btnHome = document.getElementById("btn-home");
const titulo = document.getElementById("tituloHome");

// Ir al Home
titulo.addEventListener("click", () => {
  location.href = "index.html";
});

// Mostrar preview
form.addEventListener("submit", function (e) {

  e.preventDefault();

  // Inputs
  const nombre = document.getElementById("nombreTaller").value;
  const colaborador = document.getElementById("nombreColaborador").value;
  const profesor = document.getElementById("nombreProfesor").value;
  const descripcion = document.getElementById("descripcion").value;
  const rubro = document.getElementById("rubro").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const redes = document.getElementById("redes").value;

  // Select dirección
  const direccionSeleccionada = document.getElementById("direccion").value;

  // Input dirección opcional
  const otraDireccion = document.getElementById("otraDireccion").value;

  // Dirección final
  let direccionFinal = "";

  if (direccionSeleccionada === "otra") {
    direccionFinal = otraDireccion;
  } else {
    direccionFinal = "Centro Cultural";
  }

  // Imagen
  const imagenInput = document.getElementById("imagen");

  let imagenURL = "taller-default.png";

  if (imagenInput.files.length > 0) {
    imagenURL = URL.createObjectURL(imagenInput.files[0]);
  }

  // Crear preview
  previewContainer.innerHTML = `
  
    <h4>Taller cargado. Esperando aprobación ✅</h4>

    <div class="taller-card">

      <img src="${imagenURL}" alt="Taller">

      <h2>${nombre}</h2>

      <h3>Profesor: ${profesor}</h3>

      <p><strong>Colaborador:</strong> ${colaborador}</p>

      <p>${descripcion}</p>

      <p><strong>Rubro:</strong> ${rubro}</p>

      <p><strong>Teléfono:</strong> ${telefono}</p>

      <p><strong>Correo:</strong> ${correo}</p>

      <p><strong>Redes:</strong> ${redes}</p>

      <p><strong>Dirección:</strong> ${direccionFinal}</p>

    </div>
  `;

  // Ocultar formulario
  form.classList.add("oculto");

  // Mostrar botón volver
  btnHome.classList.remove("oculto");

});

// Volver al home
btnHome.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Mostrar/ocultar input dirección
function mostrarCampo() {

  const seleccion = document.getElementById("direccion").value;

  const campo = document.getElementById("direccionOpcional");

  if (seleccion === "otra") {
    campo.style.display = "block";
  } else {
    campo.style.display = "none";
  }
}



