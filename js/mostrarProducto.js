var detalleProducto = "";
var comentarios = [];
var rec = "";

function showMostrar(detalleProducto) {
    let info = "";
    let product = "";
    info += `
    <br><br> 
    <br><br><h2> <strong>${detalleProducto.name} </strong></h2><br>
    <div class="slide">
			<div class="slide-inner">
				<input class="slide-open" type="radio" id="slide-1" name="slide" aria-hidden="true" hidden="" checked="checked">
				<div class="slide-item">
    <img class="img" width="100%" src="${detalleProducto.images[0]}"></div>
    <input class="slide-open" type="radio" id="slide-2" name="slide" aria-hidden="true" hidden="">
    <div class="slide-item"><img class="img"  width="100%" src="${detalleProducto.images[1]}"></div>
    <input class="slide-open" type="radio" id="slide-3" name="slide" aria-hidden="true" hidden="">
    <div class="slide-item"><img class="img"  width="100%" src="${detalleProducto.images[2]}"></div>
    <input class="slide-open" type="radio" id="slide-4" name="slide" aria-hidden="true" hidden="">
    <div class="slide-item"><img class="img"  width="100%" src="${detalleProducto.images[3]}"></div>
    <input class="slide-open" type="radio" id="slide-5" name="slide" aria-hidden="true" hidden="">
    <div class="slide-item"><img class="img" width="100%"  src="${detalleProducto.images[4]}"></div>     
  
    <ol class="slide-indicador">
        <li>
            <label for="slide-1" class="slide-circulo">•</label>
        </li>
        <li>
            <label for="slide-2" class="slide-circulo">•</label>
        </li>
        <li>
            <label for="slide-3" class="slide-circulo">•</label>
        </li>
        <li>
        <label for="slide-4" class="slide-circulo">•</label>
        </li>
    <li>
    <label for="slide-5" class="slide-circulo">•</label>
</li>
    </ol>
			</div>
		</div>
    </div>
    <p> ${detalleProducto.description} </p><br><p>${detalleProducto.category}</p><p>Precio: ${detalleProducto.cost} ${detalleProducto.currency}  Productos Vendidos${detalleProducto.soldCount}</p>
    `


    document.getElementById("contenido").innerHTML = info;
}
function estrellas() {
    if (comments.score === 1) {
        document.getElementById("star").innerHTML = `
        <span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></>
     `
    }
    if (comments.score === 2) {
        document.getElementById("star").innerHTML = `
            <span class="fa fa-star checked"></span><><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></>
        `
    }
    if (comments.score === 3) {
        document.getElementById("star").innerHTML = `
            <span class="fa fa-star checked"></span><><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></>
        `
    }
    if (comments.score === 4) {
        document.getElementById("star").innerHTML = `
            <span class="fa fa-star checked"></span><><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span></>
        `
    }
    if (comments.score === 5) {
        document.getElementById("star").innerHTML = `
            <span class="fa fa-star checked"></span><><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></>
        `
    }
}

function showComents() {

    let coments = "<br><h3> Comentarios de Clientes: </h3><br>";
    for (let i = 0; i < comentarios.length; i++) {
        let comments = comentarios[i];
        if (comments.score === 1) {
            coments += `
    <div>
    <div id="cajacoment"><div><p> ${comments.description}</div><div> dice: ${comments.user} </p></div><div>
    <div><p>El Día: ${comments.dateTime} horas.</p><div id="star"><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></></div><br></div> 
    </div>
    `
        }
        if (comments.score === 2) {
            coments += `
    <div>
    <div id="cajacoment"><div><p> ${comments.description}</div><div> dice: ${comments.user} </p></div><div>
    <div><p>El Día: ${comments.dateTime} horas.</p><div id="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></>
    </div><br></div> 
    </div>
    `
        }
        if (comments.score === 3) {
            coments += `
    <div>
    <div id="cajacoment"><div><p> ${comments.description}</div><div> dice: ${comments.user} </p></div><div>
    <div><p>El Día: ${comments.dateTime} horas.</p><div id="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></></div><br></div> 
    </div>
    `
        }
        if (comments.score === 4) {
            coments += `
    <div>
    <div id="cajacoment"><div><p> ${comments.description}</div><div> dice: ${comments.user} </p></div><div>
    <div><p>El Día: ${comments.dateTime} horas.<div id="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span></>
    </div></p><br></div> 
    </div>
    `
        }
        if (comments.score === 5) {
            coments += `
    <div>
    <div id="cajacoment"><div><p> ${comments.description}</div><div> dice: ${comments.user} </p></div><div>
    <div><p>El Día: ${comments.dateTime} horas.<div id="star"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></>
    </div></p><br></div> 
    </div>
    `

        }
    }

    document.getElementById("comentarios").innerHTML += coments;
}



document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL + localStorage.getItem('auto') + ".json").then(function (result) {
        if (result.status === 'ok') {
            detalleProducto = result.data
            showMostrar(detalleProducto);
            detalleProducto.relatedProducts = recomendados;


        }

    })
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (result) {
        if (result.status === 'ok') {
            comentarios = result.data;
            showComents(comentarios);

        }
    })
    getJSONData(PRODUCTS_URL).then(function (result) {
        if (result.status === 'ok') {
            let products = ' ';
            product = result.data;
            products += `<div class="container"><div class="row"><div class="col">
        <strong>${product[detalleProducto.relatedProducts[0]].name}</strong><br>
        <img src="${product[detalleProducto.relatedProducts[0]].imgSrc}" class="img-thumbnail"></img>
        </div><div class="col">
        <strong>${product[detalleProducto.relatedProducts[1]].name}</strong><br>
        <img src="${product[detalleProducto.relatedProducts[1]].imgSrc}" class="img-thumbnail"></img>
        </div></div></div>`
            document.getElementById("relacionados").innerHTML += products;
        }

    })

})