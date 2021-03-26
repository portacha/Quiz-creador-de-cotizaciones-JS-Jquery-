var valorSeleccionado = null;
var valorTotal = 0;
var valorMostrado = 0;
var topic;
var valorPorcent = 0;
var topicFiltrado = ["general"];
var f = 0
//Aqui guardamos un registro de Las preguntas y selecciones
var tablaResultados = `
<h4> ${$('#preguntas').html()}</h4>
`;
var respuestaSeleccionada;

$(document).ready(function () {
    interactividad();
});

//Toda la interactividad se metio en una funcion para activarla cuando se suplante el contenido al dar en siguiente.
function interactividad() {
    //esta funcion agarra el valor del data seleccionado para asignar un precio.
    $(".respuesta").click(function () {
        $("#contador").toggleClass("contadorPlay");
        $("#contador").toggleClass("contadorPlay2");
        respuestaSeleccionada = $(this).html();
        if (valorPorcent == 0 || valorPorcent == undefined) {
            valorSeleccionado = ($(this).data("precio"));
            // console.log("El valor es nulo o 0");
        } else {
            valorSeleccionado = ($(this).data("precio"));
            valorSeleccionado = (valorSeleccionado / 100) * valorPorcent;
        }
        topic = $(this).data("topic");
        var topicFind = topic.match("%");
        if (topicFind === null) {
            // console.log("es dineros");
            $("#contador").html(("+$" + valorSeleccionado));
            aumentoTemporal(valorSeleccionado);
        } else {
            $("#contador").html(("+ %" + valorSeleccionado));
            //console.log("es porcentaje");
        }


        //asignamos el topic desde la primera pregunta
        // fitrarTopic();
    });

    // esta funcion hace un aumento temporal al seleccionar.
    function aumentoTemporal(valorTemp) {
        valorMostrado = valorTotal + valorTemp;
        var valorHTML = "<h1>$" + valorMostrado + ".00 MXN</h1>";
        $("#precio").html(valorHTML);
    }


    //esta funcion hace el efecto del hover sobre el precio para mostrar
    //el precio sin sumar.
    $("#precio").hover(function () {
        var valorHTML = "<h1><small>Llevas</small> $" + valorTotal + ".00 MXN</h1>";
        $("#precio").html(valorHTML);
    }, function () {
        $("#contador").html(valorSeleccionado + valorTotal);
        aumentoTemporal(valorSeleccionado);
    }
    );
}

//Esta funcion hace el aumento permanente.
function aumento() {
    if (f > 0){
    var topicFind = topic.match("%");
    }
    tablaResultados += `<p>Respuesta: ${respuestaSeleccionada}</p>`

    if (topicFind === null) {
        valorTotal += valorSeleccionado;

        //Registro Precio
        tablaResultados += `<p>Valor: + $ ${valorSeleccionado}.00 MXN</p>`;

    } else {
        valorPorcent += valorSeleccionado;
        //console.log(valorPorcent);

        //Registro Porcentaje Actual
        tablaResultados += `<p>Aumento Porcentual al  ${valorPorcent}% </p> `;

    }

    valorSeleccionado = null;
}


//Aqui van las preguntas y sus resouestas. si alguna de las preguntas tiene en topic el signo de % esto aumentara el precio o disminuira como porcentaje.
var pr = [
    {
        topic: "general%",
        pregunta: "¿Con que producto o servicio estas pensando comenzar tu digitalización?",
        objRespuesta: [
            {
                respuesta: "Marketing (administración de redes sociales y publicidad online)",
                precio: "0"
            },
            {
                respuesta: "Imagen (Logos, Videos,banners, etc)",
                precio: "0"
            },
            {
                respuesta: "Creacion de Redes Sociales o Sitio web",
                precio: "0"
            }
        ]
    },
    {
        topic: "general%",
        pregunta: "Que alcance tiene tu marca actualmente?",
        objRespuesta: [
            {
                respuesta: "Local",
                precio: "50"
            },
            {
                respuesta: "estatal",
                precio: "100"
            },
            {
                respuesta: "Nacional",
                precio: "200"
            }
        ]
    },
    {
        topic: "marketing%",
        pregunta: "¿Cuantos productos o servicios quieres promocionar?",
        objRespuesta: [
            {
                respuesta: "1-5",
                precio: "20"
            },
            {
                respuesta: "5-10",
                precio: "100"
            },
            {
                respuesta: "10-30",
                precio: "300"
            },
            {
                respuesta: "mas de 30",
                precio: "500"
            }
        ]
    },
    {
        topic: "general",
        pregunta: "Cuentas con stock de tu marca? (fotografiás, diseños, videos, etc)",
        objRespuesta: [
            {
                respuesta: "Si",
                precio: "0"
            },
            {
                respuesta: "No, por ahora trabajare con material de stock",
                precio: "500"
            },
            {
                respuesta: "No, agregalo a la cotización",
                precio: "3000"
            }
        ]
    },
    {
        topic: "general",
        pregunta: "¿Tu marca ya tiene Logo?",
        objRespuesta: [
            {
                respuesta: "Si",
                precio: "0"
            },
            {
                respuesta: "No",
                precio: "3000"
            },
            {
                respuesta: "Si, pero quiero un rediseño",
                precio: "2000"
            }
        ]
    },
    {
        topic: "general",
        pregunta: "¿Te gustaria agregar el diseño de branding?",
        objRespuesta: [
            {
                respuesta: "Si",
                precio: "0"
            },
            {
                respuesta: "No",
                precio: "5000"
            },
            {
                respuesta: "No me interesa",
                precio: "0"
            }
        ]
    },
    {
        topic: "marketing",
        pregunta: "¿Te interesa una campaña Organica o de Pago?",
        objRespuesta: [
            {
                respuesta: "Organica",
                precio: "2500"
            },
            {
                respuesta: "Pago",
                precio: "5300"
            },
            {
                respuesta: "Ambas",
                precio: "7000"
            }
        ]
    },
    {
        topic: "marketing",
        pregunta: "¿Tus ventas son Online o Venta Directa?",
        objRespuesta: [
            {
                respuesta: "Online",
                precio: "500"
            },
            {
                respuesta: "Directa",
                precio: "200"
            },
            {
                respuesta: "Ambas",
                precio: "1000"
            }
        ]
    },
    {
        topic: "imagen",
        pregunta: "¿Quieres agregar el diseño de imagen para redes sociales? (Portada, Redacción y Perfil)",
        objRespuesta: [
            {
                respuesta: "Si",
                precio: "1500"
            },
            {
                respuesta: "No",
                precio: "0"
            }
        ]
    },
    {
        topic: "imagen",
        pregunta: "¿Quieres agregar un diseño personalizado? (Banner, Publicacion, Etc.)",
        objRespuesta: [
            {
                respuesta: "Si",
                precio: "800"
            },
            {
                respuesta: "No",
                precio: "0"
            }
        ]
    },
    {
        topic: "imagen",
        pregunta: "¿Necesitas el archivo Original Editable?",
        objRespuesta: [
            {
                respuesta: "Si",
                precio: "500"
            },
            {
                respuesta: "No",
                precio: "0"
            }
        ]
    }
];


