var detalleProducto = [];


function showMostrar(detalle){
    let info = "";
    let fotos = "";

    info += `
    <h2> <strong>${detalle.name} </strong></h2><br>
    <p> ${detalle.descriptionAll} </p><br><p>${detalle.category}</p>
    <div>${fotos}</div><br>
    <p>Precio: ${detalle.cost} ${detalle.currency}  Productos Vendidos${detalle.soldCount}</p>
    `
    fotos += ` 
    <img class="img" src="img/${detalle.id}/prod1.jpg>"
    <img class="img" src="img/${detalle.id}/prod2.jpg>"
    <img class="img" src="img/${detalle.id}/prod3.jpg>"
    <img class="img" src="img/${detalle.id}/prod4.jpg>"
    <img class="img" src="img/${detalle.id}/prod5.jpg>"    
    `

    document.getElementById("contenido").innerHTML = info;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL + id + '.json').then(function (result) {
        if (result.status === 'ok') {
            result.data.forEach(detalle => {
                if (detalle.id == localStorage.getItem('auto')) {
                    detalle = detalleProducto;
                    showMostrar(detalleProducto);

                }

            });
        };
    });
});