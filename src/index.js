//USE STRICT O MODO ESTRICTO

/**
    "use strict" es una línea que indica que el código debe ser usado "en modo estricto", es decir,
    no se pueden utilizar variables no declaradas.
    Fuera de una función tienen ámbito global; dentro de ella, local (el de la función).

    SINTAXIS: "use strict";
 */

"use strict";

let persona = "juanfran";
let nacimiento;

function informacion() {
    persona = "Juan";
    nacimiento = "1815";
    console.log(persona + " nació en " + nacimiento);
}

informacion();

//El código anterior funciona perfectamente.

//¿Qué pasaría si comentamos la linea 14 (let nacimiento;)?. Daría un error por no haber declarado
//la variable. "use strict" me obliga SIEMPRE a declarar las variables antes de poder utilizarlas.