var prFilter;
var preguntaActual = 0;
var respuestaSelect = 0;

//Prueba se puede **eliminar**
/*document.getElementById("demo").innerHTML =
  pr[preguntaActual].pregunta + " - <br/>" +
  pr[preguntaActual].objRespuesta[respuestaSelect].respuesta + " - <br/>" +
  pr[preguntaActual].objRespuesta[respuestaSelect].precio + " - <br/>" +
  pr[preguntaActual].topic;*/


//Funcion de click en siguiente


aumento();
aumentoPregunta();

$("#butSig").click(function () {


    //Agregamos El topic inicial Solo se ejecuta una vez.

    if (f == 1) {
        if (topicFiltrado.lastIndexOf(topic.replace("%", "")) < 0) {
            topicFiltrado.push(topic);
            console.log("Se agregaron Topics");
            console.log(topicFiltrado);
        }
        f++;
    }



    if ((preguntaActual + 1) <= pr.length) {
        if (valorSeleccionado === null) {
            alert("seleccione una opción");
        } else {
            aumento();
            aumentoPregunta();
        }
    } else {
        if (valorSeleccionado === null) {
            alert("seleccione una opción");
        } else {
            aumento();
            aumentoPregunta();
            resultado();
        }
    }


});


//Aqui comparamos los topic agragados y aumentamos el index de la pregunta
function aumentoPregunta() {
    var topicSwitch = false;

    //Comprobamos si hay coincidencia con los topic
    if (pr[preguntaActual] === undefined) {
        resultado();
    } else {
        for (var i = 0; i <= topicFiltrado.length; i++) {
            if (pr[(preguntaActual)].topic.replace("%", "") === topicFiltrado[i]) {
                topicSwitch = true;
            }
        }

        //Aumentamos
        if (topicSwitch == true) {
            //console.log("Se aumento");
            actualizarTxt(preguntaActual);
            preguntaActual++;
            topicSwitch = false;
        } else {
            //creamos un bucle si el topic no se encuentra hasta el final
            if (preguntaActual <= pr.length) {
                preguntaActual++;
                topicSwitch = false;
                //console.log("Skip to " + preguntaActual)
                aumentoPregunta();
            } else {
                // resultado();
            }
        }
    }
}

function resultado() {
    tablaResultados = `<div class="resultados">${tablaResultados}<div>`
    $('#carta').html("<h1>El precio aproximado de tu digitalizacion es $" + valorTotal + ".00</h1>" + tablaResultados)
}

var htmlTemp;


//Esta funcion actualiza el contenido 
function actualizarTxt(pA) {
    $("#preguntas").html(pr[pA].pregunta);
    htmlTemp = "";
    for (var i = 0; i <= (pr[pA].objRespuesta.length - 1); i++) {
        htmlTemp += `<li> 
     <input type="radio" id="f-option${i}" name="selector" required="">
     <label class="respuesta" for='f-option${i}' 
data-precio="${pr[pA].objRespuesta[i].precio}" data-topic="${pr[pA].topic}"> ${pr[pA].objRespuesta[i].respuesta}</label>
     <div class="check"></div>
   </li>` ;
    }

    //Registro de la Pregunta
    tablaResultados += `<h4>Pregunta: ${pr[pA].pregunta}</h4>`;

    $("#respuestas").html(htmlTemp);

    //Aqui Asignamos el topic
    topic = pr[pA].topic;
    interactividad();
}

//Aqui filtramos el topic. Solo se ejecuta una vez al inicio.


