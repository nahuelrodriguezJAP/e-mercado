var detalleProducto = [];


showMostrar(detalleProducto){

    let detalle ="";
    let fotos = "";

    detalle += `
    <h2> <strong>${detalle.name} </strong></h2><br>
    <p> ${detalle.description} </p><br><p>${detalle.category}</p>
    <div>${fotos}</div><br>
    <p>Precio: ${detalle.cost} ${detalle.currency}  Productos Vendidos${detalle.soldCount}</p>
    `

    fotos+= `
    <img class="img" src="img/${detalle.name}/prod.jpg>" 
    <img class="img" src="img/${detalle.name}/prod1.jpg>"
    <img class="img" src="img/${detalle.name}/prod2.jpg>"
    <img class="img" src="img/${detalle.name}/prod3.jpg>"
    <img class="img" src="img/${detalle.name}/prod4.jpg>"    
    `
    document.getElementById("contenido").innerHTML=

}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL+id+'.json').then(function(result){
        if(result.status=== 'ok'){
            result.data.forEach(detalle=> {
                if(detalle.name===JSON.parse(localStorage.getItem('auto')).detalleProducto.name){
                    detalle = detalleProducto;
                    showMostrar(detalle);

                }
                
            });
        };
    });
});