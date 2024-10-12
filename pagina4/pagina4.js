
'use strict' // Para que se use la notación estrícta

window.addEventListener('load',function(){
//  INTERESANTE:  También funciona si la declaramos asi:
//  window.addEventListener('load',()=>{

  console.log("Pagina4");




  // JSON - JavaScript Object Notation

  // Así se crea un objeto JSON
  var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'Estados unidos'
  };

  console.log(pelicula.titulo); // Acceder a las propiedades del JSON (ejemplo al titulo) 
  pelicula.titulo = "Batman contra Superman" ; // Para cambiar una propiedad Json.


  // También podría trabajarse con un ARRAY de Pelíciilas, definiendolo de esta manera:
  var peliculas = [
	{titulo: "La verdad duele", year: 2016, pais: "Francia"},
	pelicula
  ];  // OBSERVESE EL 2do ELEMENTO DEL ARREGLO es la variable "pelicula", definida como JSON anteriormente
  
 
  console.log(peliculas); // Si imprimimos el objeto refiriendonos al Arreglo "peliculas" se deben ver los 2 registros
                        // BIEN INTERESANTE: Se pueden tener Arrays dentro de un Objeto , u Objetos dentro de un Array
                        // arrays dentro de arrays  o bien Obketos dentro de Objetos ( lo que se nos ocurra ). MUY INTERESANTE



						
  // Se puede recorrer el arreglo "peliculas" y mostrarlo por ejemplo en un div, de esta forma:
  var caja_peliculas = document.querySelector("#peliculas");
  var index;
 
  for(index in peliculas){
	var p = document.createElement("p");
	p.append(peliculas[index].titulo + " - " + peliculas[index].year);
	caja_peliculas.append(p);
  };





  // --------------   AHORA VAMOS A ANALIZAR EL LOCAL STORAGE --------

  // LocalStorage o HTML5 WEB_Storage, Es una memoria que permanece 
  // MIENTRAS SE NAVEGA POR LAS DIFERENTES PAGINAS WEB de nuestra aplicación ( dice )

  // Y por otro lado están las SESIONES que es como una memoria pero a nivel de BACKEND no en el nevegador

  // Primero debemos comprobar si el Navegador utilizado es Compatible con LocalStorage
  // Porque NO TODOS los Navegadores ni Todas las versiones son Compatibles
  // Comprobar disponibilidad del localstorage

  if(typeof(Storage) !== 'undefined')
	{
	     console.log("Localstorage disponible");
    }
	  else
	{
	     console.log("Incompatible con Localstorage");     
	} ; 

    console.log(Storage); // quise ver que contiene ese objeto Storage :)

  // Cuando SI esta disponible el Local Storage , entonces comenzamos a probar
  // Guardar datos  }
  // IMPORTANTE: Los datos Guardados se pueden revisar en el Navegador, en:
  // Herramientas para Desarrollador, en la Pestaña >> APLICACION, ahí se ven los datos almacenados 
  // El LocalStorage se ve por cada DOMINIO 
  // para guardar in elemento en Local Storage se pasan  2 parametros al setItem(): el key y el valor 
  localStorage.setItem("titulo", "Curso de Symfony de Víctor Robles");


  // Recuperar elemento. se utiliza el procedimiento getIdem() para recuperar informacion del LocalStorage
  document.querySelector("#pruebaLocalStorage").innerHTML= localStorage.getItem("titulo");

  // Guardar objetos,También se Pueden Guardar Objetos Completos en el LocalStorage
  var usuario = {
	nombre: "Víctor Robles",
	email: "victor@victor.com",
	web: "victorroblesweb.es"
  };

  // Solo que ES NECESARIO CONVERTIR LA INFORMACION a un STRING.
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Recuperar objeto. Y luego al recuperarlo, lo Parseamos para crer nuevamente el JSON
  var userjs = JSON.parse(localStorage.getItem("usuario"));

  console.log(userjs);
  document.querySelector("#misDatos").append(userjs.web+" - "+userjs.nombre);




 // PARA REMOVER INFORMACION del LocalStorage ,  SI FUNCIONAN, PERO NO LOS QUIERO ACTIVAR
 var deseaBorrarLocalStorage = confirm("Borrar el LocalStorage ? "); // CONFIRMACIÓN
 console.log( "Borrar el LocalStorage ? >>  " + deseaBorrarLocalStorage);  

 if( deseaBorrarLocalStorage ) // Si seleccionamos CANCELAR , Que NO se borre nada
	{
	  	  localStorage.clear(); // Limpia todo el LocalStorage 
    };

  // VAMOS CON EL EJERCICIO DE LA LISTA DE CIUDADES
  // Vamos a hacer un pequeño ejercicio para practicar con LocalStorage
  // Vamos a capturar Nombres de Peliculas y guardarlos en LocalStorage
  // Y también los mostraremos en Pantalla mediante una Lista HTML.
  localStorage.setItem("Leon", "Leon"); // Primero quiero poner una ciudad (Leon) 


  
  var formulario = document.querySelector("#formciudades");

  formulario.addEventListener('submit', function(){
	var nomciudad = document.querySelector('#addCiudad').value;
	if(nomciudad.length >= 1){
		localStorage.setItem(nomciudad, nomciudad);
	}
  });


  
  var ul = document.querySelector('#ciudades-list');
  for(var i in localStorage){
	if(typeof localStorage[i] == 'string'){
		var li = document.createElement("li");
		li.append(localStorage[i]);	
		ul.append(li);
	}
  };

  

  // Ahora vamos a generar un formulario para borrar Ciudades
  // una a una, el nmbre capturado en la caja de texto
  //  debe  coincidir con el almacenado en el Local Storage
  var formularioBorrarCds = document.querySelector("#formBorraCiudades");
  formularioBorrarCds.addEventListener('submit', function(){
	var nombreCiudad = document.querySelector('#borraCiudad').value;

	if(nombreCiudad.length >= 1){
		localStorage.removeItem(nombreCiudad);  //  Limpia solo un ITEM del LocalStorage 
	}
    });
  




});  // Se cierra el evento 'load'




