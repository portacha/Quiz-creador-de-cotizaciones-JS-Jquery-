# Quiz-creador-de-cotizaciones-JS-Jquery-
Crea cotizaciones respondiendo preguntas. 
Lo hice de rapido usando Jquery hace tiempo.
Sientete libre de rehacerlo o modificarlo.

Para cambiar las preguntas solo cambia el Json que se encuentra en el archivo js.
Las preguntas inician con una pregunta inicial de clasificacion que esta fuera de la variable. Se encuentra en el Html inicial.
Despues filtra las preguntas tomando el topic inicial.
Si el topic tiene el signo de "%" (porcent) entonces aumenta o reduce el acumulado porcentualmente.

[
    {
        topic: "general%",  //Agrupa y define si el aumento es porcentual o por $$.
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
    },...
