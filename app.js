// PRINCIPIO - ENTRADA 

	// INTRUCCIONES

// FINAL - SALIDA


// Variable 
/*
// Declaracion de una variable
let articulo;

// Inicializacion de una variable
articulo = "Zapatillas Nike Air";

// Declaramos e Inicializamos 
let nombre = "Alexa"; // String
let edad = 23; // Number

// Declaramos e Inicializamos 
let nombre2 = "Luis", 
nombre3 = "Francisco", 
nombre4 = "Sofia";


// TIPOS DE DATOS

let cadena = "Alexandra Daniela"; // String 
let numero = 24523432; // Number
let verdad = true; // Booleanos
let mentira = false; // Booleanos
let nulo = null;
let indefinido = undefined;

// CONCATENACION

let name = "Alexa";
let surname = "Martinez";
let anios = 23;
let profession = "Programadora";

console.log("Hola soy " + name + " , mi apellido es " + surname + ", tengo " + anios + " años, y soy " + profession);

// Template String - Plantaillas de texto - backticks

let resultado = `Hola soy ${name}, 
	mi apellido es, ${surname}, 
	tengo ${anios} años, y soy 
	${profession}`

console.log(resultado);

// OPERACIONES ARITMETICA
let n1 = 40;
let n2 = 4;

// SUMA
let suma = n1 + n2;
console.log(`La suma de n1 y n2 es: ${suma}`)

// RESTA
let resta = n1 - n2;
console.log(`La resta de n1 y n2 es: ${resta}`)

// MULTIPLICACION
let multi = n1 * n2;
console.log(`La multiplicacion de n1 y n2 es: ${multi}`)

// DIVISION
let div = n1 / n2;
console.log(`La division de n1 y n2 es: ${div}`)

// MODULO
let mod = n1 % n2;
console.log(`El modulo de n1 y n2 es: ${mod}`);

*/

// Entrada y Salida
/*
alert("Bienvenido a la clinica de Alexa, presione aceptar para continuar");
let nombre = prompt("Por favor, introduce tu nombre: ");
let apellido = prompt("introduce tu apellido: ");
let nroSocio = prompt("introduce tu numero de socio");

let turno = prompt(`${nombre} elegi las opciones que
	tenes a continuacion: 
	1. mañana
	2. tarde
	3. noche`);


alert("Tus datos se registraron correctamente");
alert(`${nombre} ${apellido}, tu turno se registro para el turno ${turno}`);
*/

// Condicionales 

/* let usuario = "alexa123";
console.log(usuario);
let user = prompt("Introduce tu usuario: ");
console.log(user);

if(usuario != user){

	alert("usuario no valido");
	
}else {
	
	alert("Bienvenido...");
} */

/* let numero = "2";
let numero2 = 2;
console.log(numero != numero2); // No 
console.log(numero !== numero2); // Si */


// Operadores logicos
/* 
== evalua si es true o false
=== evalua si es igual y si es del mismo tipo
*/

/* let nombre = prompt("Por favor, introduce tu nombre: ");
let producto1 = "permufe 1";
let producto2 = "permufe 2";
let producto3 = "permufe 3";

let eleccion = parseInt(prompt(`
	${nombre}, digita el numero que corresponde a las opciones: 
	1. ${producto1} 
	2. ${producto2}
	3. ${producto3}	
`));

if(eleccion === 1){

	alert("Tu producto elegido vale 40000$");

}else if(eleccion === 2){

	alert("Tu producto elegido vale 50000$");

}else if(eleccion === 3){

	alert("Tu producto elegido vale 60000$");

}else {

	alert("La opcion elegida no es correcta");
} */


/* let n1 = 10;
let n2 = 20;

console.log(n1 > n2); // false
console.log(n1 < n2); // true
console.log(n1 >= n2); // false
console.log(n1 <= n2); // true

let nayorQue = n1 < n2; // true
let igual = n1 == n2; // false

// || or basta con que una de las dos proposiciones sea verdadera
// para que te de verdadero 
console.log(n1 < n2 || n1 == n2); // true || false = true

// && y las dos proposiciones tienen que ser verdaderas para que 
// el resultado sea verdadero
console.log(n1 < n2 && !(n1 == n2)); // true && false = false
console.log(n1 != n2 && n2 != n1) // true && true = true;


console.log(!(n1 == n2)); */


