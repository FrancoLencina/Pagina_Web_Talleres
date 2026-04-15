    document.addEventListener("DOMContentLoaded", main());
function main() {
    const searchBar = document.getElementById("buscador");
    const talleres = document.querySelectorAll(".taller-card");
    searchBar.addEventListener("change", () => {
        let busqueda = searchBar.value.toLowerCase();
        talleres.forEach(function(taller){
            let nombre = taller.innerHTML.toLowerCase();
            if(nombre.includes(busqueda)){
                taller.style.display = "block";
            } else {
                taller.style.display = "none";
            }
        });
    });
}