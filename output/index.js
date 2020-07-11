"use strict";

//ÁMBITO DE VARIABLES

/*El ámbito de una variable (scope) es la zona del programa en la que se define.
  Javascript define 2 ámbitos para variables: local y global.
  Mediante 'var' podemos definir como ámbito local el ámbito de una función.
  Con 'let', por el contrario, podemos diferenciar también el ámbito de bloque.
  */
function ambito() {
  "use strict";

  var a = "Ámbito de función";

  if (true) {
    var _a = "Ámbito de bloque";
    console.log("El ambito de bloque a es: " + _a);
  }

  console.log("El ámbito de función a es: " + a);
}

ambito();

function ambito2() {
  "use strict";

  var a = "Ámbito de función";

  if (true) {
    var a = "Ámbito de bloque";
    console.log("El ambito de bloque a es: " + a);
  }

  console.log("El ámbito de función a es: " + a);
}

ambito2(); //¿Qué pasaría si trabajamos con 'var' en vez de con 'let'?