/* let nombre = prompt("Por favor, introduce tu nombre: ");
let apellido = prompt("Por favor, introduce tu apellido: "); */

/* if(nombre == "Alexa" && apellido == "Martinez"){

	alert("Bienvenido a la clinica de Alexa");

}else {

	alert("No - bienvenido");
}

if(nombre == "Alexa" || apellido == "Martinez"){

	alert("Bienvenido a la clinica de Alexa");

}else {

	alert("No - bienvenido");
}
 */


/* if(nombre != "Alexa" && apellido != "Martinez"){

	alert("No eres Bienvenido a la clinica de Alexa");

}else {

	alert("Bienvenido a la clinica de Alexa");
}
 */

// Aplicacion de turnos 

/* let e1 = "Dermatologia", 
	e2 = "Clinica", 
	e3 = "Cirugia";


let nombre = prompt("Ingrese su nombre: ");

let eleccion = parseInt(prompt(`
	${nombre}, elige tu especialidad segun el numeros
	que corresponda;
	1. ${e1}
	2. ${e2}
	3. ${e3}
`));

let manana = "Mañana",
	tarde = "Tarde", 
	noche = "Noche";

let hora = parseInt(prompt(`${nombre}, elegi el horario de tu turno
	1. Mañana 8am a 12am
	2. Tarde 13pm a 19pm
	3. Noche 20pm a 22pm
`)) */

// Tarea, completar los else correspondientes.
// Tarea, seguir la programacion para ser mas especifico con los horarios 
// que en el console.log diga, Luis, elegiste la especialidad dermatoliga, 
// en el horario de la mañana 10am.

/* if(eleccion === 1){
	
	if(hora === 1){

		console.log(`${nombre}, elegiste la especialidad ${e1}, en el horario de la ${manana}`);

	}else if(hora === 2){

		console.log(`${nombre}, elegiste la especialidad ${e1}, en el horario de la ${tarde}`);

	}else if(hora === 3){

		console.log(`${nombre}, elegiste la especialidad ${e1}, en el horario de la ${noche}`);
	}


}else if(eleccion === 2){

	if(hora === 1){

		console.log(`${nombre}, elegiste la especialidad ${e2}, en el horario de la ${manana}`);

	}else if(hora === 2){

		console.log(`${nombre}, elegiste la especialidad ${e2}, en el horario de la ${tarde}`);

	}else if(hora === 3){

		console.log(`${nombre}, elegiste la especialidad ${e2}, en el horario de la ${noche}`);
	}

}else if(eleccion === 3){

	if(hora === 1){

		console.log(`${nombre}, elegiste la especialidad ${e3}, en el horario de la ${manana}`);

	}else if(hora === 2){

		console.log(`${nombre}, elegiste la especialidad ${e3}, en el horario de la ${tarde}`);

	}else if(hora === 3){

		console.log(`${nombre}, elegiste la especialidad ${e3}, en el horario de la ${noche}`);
	}
}
else{

	console.log(`${nombre}, debes colocar una especialidad que 
	esten entre las opciones`)
} */

// operadores avanzados aritmeticos

/* let n1 = 10;
console.log(n1)
n1++;
console.log(n1)
n1--;
console.log(n1) */

/* let numero = 10;
console.log(numero)
// numero = numero + 2;
numero += 2;
console.log(numero) */


// Ciclos en javascript

// inicializador
// freno
// incrementador o decrementador

for(let i=0; i<10; i++){

	if(i == 4){
		continue;
	}

	console.log(i)

}

/* for (let i = 10; i > 0; i--) {
	
	console.log(i);

} */

// Tarea Hacer backtick

/* for (let i = 0; i < 2; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+ (i+1) + " Nombre: "+ingresarNombre);
} */

/* let n1 = 0;


while(n1 < 10) {

	console.log(n1);

	n1++;
	
} */
/* 
let nombre = "";


while(nombre != "Alexa") {

	nombre = prompt("Adivina el nombre que empieza con A: ");

	console.log(nombre);
}; */

// Quiero que programes un while que le pregunte 
// constantemente al usuarios algo, y que le des
// la opcion de escribir algo para salir






