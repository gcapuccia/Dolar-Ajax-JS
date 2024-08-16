
////////////////////////Dia de Actializacion/////////////////////////////
const fecha = new Date();
const hoy = fecha.getDate();
document.getElementById('fecha').innerText = hoy;


/////////////////////INICIALIZAMOS FUNCION AJAX/////////////////////////////
function ajax(config) {
    let xhr = new XMLHttpRequest;
    xhr.open(config.metodo, config.url);

    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            config.load(JSON.parse(xhr.response));
        }
    })
    xhr.send(config.data);
}



////////////////////Aplicacion Dolar///////////////////////
//URL api rest
const url = 'https://dolarapi.com/v1/dolares';

function dameDolar() {
    
    ajax({
        metodo: "GET",
        url: url,
        load: dolar =>{
            var tabla = document.getElementById("tablaDolar");

            for (let index = 0; index < dolar.length; index++) {
                var dolarNombre = dolar[index].casa.nombre;
                var dolarCompra = dolar[index].casa.compra;
                var dolarVenta = dolar[index].casa.venta;
                var dolarVariacion = dolar[index].casa.fechaActualizacion;

                //console.log(dolarNombre);
                //console.log(dolarCompra);
                //console.log(dolarVenta);
                switch (dolarNombre) {
                    case "Dolar Oficial":
                        var Explicacion = "Valor del dolar Oficial";
                        break;
                    case "Dolar Blue":
                        var Explicacion = "En aquellos países donde se establecen mercados negros de dólares se llama eufemísticamente «dólar paralelo», «dólar negro» o, en la Argentina, «dólar blue».​​​";
                        break;
                    case "Dolar Soja":
                        var Explicacion = "El dólar soja que funcionó entre agosto y septiembre era un tipo de cambio diferencial que buscaba incentivar a que los productores liquidaran la oleaginosa, como una forma de conseguir divisas para engrosar las reservas del Banco Central (BCRA).";
                        break;
                    case "Dolar Contado con Liqui":
                        var Explicacion = "Se trata de una operación bursátil que posibilita hacerse de dólares a aquellos inversores que cuentan con pesos en su cuenta comitente o hacerse de pesos a quienes tengan dólares.";
                        break;
                    case "Dolar Bolsa":
                        var Explicacion = "El dólar MEP, también conocido como dólar bolsa, es un tipo de cambio resultante de una operación que consiste en la compra de un bono en pesos (generalmente el AL30 o GD 30) para luego venderlos por dólares. La operación se realiza de manera online y es 100% legal.";
                        break;
                    case "Bitcoin":
                        var Explicacion = "Moneda Virtual la cual cotiza en Dolares";
                        break;
                    case "Dolar turista":
                        var Explicacion = "A esta ya larga lista se suma ahora el dólar para turistas extranjeros, es decir una cotización diferencial que reciben las personas que visitan nuestro país por sus consumos con tarjeta de crédito y débito.";
                        break;
                    default:
                        var Explicacion = "";
                        break;
                }

                
                if (dolarNombre != "Argentina") {
                    if (dolarNombre != "Dolar") {
                        var pos = document.createElement('tr');
                        pos.innerHTML = "<td>" + dolarNombre + "</td><td>$" + dolarCompra + "</td><td>$" + dolarVenta + "</td><td>" + dolarVariacion + "%</td><td>" + Explicacion + "</td>";
                        tablaDolar.appendChild(pos);
                    }
                }
               
                
            }

        }
    })
}



