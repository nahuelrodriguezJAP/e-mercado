const relevancia = document.getElementById("relevancia");
const acendente = document.getElementById("acendente");
const decendente = document.getElementById("decendente");
var currentProductArray = [];
var currentSortCriteria = undefined;
var min;
var max;


function sortProductos(criteria, array) {
    let result = []

    if (criteria === acendente) {
        result = array.sort(function (a, b) {
            if (a.cost > b.cost) { return -1; }
            if (a.cost < b.cost) { return 1; }
            return 0;
        });
    }
    else if (criteria === decendente) {
        result = array.sort(function (a, b) {
            if (a.cost < b.cost) { return -1; }
            if (a.cost > b.cost) { return 1; }
            return 0;
        });
    }
    else if (criteria === relevancia) {
        result = array.sort(function (a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);
            if (aCount > bCount) { return -1; }
            if (aCount < bCount) { return 1; }
            return 0;
        });
    }
    return result;
};

function showProductos() {
    document.getElementById("productos").innerHTML = "";
    let productos = '<br><hr><br>';
    for (let i = 0; i < currentProductArray.length; i++) {
        let listado = currentProductArray[i];

        if (((min == undefined) || (min != undefined && parseInt(listado.cost) >= min)) &&
            ((max == undefined) || (max != undefined && parseInt(listado.cost) <= max))) {

            productos += '<h4>' + listado.name + '</h4> </br> ';
            productos += '<div style="text-align: center;"><img src="' + listado.imgSrc + '" class="img-thumbnail"> <p> Descripcion:' + listado.description + '</p></div>';
            productos += "Precio: " + listado.cost + " " + listado.currency + "<br> Rango de ventas: " + listado.soldCount + '<br><br><br>';
        }

    }
    document.getElementById("productos").innerHTML += productos;
}

function sortAndShowProductos(sortCriteria, productArray) {
    currentSortCriteria = sortCriteria;

    if (productArray != undefined) {
        currentProductArray = productArray;
    }

    currentProductArray = sortProductos(currentSortCriteria, currentProductArray);

    showProductos();
}

function serch(currentProductArray) {
    document.getElementById("productos").innerHTML = '<br><hr><br>';
    if (document.getElementById("buscador").value != "") {
        currentProductArray.forEach(listado => {
            if (listado.name.toLowerCase().indexOf(buscar) != -1) {
            sortAndShowProductos(currentProductArray)
            }
        })
    }
    if(document.getElementById("buscador").value == "" ){
        sortAndShowProductos(currentProductArray);
    }
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === 'ok') {
            currentProductArray = resultado.data;

            showProductos(currentProductArray);
        }
    });
    document.getElementById("limpiar").addEventListener("click", function () {
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";
        document.getElementById("buscador").value = "";
        min = undefined;
        max = undefined;


        showProductos(currentProductArray);
    });

    document.getElementById("relevancia").addEventListener("click", function () {
        sortAndShowProductos(relevancia);

    });

    document.getElementById("acendente").addEventListener("click", function () {
        sortAndShowProductos(acendente);

    });

    document.getElementById("decendente").addEventListener("click", function () {
        sortAndShowProductos(decendente);
    });

    document.getElementById("filtrar").addEventListener("click", function () {
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        min = document.getElementById("min").value;
        max = document.getElementById("max").value;

        if ((min != undefined) && (min != "") && (parseInt(min)) >= 0) {
            min = parseInt(min);
        }
        else {
            min = undefined;
        }

        if ((max != undefined) && (max != "") && (parseInt(max)) >= 0) {
            max = parseInt(max);
        }
        else {
            max = undefined;
        }

        showProductos(currentProductArray);
    });
    document.getElementById("buscador").addEventListener('input', function () {
        buscar = document.getElementById("buscador").value;
        serch(currentProductArray);
        
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





AVER

function showProductos(array) {

    for (let i = 0; i < array.length; i++) {
        let productos = '<br><hr><br>';
        let listado = array[i];

        if (((min == undefined) || (min != undefined && parseInt(listado.cost) >= min)) &&
            ((max == undefined) || (max != undefined && parseInt(listado.cost) <= max))) {

            productos += '<h4>' + listado.name + '</h4> </br> ';
            productos += '<div style="text-align: center;"><img src="' + listado.imgSrc + '" class="img-thumbnail"> <p> Descripcion:' + listado.description + '</p></div> </br></br>';
            productos += "Precio: " + listado.cost + " " + listado.currency + "<br>";
        }
        document.getElementById("productos").innerHTML += productos;
    }
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function (resultado) {
        if (resultado.status === 'ok') {
            currentProductArray = resultado.data;

            showProductos(currentProductArray);
        }
    });
    document.getElementById("filtrar").addEventListener("click", function () {
        console.log("filtrar")
        min = document.getElementById("min").value;
        max = document.getElementById("max").value;

        if ((min != undefined) && (min != "") && (parseInt(min)) <= 0) {
            min = parseInt(min);
        }
        else {
            min = undefined;
        }
        if ((max != undefined) && (max != "") && (parseInt(max)) <= 0) {
            max = parseInt(max);
        }
        else {
            max = undefined;
        }
        showProductos(currentProductArray);
    });
    document.getElementById("limpiar").addEventListener("click", function () {
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";
        min = undefined;
        max = undefined;

        showProductos(currentProductArray);
    });

    document.getElementById("relevancia").addEventListener("click", function () {
        console.log("relevancia")
        currentProductArray == currentProductArray.sort();
        showProductos(currentProductArray);


    });

    document.getElementById("acendente").addEventListener("click", function () {
        console.log(currentProductArray)
        console.log("acendente")
        currentProductArray.sort(function (a, b) {
            b.cost - a.cost )

    });
    showProductos(currentProductArray);
});
document.getElementById("decendente").addEventListener("click", function () {
    console.log("decendente")
    currentProductArray = currentProductArray.sort(function (a, b) {
        if (a.cost < b.cost) { return -1; }
        if (a.cost > b.cost) { return 1; }
        return 0;
    })
    showProductos(currentProductArray);
});


*/
