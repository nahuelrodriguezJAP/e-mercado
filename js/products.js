//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const relevancia = document.getElementById("relevancia");
var currentProductArray = [];
var min;
var max;


function showProductos(array) {
    
    for (let i = 0; i < array.length; i++) {
        let productos = '<br><hr><br>';
        let listado = array[i];
        if (((min == undefined) || (min != undefined && parseInt(listado.cost) >= min)) && 
        ((max == undefined) || (max != undefined && parseInt(listado.cost) <= max))) {
            
            productos += '<h4>' + listado.name + '</h4> </br> ';
            productos += '<div style="text-align: center;"><img src="' + listado.imgSrc + '" class="img-thumbnail"> <p> Descripcion:' + listado.description + '</p></div> </br></br>';
            productos += "Precio: " + listado.cost + " " + listado.currency +        "<br>";
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
    });

    document.getElementById("filtrar").addEventListener("click", function () {
        min = document.getElementById("min").value;
        max = document.getElementById("max").value;

        if ((min != undefined) && (min != "") && (parseInt(min)) <= 0) {
            min = parseInt(min);
        }
        else {
            min = undefined;
        }
        if ((max != undefined) && (max != "") && (parseInt(max)) >= 0) {
            max = parseInt(max);
            console.log("toy")
        }
        else {
            max = undefined;
        }
        showProductos(currentProductArray);
    });
    document.getElementById("limpiar").addEventListener("click", function () {
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";
        console.log("toy")
        min = undefined;
        max = undefined;

        showProductos(currentProductArray);
    });

    document.getElementById("relevancia").addEventListener("click", function(){
        currentProductArray == currentProductArray.sort();
        console.log("toy")
        showProductos(currentProductArray);
        
    });

    document.getElementById("acendente").addEventListener("click", function(){
        currentProductArray = currentProductArray.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
        showProductos(currentProductArray);
        console.log("toy")
    })
    document.getElementById("decendente").addEventListener("click", function(){
        currentProductArray = currentProductArray.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        })
    showProductos(currentProductArray);
    console.log("toy")
    })

});













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

showProductList()


function sortProducts(criteria, array){
    let result = []
    if (criteria === relevancia){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);
            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    return result;
}}
*/
