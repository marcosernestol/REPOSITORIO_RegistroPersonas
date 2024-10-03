
'use strict' // Para que se use la notación estrícta

window.addEventListener('load',function(){
//  INTERESANTE:  También funciona si la declaramos asi:
//  window.addEventListener('load',()=>{



// var caja = document.getElementById("micaja");  // Conseguir elementos con un ID concreto 
var caja = document.querySelector("#micaja");     // Y otra opción es usar el querySelector()

caja.innerHTML = caja.innerHTML  + "  ¡TEXTO EN LA CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";



// -------------------  Otras Formas de conseguir elementos del DOM  ----------------
// Conseguir elementos por su TAG NAME
//  getElementsByTagName() Regresa un ARRAY DE ELEMENTOS.
// Conseguir elementos por su etiqueta , y se muestran en consola
console.log("Elementos por ETIQUETA >>>  " + contenidoEnTexto);
var todosLosDivs = document.getElementsByTagName('div'); // Esto Mete todos los div's en un Array
var contenidoEnTexto = todosLosDivs[2].textContent; // Esto representa el contenido del 3er Div del DOM
console.log(contenidoEnTexto);


// Conseguir elementos por su etiqueta , y se mostrarlos en el DOM
// Se usa el querySelector() y solamente regresa UN elemento
var miSeccion = document.querySelector("#miSeccion"); 
var hr = document.createElement("hr"); // Crea un lemento "<hr>" o sea una linea horizontal
var valor;
for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p"); // Esta instrucción Crea un nuevo elemento en el DOM de tipo "parrafo"
		var texto = document.createTextNode(todosLosDivs[valor].textContent); // Crea un texto con el contenido del div
		parrafo.appendChild(texto);    // al párrafo le añadimos el texto ( por cada iteración )
		document.querySelector("#miSeccion").appendChild(parrafo);  // Y agregamos en parrafo en la seccion 
	}
};
miSeccion.append(hr);  // Podemoa agregar una linea horizontal en el DOM.



// Conseguir elementos por su clase getElementsByClassName() Regresa un ARRAY DE ELEMENTOS.
// En este ejemplo tomamos unod divs del DOM con class = "amarollo"  y class = "verde")
// Para pintar el color de su background
var divsVerdes = document.getElementsByClassName('verde');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsVerdes){  // Nos s
	if(divsVerdes[div].className == "verde"){
		divsVerdes[div].style.background = "green";
	}
}
// El curso hace mención de que existe otro metodo que trae TODOS LOS ELEMENTOS
// y es el método: Document.querySelectorAll()
// Pero NO puso ejemplos, solo pasó una liga a la documentación del método como referencia.
// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll



// Ahora vamos a revisar el BOM  ( Browser Object Model )
function getBom(){
	console.log(window.innerWidth);    // Obtener el tamaño de la VENTANA Interna del Navegador (Sin las Herramientas de Desarrollador)
	console.log(window.innerHeight);

	console.log(screen.width);    // Obtener el tamaño de la PANTALLA
	console.log(screen.height);

	console.log(window.location);  // Obtiene un Objeto llamado "location"
};

function redirect(url){
	window.location.href = url;
};

function abrirVentana(url){
	window.open(url);
};

function abrirVentanaEmergente(url){
	window.open(url,"","width=400,height=300");
};

getBom();
abrirVentana("https://www.google.com.mx/maps/");   // Abre una ventana (pestaña) del navegador 
abrirVentanaEmergente("https://www.google.com.mx/maps/"); // Abre una ventana emergente de Google Maps ( pero tuve que desbloquear el permiso de Ventanas Hemergentes del navehador )



// Ahora vamos a revisar el tema de los EVENTOS 


// Esta es una funcion que cambia el estilo de la variable ( o sea del Objeto ) "boton"
// y va intercambiando de color rojo a verde con cada click que se de encima de el.
function cambiarColor(){
	console.log("Me has dado click");

	var bg = boton.style.background;

	if(bg == "green"){
		boton.style.background = "red";
	}else{
		boton.style.background = "green";
	}

	boton.style.padding = "10px";
	boton.style.border = "1px solid #ccc";
	
	return true;
}

var boton = document.querySelector("#frameLogo");  // Para el ejercicio voy a usar el "LOGO" por eso capturo el objeto en una variable llamada "boton"



// Click , este es un ejemplo de como Agregar un "listener" para el Evento "click" 
boton.addEventListener('click', function(){
	cambiarColor();
	console.log(this);
	this.style.border = "10px solid black";
});


// Mouse over  , Cuendo el Mouse se encuentre encima del Objeto Boton, cambiarpa a amarillo
boton.addEventListener('mouseover', function(){
	boton.style.background = "yellow";
});

// Mouseout  , Cuando el mouse salga del objeto Boton, cambiará su color a gris
boton.addEventListener('mouseout', function(){
	boton.style.background =  "#ccc";  // También se puede usar el código rgb del color ( este es Gris)
});



// Focus
var input = document.querySelector("#campo_nombre");

input.addEventListener('focus', function(){
	console.log("[focus] Estas dentro del input");
});

// Blur
input.addEventListener('blur', function(){
	console.log("[blur] Estas fuera del input");
});

// Keydown
input.addEventListener('keydown', function(event){
	console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));

});

// Keypress
input.addEventListener('keypress', function(event){
	console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
});

// Keyup
input.addEventListener('keyup', function(event){
	console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
});





 });  // Se cierra el evento 'load'