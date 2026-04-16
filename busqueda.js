    document.addEventListener("DOMContentLoaded", main());
function main() {
    var map = L.map("map").setView([-34.52, -58.71], 13);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap",
        }).addTo(map);
    const searchBar = document.getElementById("buscador");
    const talleres = document.querySelectorAll(".taller-card");
    const markers = [];
    talleres.forEach(function(taller){
        marcarTallerEnMapa(taller);
    });
    searchBar.addEventListener("change", () => {
        busquedaTalleres(searchBar.value.toLowerCase());
    });

    function busquedaTalleres(string){
        let busqueda = searchBar.value.toLowerCase();
        markers.forEach(function (layer) {
            map.removeLayer(layer);
        });
        talleres.forEach(function(taller) {
            let nombre = taller.innerHTML.toLowerCase();
            if(nombre.includes(string)){
                taller.style.display = "block";
                marcarTallerEnMapa(taller);
            } else {
                taller.style.display = "none";
                quitarTallerEnMapa(taller);
            }
        });
    };

    function marcarTallerEnMapa(taller){
            let latitud = parseFloat(taller.dataset.lat);
            let longitud = parseFloat(taller.dataset.lon);
            let id = parseFloat(taller.dataset.id);
            markers[id] = L.marker([latitud, longitud]).addTo(map);
            console.log("id añadido: " + id);
        };

          
    function quitarTallerEnMapa(taller){
        let id = parseFloat(taller.dataset.id);
        map.removeLayer(markers[id]);
        console.log("id borrado: " + id);
    }
}