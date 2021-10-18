//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const Usd = 40;
var carrit = "";
// Realizar una petición web a una URL donde se encuentra un carrito ya con un producto precargado. 
//Mostrar en HTML la información respecto al mismo, y los elementos gráficos que involucran al carrito
// (cantidad de productos, subtotal, envío, etc).
function showItemCart(carrit) {
  cart = '';
  for (let i = 0; i < carrit.length; i++) {
    var carrito = carrit[i];
    cart += `<div class="col-5 d-flex justify-content-center">
          <div class="img-fluid"> <img src="${carrito.src}" width="100" class="card-img-top" alt="..."></div>
          <div class="card-body">
            <h5 class="card-title">${carrito.name}</h5>
            <p class="card-text"><input type="number" class="" id="count"  value="${carrito.count}" size="5"> unidades</p>
            <p class="card-text">Precio por unidad:${carrito.currency} ${carrito.unitCost} </p>
            <p class="card-text">Precio Subtotal de ${carrito.name}:<p id="subtotal">${carrito.unitCost * carrito.count}</p></p>
          </div>
        </div>
      </div>`

    document.getElementById("cart").innerHTML += cart;
  }

}
function subTotal(unit) {
  let element = document.getElementById('count').value;
  let subtotal = unit * element;
  document.getElementById('subtotal').innerHTML = subtotal;

}


document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_INFO_URL).then(function (result) {
    if (result.status === 'ok') {
      var carrito = result.data.articles;
      showItemCart(carrito);
      let total = document.getElementById('subtotal');
      let subfinal = total.textContent;
      document.getElementById("total").innerText = subfinal;
      document.getElementById('count').addEventListener('change', function () {
        subTotal(carrito[0].unitCost);
        let total = document.getElementById('subtotal');
        let subfinal = total.textContent;
        document.getElementById("total").innerText = subfinal;
      })

    }
  })
})




/*

if (carrito.currency === 'UYU') {
      total = total + carrito.unitCost * carrito.count;
    }
    if (carrito.currency === 'USD') {
      total = total + (carrito.unitCost * Usd) * carrito.count;
    }



onchange="${subTotal(carrito.unitCost)}"
    */