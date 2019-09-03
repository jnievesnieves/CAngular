let nombre:string= "Peter";
let numero:number = 123;
let boleano:boolean = true;

let fecha:Date = new Date();

fecha = new Date('2019-08-08');

let cualquiera:any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = boleano;
cualquiera = fecha;

let spiderman ={
    nombre :"Peter",
    edad : 29
};

//--------------------------------------------------------------------------------------------------------------------------------

nombre = "Jesus";
let apellidoPaterno:string = "Nieves";
let apellidoMaterno:string = "Nieves";
let edad:number = 23;

// let texto = "Hola, " + nombre + " " + apellidoPaterno + " " apellidoMaterno + "( " + edad ")" ;

let texto = `Hola, ${nombre} ${apellidoPaterno} ${apellidoMaterno} (${edad})`;

/*
  ${} dentro de las llaves podemos escribir codigo java por ejemplo llamar metodoa o hacer operaciones 
  matematicas
*/

console.log(texto);

//--------------------------------------------------------------------------------------------------------------------------

function activar(quien:string ,objeto:string = "Batiseñal",momento?:string){ // con el signo de ? indicamos que es una
                                                                            //que puede o no enviarce al metodo 
    let mensaje:string;
    
    mensaje = `${quien} Activo la ${objeto}`;

    if(momento){
        mensaje = `${quien} Activo la ${objeto} en la ${momento}`;
    }else{
        mensaje = `${quien} Activo la ${objeto}`;
    }


    console.log(mensaje);
}

activar("Gordon");
activar("Gordon","batiseñal","Tarde");

//------------------------------------------------------------------------------------------------------------------------------
let miFuncion = function (a:string){
    return a;
};

let miFuncionFlecha = (a:string)=> a;

console.log(miFuncion("Nieves"));
console.log(miFuncionFlecha("Jesus"));

let suma = function (numero1:number , numero2:number){
    return numero1+numero2;
};

let sumaFlecha = (numero1:number,numeo2:number) => numero1+numeo2;

console.log(suma(1,2));
console.log(sumaFlecha(3,4));

let nombreMayusculas = function(nombre:string){
    return nombre.toUpperCase();
}

let nombreMayusculasFlecha = (nombre:string) => nombre.toUpperCase();

console.log(nombreMayusculas("Nieves"));
console.log(nombreMayusculasFlecha("Jesus"));

let hulk = {
    nombre:"Hulk",
    smash(){
        setTimeout( function(){
            console.log(this.nombre + " SMASH!!!!!!");
        },1500);
       
    }
}

hulk.smash();