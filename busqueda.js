document.addEventListener("DOMContentLoaded", main());
function main() {

    var map = L.map("map").setView([-34.52, -58.71], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap",
        }).addTo(map);

    const barraBusqueda = document.getElementById("buscador");
    const talleres = document.querySelectorAll(".taller-card");
    const markers = [];
    const busquedaError = document.getElementById("busquedaError");

    //Marcar los talleres
    talleres.forEach(function(taller){
        marcarTallerEnMapa(taller);
    });

    //Iniciar la busqueda
    barraBusqueda.addEventListener("change", () => {
        busquedaTalleres(barraBusqueda.value.toLowerCase());
    });

    function busquedaTalleres(string){

        markers.forEach(function (layer) {
            map.removeLayer(layer);
        });

        let busquedaExitosa = false;

        talleres.forEach(function(taller) {

            let tallerData = taller.innerHTML.toLowerCase();
            busquedaError.classList.add("oculto");
            if(tallerData.includes(string)){
                busquedaExitosa = true;
                taller.classList.remove("oculto");
                marcarTallerEnMapa(taller);
            } else {
                taller.classList.add("oculto");
            }
        });

        if (!busquedaExitosa){
            busquedaError.classList.remove("oculto");
        }
    };

    function marcarTallerEnMapa(taller){
            let latitud = parseFloat(taller.dataset.lat);
            let longitud = parseFloat(taller.dataset.lon);
            let id = parseFloat(taller.dataset.id);
            markers[id] = L.marker([latitud, longitud]).addTo(map);
        };
}