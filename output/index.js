"use strict";

//Arrow functions o funciones flechas

/*
   Las funciones flechas son una alternativa compacta a una función convencional.
   No son adecuadas para ser utilizadas como métodos y no pueden ser usadas como constructores.

   SINTAXIS: (param1, param2, ..., paramN) => {sentencias}
             (param1, param2, ..., paramN) => {return loquesea}
             (param1, param2, ..., paramN) => expresión
             () => {return expresión}

             Parentesis opcionales con un sólo parámetro.
             (parametro) => {sentencias} 
               parametro => {sentencias}
            
             Paréntesis son obligatorios siempre que la función no tenga parámetros.
             () => {sentencias}
*/
var miFuncion = function miFuncion() {
  return new Date();
};

console.log(miFuncion()); //() => {return expresión}

var miFuncion2 = function miFuncion2() {
  return new Date();
};

console.log(miFuncion2()); //() => expresión

var miFuncion3 = function miFuncion3() {
  return new Date();
};

console.log(miFuncion3());

var arraysConcatenados = function arraysConcatenados(array1, array2) {
  return array1.concat(array2);
};

console.log(arraysConcatenados([1, 2], [3, 4, 5])); //(param1, param2, ..., paramN) => {return loquesea}

var miNuevoArray = function miNuevoArray(array1, array2) {
  return array1.concat(array2);
};

console.log(miNuevoArray([1, 2], [3, 4, 5])); //(param1, param2, ..., paramN) => expresión

var miNuevoArray2 = function miNuevoArray2(array1, array2) {
  return array1.concat(array2);
};

console.log(miNuevoArray2([1, 2], [3, 4, 5]));