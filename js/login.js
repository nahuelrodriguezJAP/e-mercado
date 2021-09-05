//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("submit").addEventListener("click", function () {
        let usuario = document.getElementById("user").value;

        if(usuario !== ""){
        localStorage.setItem('user',JSON.stringify(usuario));
        }
    });   
})