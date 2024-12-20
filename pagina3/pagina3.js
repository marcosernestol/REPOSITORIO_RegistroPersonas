
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

getBom(); // Aquí se lanza la funcion getBom() , para chacer algunas caracteristicas del BOM, como el ancho y alto de pantalla


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
// Dicen en el curso que un evento en una funcion de CalBack
boton.addEventListener('click', function(){
	cambiarColor();
	console.log(this);
	
	abrirVentana("https://www.google.com.mx/maps/");   // Abre una ventana (pestaña) del navegador 
	abrirVentanaEmergente("https://www.google.com.mx/maps/"); // Abre una ventana emergente de Google Maps ( pero tuve que desbloquear el permiso de Ventanas Hemergentes del navehador )
   
   
});


// Mouse over  , Cuendo el Mouse se encuentre encima del Objeto Boton, cambiarpa a amarillo
boton.addEventListener('mouseover', function(){
	boton.style.background = "yellow";
});

// Mouseout  , Cuando el mouse salga del objeto Boton, cambiará su color a gris
// Dicen en el curso que un evento en una funcion de CalBack , 
// así que probaré definirla como una función de FLECHA en lugar de usar "function()"
//  Y sí funcionó
// boton.addEventListener('mouseout', function(){
    boton.addEventListener('mouseout', ()=>{
	  boton.style.background =  "#ccc";  // También se puede usar el código rgb del color ( este es Gris)
    });



// Ahora vamos a ver otros eventos dentro de la caja de Input, llamada  "campo_nombre"
// Focus , cuando el campo_nombre  OBTIENE el foco
var input = document.querySelector("#campo_nombre");

input.addEventListener('focus', function(){
	console.log("[focus] Estas dentro del input");
});

// Blur , cuando el campo_nombre  DEJA el foco
input.addEventListener('blur', function(){
	console.log("[blur] Estas fuera del input");
});

// Keydown  , cuando se pulsa una tecla
input.addEventListener('keydown', function(event){
	console.log("[keydown] Pulsando esta tecla ", String.fromCharCode(event.keyCode));

});

// Keypress  ,  cuando se mantiene Presionada una tecla
input.addEventListener('keypress', function(event){
	console.log("[keypress] Tecla presionada ", String.fromCharCode(event.keyCode));
});

// Keyup  , cuendo se Suelta una tecla.
input.addEventListener('keyup', function(event){
	console.log("[keyup] Tecla soltada ", String.fromCharCode(event.keyCode));
});



// Ahora vamos a revisar los TIMERS  
// Existen 2 funciones de CallBack para los Timers, que son;   setInterval  y  setTimeout
// Y adicionalmente clearInterval DETIENE o LIMPIA un setInterval

// El setInterval se va a estar repitiendo a intervalos regulares de x tiempo
// recibe 2 parametros: Un afunción de CallBack y un parámetro de Tiempo en milisegundos
function intervalo(){
	var tiempo = setInterval(function(){

		console.log("Set interval ejecutado");
		
		var encabezado = document.querySelector("#micaja");
		if(encabezado.style.fontSize == "50px"){
			encabezado.style.fontSize = "30px";
		}else{
			encabezado.style.fontSize = "50px";
		}

	}, 1000);  // Cada Segundo va a estar cambiando el texto de tamaño

	return tiempo;
}

var tiempo = intervalo();



// ahora se va a crear un botón llamado "stop" que detiene el intervalo
var stop = document.querySelector("#stop");
// Y vamos a crear otro boton para iniciar el ciclo nuevamente
var start = document.querySelector("#start");


stop.addEventListener("click", function(){

	// Limpia o Detiene el intervalo
	clearInterval(tiempo);

	// en los Eventos, existe la opción "this" que hace referencia 
	// Al propio objeto donde se le asignó el objeto objeto sobre
	// Por ejemplo en este botón se puede  usar:
	// this.fieldset.disabled=true;
	this.style.background = "green";
	this.style.border = "10px solid black";
	// Obviamente también se puede hacer referencia a la variable "stop",
	// Y hace exáctamente lo mismo
	   //stop.style.background = "red";
	   //stop.style.border = "10px solid black";

	start.style.background = "grey";
	start.style.border = "1px solid black";

	
	stop.ariaDisabled = true;  
	start.ariaDisabled = false; 

	// alert("Has parado el intervalo en bucle");

});



start.addEventListener("click", function(){

	// Reinicia el intervalo
	intervalo();

	// en los Eventos, existe la opción "this" que hace referencia 
	// Al propio objeto donde se le asignó el objeto objeto sobre
	// Por ejemplo en este botón se puede  usar:
		//this.fieldset.disabled=true;
		//this.style.background = "green";
		//this.style.border = "5px solid black";
	// Obviamente también se puede hacer referencia a la variable "stop",
	// Y hace exáctamente lo mismo

	//	start.fieldset.disabled=true;
		start.style.background = "green";
		start.style.border = "10px solid black";

	stop.style.background = "grey";
	stop.style.border = "1px solid black";

	stop.ariaDisabled = false;  
	start.ariaDisabled = true; 

	//alert("Has iniciado el intervalo en bucle");
});





 });  // Se cierra el evento 'load'