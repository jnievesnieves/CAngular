var nombre = "Peter";
var numero = 123;
var boleano = true;
var fecha = new Date();
fecha = new Date('2019-08-08');
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = boleano;
cualquiera = fecha;
var spiderman = {
    nombre: "Peter",
    edad: 29
};
//--------------------------------------------------------------------------------------------------------------------------------
nombre = "Jesus";
var apellidoPaterno = "Nieves";
var apellidoMaterno = "Nieves";
var edad = 23;
// let texto = "Hola, " + nombre + " " + apellidoPaterno + " " apellidoMaterno + "( " + edad ")" ;
var texto = "Hola, " + nombre + " " + apellidoPaterno + " " + apellidoMaterno + " (" + edad + ")";
/*
  ${} dentro de las llaves podemos escribir codigo java por ejemplo llamar metodoa o hacer operaciones
  matematicas
*/
console.log(texto);
//--------------------------------------------------------------------------------------------------------------------------
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "Batiseñal"; }
    //que puede o no enviarce al metodo 
    var mensaje;
    mensaje = quien + " Activo la " + objeto;
    if (momento) {
        mensaje = quien + " Activo la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " Activo la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon");
activar("Gordon", "batiseñal", "Tarde");
//------------------------------------------------------------------------------------------------------------------------------
var miFuncion = function (a) {
    return a;
};
var miFuncionFlecha = function (a) { return a; };
console.log(miFuncion("Nieves"));
console.log(miFuncionFlecha("Jesus"));
var suma = function (numero1, numero2) {
    return numero1 + numero2;
};
var sumaFlecha = function (numero1, numeo2) { return numero1 + numeo2; };
console.log(suma(1, 2));
console.log(sumaFlecha(3, 4));
var nombreMayusculas = function (nombre) {
    return nombre.toUpperCase();
};
var nombreMayusculasFlecha = function (nombre) { return nombre.toUpperCase(); };
console.log(nombreMayusculas("Nieves"));
console.log(nombreMayusculasFlecha("Jesus"));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + " SMASH!!!!!!");
        }, 1500);
    }
};
hulk.smash();
