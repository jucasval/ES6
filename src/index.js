//CREACIÓN DE VARIABLES CON LET

/* let declara una variable limitando su ámbito a (scope) al bloque,
   declaración o expresión donde se está usando.
   */

//SINTAXIS: let nombreVariable [=valor];

//Usando var, lo siguiente es posible
var persona = "JuanFran";
var persona = "Castilla";
console.log(persona);

//usando let, no es posible. Da error.
let nombre = "Juanfran";
let nombre = "Castilla";
console.log(persona);

