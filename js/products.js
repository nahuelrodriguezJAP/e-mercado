//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var currentProductArray = [];

var min;
var max;

function showProductos(array) {
    let productos = '<br><hr><br>';
    for (let i = 0; i < array.length; i++) {
        let listado = array[i];
        if (((min == undefined) || (min != undefined && parseInt(listado.cost) >= min)) && ((max == undefined) || (max != undefined && parseInt(listado.cost) <= max))) {

            productos += '<h4>' + listado.name + '</h4> </br> ';
            productos += '<div style="text-align: center;"><img src="' + listado.imgSrc + '" class="img-thumbnail"> <p> Descripcion:' + listado.description + '</p></div> </br></br>';
            productos += "Precio: " + listado.cost + " " + listado.currency + "<br><hr><br>";
        }
        document.getElementById("productos").innerHTML += productos;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === 'ok') {  
            let currentProductArray = resultado.data;

            showProductos(currentProductArray);
        }
    })
})

document.getElementById("filtrar").addEventListener("click", function(){
    min = document.getElementById("Min").value;
    max = document.getElementById("Max").value;

    if((min != undefined) && ( min != "" && parseInt(min))>=0){
        min = parseInt(min);
    }
    else {
        min = undefined;
    }
    if((max != undefined) && (max != "" && parseInt(max)) >=0){
        max = parseInt(max);
    }
    else{
        max = undefined;
    }
    showProductos(currentProductArray);
}
)
document.getElementById("limpiar").addEventListener("click", function(){
    document.getElementById("min").value = ""; 
    document.getElementById("max").value = "";

    min = undefined;
    max = undefined;

    showProductos(currentProductArray);
})













/*
    getJSONData(PRODUCTS_URL).then(function(result){
        if(result.status= "ok"){
            showProductList(result.data)
        }

    })

});

function showProductList(){
    let htmlContentToAppend = "";
    {for(let i = 0; i < currentProductArray.length; i++){
        let product = currentProductArray[i];
    if(product.status = 'ok'){

    htmlContentToAppend =+ "Nombre: " + product.name, "Descripción: " + product.description,
    "Precio: " + product.cost + " " + product.currency, "Ventas Realizadas: " + product.soldCount
    }
    document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;
    };}
}

showProductList()*/
