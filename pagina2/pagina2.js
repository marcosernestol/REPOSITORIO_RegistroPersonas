
'use strict' // Para que se use la 

window.addEventListener('load',function(){
//  INTERESANTE:  También funciona si la declaramos asi:
//  window.addEventListener('load',()=>{

  // Lo más básico
      alert('Hola Marcos');         // ALERTTA
      console.log( 'Hola Mundo');   // Imprime en consola

     var mi_resultado = confirm("¿Estas seguro de querer continuar?"); // CONFIRMACIÓN
         console.log(mi_resultado);

     var mi_resultado = prompt("¿Que edad tienes?", 18);  // INGRESO DATOS
         console.log(typeof mi_resultado);

     var numero = parseInt(prompt('Introduce un numero', 0));
         console.log(typeof numero);


  // VARIABLES y Tipos de datos
   var vTexto = "México";
   var vNumero = 2024;
   console.log( vTexto , vNumero , vTexto + ' -> ' + vNumero );

  var numero_entero = 44;
  var cadena_texto = 'Hola "que" tal';
  var verdadero_o_falso = false;
  var numero_flotante = "33.4";

  console.log(typeof numero_entero);
  console.log(typeof cadena_texto);
  console.log(typeof verdadero_o_falso);
  console.log(typeof numero_flotante);

// Constantes
// Como una variable, pero su valor no puede cambiar
   var web = "https://victorroblesweb.es";
   const ip = "192.88.0.12";
   web = "https://victorroblescursos.es";
   console.log(web, ip);



// CONDICIONALES  -   IF
  /*	Mayor: >
	  Menor: <
	  Mayor o igual: >=
	  Menor o igual: <=
	  Igual: ==
	  Distinto: !=
  */

var edad = 54;
var nombre = 'David Suarez';


if(edad >= 18 ){
	// Es mayor de edad
	console.log(nombre+" tiene "+edad+" años, es mayor de edad");

	if(edad <= 33){
		console.log('Todavia eres millenial');
	}else if(edad >= 70){
		console.log('Eres anciano');
	}else{
		console.log('Ya no eres millenial');
	}

}else{
	// Es menor de edad
	console.log(nombre+" tiene "+edad+" años, es MENOR de edad");
}


 /*
  Operadores lógicos
  AND(Y): && 
  OR(O): ||
  Negación: !
 */

var year = 2024;

// Negación
if(year != 2016){
	console.log("El año no es 2016 realmente es: "+year);
}

// AND
if(year >= 2000 && year <= 2020){
	console.log("Estamos en la era actual");
}else{
	console.log("Estamos en la era post moderna");
}

// OR
if(year == 2024 || (year >= 2018 && year == 2024)){
	console.log("El año acaba en 4");
}else{
	console.log("AÑO NO REGISTRADO");
}


// Switch

var edad = 40;
var imprime = "";

switch(edad){
	case 18:
		imprime = "Acabas de cumplir la mayoria de edad";
	break;
	case 25:
		imprime = "Ya eres un adulto";
	break;
	case 40:
		imprime = "Crisis de los cuarenta";
	break;
	case 75:
		imprime = "Eres ya un anciano";
	break;
	default:
		imprime = "Tu edad es neutra";
	break;
}
console.log(imprime);


// Bucle FOR
// Bucle es una estructura de control que se repite varias veces
var numero = 3;
for(var i = 0; i <= numero; i++){
	console.log("Vamos por el numero: "+i);
	// debugger;
}



// Do while
var years = 30;
do{
	alert("SALE CUANDO SEA DIFERENTE A 25, vamos en " + years);
	years--;
}while(years > 25)



// Bucle while
var year = 2028;
while(year != 2022){

	// ejecuta esto
	console.log("Estamos en el año: "+year);
	if(year == 2024){
		break;
	}
	year--;
}



// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones

function porConsola(numero1, numero2){
	console.log("Suma: " + (numero1+numero2));
	console.log("Resta: " + (numero1-numero2));
	console.log("Multiplicacion: " + (numero1*numero2));
	console.log("División: " + (numero1/numero2));
	console.log("***********************************");
}

function porPantalla(numero1, numero2){
	document.write("Suma: " + (numero1+numero2)+"<br/>");
	document.write("Resta: " + (numero1-numero2)+"<br/>");
	document.write("Multiplicacion: " + (numero1*numero2)+"<br/>");
	document.write("División: " + (numero1/numero2)+"<br/>");
	document.write("***********************************"+"<br/>");
}

function calculadora(numero1, numero2, mostrar = false){
	if(mostrar == false){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}
	
	return true;
}

calculadora(1, 4);
calculadora(2, 5, false); // OJO, si le paso true, entonces imprimirá en Pantalla
                          // o sea: imprime en el documento HTML y desaparece todo



// Parametros REST y SPREAD
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta 1: ", fruta1);
	console.log("Fruta 2: ", fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas( ...frutas, "Sandia", "Pera", "Melon", "Coco");




// Funciones anonimas
// Es una función que no tiene nombre

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

sumame(5, 7, dato => {
	console.log("La suma es:", dato);
},
function(dato){
	console.log("La suma por dos es:", (dato*2));
});



// AMBITO de las variables 
function holaMundo(texto){
	var hola_mundo = "Texto dentro de función";

	console.log(texto);
	console.log(numero.toString());
	console.log(hola_mundo);

}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);




// Transformacion de textos
var numero = 444;
var texto1 = "   Bienvenido al curso de JavaScript curso de Victor Robles   ";
var texto2 = "es muy buen curso";

var busqueda = texto1.trim();
console.log(busqueda);


// Plantillas de texto

var nombre = prompt("METE TU NOMBRE");
var apellidos = prompt("METE TUS APELLIDOS");

// var texto = " Mi nombre es: "+nombre+" <br/> Mis apellidos son: "+apellidos;
var texto = `
	<h1>Hola que tal</h1>
	<h3>Mi nombre es: ${nombre}</h3>
	<h3>Mis apellidos son: ${apellidos}</h3>
`;

// document.write(texto);  // OJO, imprime en el documento HTML y desaparece todo
this.alert(texto); // No funcionó con el alert.




// Arrays, Arreglos, Matrices

var nombre = "Victor Robles";
var nombres = ["Victor Robles", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];
var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
if(elemento >= nombres.length){
	alert("Introduce el numero correcto menor que " + nombres.length);
}else{
	alert("El usuario seleccionado es: "+nombres[elemento]);
}

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");



// ESTA ES UNA FORMA DE RECORRER UN ARCHIVO: (Primer forma)
for(var i = 0; i < lenguajes.length; i++){
	document.write("<li> Primer For  "+lenguajes[i]+"</li>");
}

// ESTA ES UNA SEGUNDA FORMA DE RECORRER UN ARCHIVO: (Segunda forma)
 lenguajes.forEach((elemento, indice)=>{
 	document.write("<li> Segundo For"+indice+" - "+elemento+"</li>");
 });


// Y ESTA ES UNA TERCER FORMA , para recorrer un Arreglo ( Tercer Forma , es la mas usada )
for(let lenguaje in lenguajes){
	document.write("<li> Tercer For  "+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");





// Busquedas
var precios = [10, 20, 50, 80, 12];

//var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");
var busqueda = precios.some(precio => precio < 10);

console.log(busqueda);















});