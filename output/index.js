"use strict";

//Declaración de constantes con const

/*
    Las variables constantes en Javascript tienen ámbito de bloque al igual que las variables
    definidas con 'let'.
    Como sabemos, el valor de una constante no puede variar.
    Para diferenciarlo de las variables combiene nombrarlas en mayusculas
*/
function saludar() {
  "use strict";

  var SALUDO = "Hola, amigo"; //SALUDO = "ADIOS";

  console.log(SALUDO);
}

saludar();