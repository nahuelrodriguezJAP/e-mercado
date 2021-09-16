var detalleProducto ="";
var comentarios=[];

function showMostrar(detalleProducto) {
    let info = "";
    info += `
    <br><br> 
    <br><br><h2> <strong>${detalleProducto.name} </strong></h2><br>
    <div id="fotos"><img class="img" width="720" src="${detalleProducto.images[00]}"><img class="img"  width="720" src="${detalleProducto.images[1]}"><img class="img"  width="720" src="${detalleProducto.images[2]}"><img class="img"  width="720" src="${detalleProducto.images[3]}"><img class="img"  width="720" src="${detalleProducto.images[4]}"></p> </div>
    <p> ${detalleProducto.description} </p><br><p>${detalleProducto.category}</p><p>Precio: ${detalleProducto.cost} ${detalleProducto.currency}  Productos Vendidos${detalleProducto.soldCount}</p>
    `
    document.getElementById("contenido").innerHTML = info;
}

function showComents(){
    let coments = "<br><h3> Comentarios de Clientes: </h3><br>";
    for (let i = 0; i < comentarios.length; i++) {
        let comments = comentarios[i];
    coments+=`
    <p> ${comments.description} dice: ${comments.user} </p>
    <p> Día: ${comments.dateTime} horas.</p>
    `
    }
    document.getElementById("comentarios").innerHTML+=coments;
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
            comentarios=result.data;
            showComents(comentarios);


        }

    })
})