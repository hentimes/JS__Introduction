// Variables con const
// 1.- A diferencia de var y let, con const no s puede inicializar una variable sin valor
// 2.- No se pueden reasignar el valor de una variable ya creada en una variable de tipo constante (const). En ese caso se puede cambiar la variable que almacena el primer valor a let, o eliminandole el segundo valor a dicha variable const.

var producto = 'Audifonos Gamer'; // Crear variable y asignarle un valor.

var disponible = true; // ** No se crean variables sin valor.

// producto = true; // Se reasigna valor de variable (De string a booleano).

disponible = true; // Se asigna valor a variable.

var producto1 = 'Computadora',  // Creando varias variables y asignandoles valor.
    disponible1 = true,
    categoria = 'Computadores';


//  Estilos para nombres de variables:

var nombre_producto = 'Monitor HD'; // Underscore
var nombreProducto = 'Monitor HD';  // Camelcase
var NombreProducto = 'Monitor HD';  // Pascal Case
var nombreproducto = 'Monitor HD';  // Lowercase

console.log(producto);  // Ver valor asignado a una variable en la consola del navegador.

