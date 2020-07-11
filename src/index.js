//Declarar arrays constantes con const

/*
   Al igual que otros tipos de datos, podemos declarar arrays constantes con const
   No podemos redefinirlos utilizando el igual como lo haríamos con una variable, pero SÍ podemos
   redefinir sus valores uno a uno
*/

function cambiarArray() {
    "use strict";
    const MIARRAY = [1, 2, 3];
    console.log(MIARRAY);

    /*
    MIARRAY = [4, 5, 6];
    console.log(MIARRAY);//COMO VEMOS, ESTO DA ERROR. 
    */
    MIARRAY[0] = 4;
    MIARRAY[1] = 5;
    MIARRAY[2] = 6;
    console.log(MIARRAY); //ASÍ SÍ FUNCIONA

}

cambiarArray();