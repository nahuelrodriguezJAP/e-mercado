var detalleProducto ="";
var comentarios="";

function showMostrar(detalleProducto) {
    let info = "";
    let fotos = ` {
        <img class="img" src="img/${localStorage.getItem('auto')}/prod1.jpg>",
        <img class="img" src="img/${localStorage.getItem('auto')}/prod2.jpg>",  
        <img class="img" src="img/${localStorage.getItem('auto')}/prod3.jpg>",
        <img class="img" src="img/${localStorage.getItem('auto')}/prod4.jpg>"
        <img class="img" src="img/${localStorage.getItem('auto')}/prod5.jpg>"    
        }`
    info += `
    <br><br> 
    <br><br><h2> <strong>${detalleProducto.name} </strong></h2><br>
    <div id="fotos"><img class="img" src="${detalleProducto.images[0]}"><img class="img" src="${detalleProducto.images[1]}"><img class="img" src="${detalleProducto.images[2]}"><img class="img" src="${detalleProducto.images[3]}"><img class="img" src="${detalleProducto.images[4]}"></p> </div>
    <p> ${detalleProducto.description} </p><br><p>${detalleProducto.category}</p><p>Precio: ${detalleProducto.cost} ${detalleProducto.currency}  Productos Vendidos${detalleProducto.soldCount}</p>
    `
    
    console.log(detalleProducto)
    document.getElementById("contenido").innerHTML = info;
}

function showComents(comments){
    let comentarios = "<br><h2> Comentarios de Clientes: </h2><br>";
    comentarios +=`
    <p> ${comments.description} dice: ${comments.user} </p>
    <p> Día: ${comments.dateTime} horas.</p>
    `

    document.getElementById("comentarios").innerHTML+=comentarios;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL+localStorage.getItem('auto')+".json").then(function (result) {
        if (result.status === 'ok') {
            detalleProducto=result.data
            showMostrar(detalleProducto);
            
        }
        
    })
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(result){
        if(result.status=== 'ok'){ 
            let comentarios=result.data;
            showComents(comentarios);


        }

    })
})