


'use strict' // Para que se use la notación estrícta

window.addEventListener('load',function(){
//  INTERESANTE:  También funciona si la declaramos asi:
//  window.addEventListener('load',()=>{

  console.log("Pagina5");



  // ----------   AHORA VAMOS A TRABAJAR CON FETCH  (pero ojo: hay otra forma clásica para hacer peticiones AJAX)--------

  // Es un metodo que nos permite hacer Peticiones AJAX = Ajax es una llamada a un servicio REST
  // Para comenzar a probar el FETCH , vamos a apoyarnos con una página en la nube que tiene un 
  // API FAKE para Pruebas. es:   https://jsonplaceholder.typicode.com/
  // aqui hay varios ejemplos que Responden a una pericion. Mejor hagamos el ejercicio:

  
  var usuarios = [];  // Vamos a definir una variable de tipo Array Vacia, ahí se capturarpan los datos JSON de la solicitud 
  // Y así mandamos llamar la API Rest de usuarios en la URL = 'https://jsonplaceholder.typicode.com/users'
  // FETCH es un método que hace peticiones Ajax asíncronas

  fetch('https://jsonplaceholder.typicode.com/users')  // Dice que esto es una PROMESA ( Simplemente el metodo Fetch mas la URL )

    .then(data => data.json())  // Y la Promesa tiene el método "then" (Que lo que hace es RECOGER DATOS ), 
                                 // el método then tiene una funcion de callback que recibe los datos Y luego lo convierte a JSON  
    .then(data => {   // y luego tenemos un 2do metodo "then" para recoger los datos y en una funccion de Callbach, llenar los datos en el array
        usuarios = data; // Los datos (Que ahora se convirtieron a JSON los asignamos al arreglo Usuarios)
        console.log("Datos primer ejemplo fetch -> ");
        console.log(usuarios);  // Imprimimos el arreglo en la Consola para ver cómo se muestra.
    
    });  // Y hasta aqui , se consiguio utilizar el metodo fetch.



    // El curso nos dice que hay otra página con datos FAKE de prueba  URL = 'https://reqres.in/'
    // Y también podemos trabajar por ejemplo con estos datos:   https://reqres.in/api/users?page=2
    // Anteponiendo la URL 'https://reqres.in/' 
    //  y luego concatenando el rqeuerimiento del servicio 'api/users'
    var usuariosAlternativo = []; 
    fetch('https://reqres.in/api/users')  // 'https://reqres.in/api/users?page=2'

    .then(data => data.json())  // Y la Promesa tiene el método "then" (Que lo que hace es RECOGER DATOS ), 
                                 // el método then tiene una funcion de callback que recibe los datos Y luego lo convierte a JSON  
    .then(data => {   // y luego tenemos un 2do metodo "then" para recoger los datos y en una funccion de Callbach, llenar los datos en el array
        usuariosAlternativo = data; // Los datos (Que ahora se convirtieron a JSON los asignamos al arreglo usuariosAlternativo)
        console.log("Datos Segundo ejemplo fetch -> ");
        console.log(usuariosAlternativo);  // Imprimimos el arreglo en la Consola para ver cómo se muestra.
    });  // Y hasta aqui , el segundo ejemplo del metodo fetch.



       //  Voy a hacer un tercer ejemplo, pero INTENTANDO SELECCIONAR SOLO LA LISTA DE USUARIOS 
       // y NO todo el objeto del segundo ejemplo ( pues observe en la consola que el objeto trae la página, objetos poe pagina, etc )
       // Yo solo quiero una lista de usuarios

       var usuariosAlternativa2 = []; 
       fetch('https://reqres.in/api/users')  // 'https://reqres.in/api/users?page=2'
   
       .then(data => data.json())  // Y la Promesa tiene el método "then" (Que lo que hace es RECOGER DATOS ), 
                                    // el método then tiene una funcion de callback que recibe los datos Y luego lo convierte a JSON  
       .then( miListaUsuarios => {   // y luego tenemos un 2do metodo "then" para recoger los datos y en una funccion de Callbach, llenar los datos en el array
            usuariosAlternativa2 = miListaUsuarios.data; // Los datos (Que ahora se convirtieron a JSON los asignamos al arreglo usuariosAlternativa2)
           console.log("Datos TERCER ejemplo fetch -> ");
           console.log(usuariosAlternativa2);  // Imprimimos SOLO LA LISTA DE USUARIOS.
              
        });  // Y hasta aqui , el tercer  ejemplo del metodo fetch. Si funcionó (espero entenderlo bien)
   
   
       // TAMBIEN DICE QUE EL FETCH TAMBIEN PUEDE ESCRIBIRSE ASÍ: ES LO MISMO:
       // Y le voy a poner un poquito mas, para que se muestre la lista en FrontEnd.
       var div_usuarios = document.querySelector("#mi_div_usuarios");
       var usuariosAlternativa3 = []; 
       fetch('https://reqres.in/api/users') 
            .then( function(data){  return data.json(); } )
            .then( function(miListaUsuarios) 
                        {   
                            usuariosAlternativa3 = miListaUsuarios.data; 
                            console.log("Datos TERCER ejemplo fetch, PERO SIN USAR FUNCION DE FLECHA ->  ");
                            console.log(usuariosAlternativa3);  


                           // -- ESTA FUNCION ES PARA MOSTRAR EN EL DOM ---
                           // Dice que Para Mostrar los Datos en el DOM, podemos utilizar un for-each 
                           // ó la funcion map ( Y nos dice el curso que hacen lo mismo )
                           usuariosAlternativa3.map( ( user_melb , i )=>{
                                
                                let mi_nombre = document.createElement('h4');

                                mi_nombre.innerHTML = i + " .- " + user_melb.first_name + "  " + user_melb.last_name ;
                                 console.log(mi_nombre);
                                 //console.log(div_usuarios);
                                 div_usuarios.append(mi_nombre);
                                 document.querySelector(".loading").style.display = "none" ;
                            })
                        }
                 );  













 console.log("------->>>>> AHORA VAMOS A TRABAJAR CON PROMESAS  <<<<<--------");
// ----------->>>>>>>>>>>>  ---                                        --------<<<<<<<<<<<<<<<--------             
// ----------->>>>>>>>>>>>  ---   AHORA VAMOS A TRABAJAR CON PROMESAS  --------<<<<<<<<<<<<<<<--------
// ----------->>>>>>>>>>>>  ---                                       --------<<<<<<<<<<<<<<<--------


 // Fetch (ajax) y peticiones a servicios / apis rest 

 var div_usuarios2 = document.querySelector("#usuarios2");
 var div_janet = document.querySelector("#janet");
 var div_profesor = document.querySelector("#profesor");



	getUsuarios()
		.then(data => data.json() // Esta es la Primer promesa, que Toma los datos regresados por la funcion getUsuarios()
                                   // pero OJO incluye totales, paginas, etc 
        )

		.then(users => {        // En el segundo Then 
			mostrarListadoUsuarios2(users.data);
			return getInfo();
		})


		.then(data => {
			div_profesor.innerHTML = data;
			return getJanet();
		})

		.then(data => data.json()
        
        )


		.then(user => {
			mostrarJanet(user.data);
		})


		.catch(error => {
			alert("Error en las peticiones");
		});
		


 function getUsuarios(){ // esta funcion REGRESA los Datos mediante un FETCH de la URL especificada.
                         // Pero OJO , incluye info adicional como pagina, totales, etc
    return fetch('https://reqres.in/api/users');
 }

 function getJanet(){ // Es una funcion que regresa ESPECIFICAMENTE el usuario 2
                      // Que es Janet Weaver
	return fetch('https://reqres.in/api/users/2');
 }

 function getInfo(){  // Creo que una Promesa regresa datos, espero no estar equivocandome
                      // Por ejemplo, esta funcion regresará una "promesa" con los datos de victor robles 
	var profesor = { nombre: 'Víctor', apellidos: 'Robles',	url: 'https://victorroblesweb.es'};

	return new Promise((resolve, reject) => {
		var profesor_string = "";

		setTimeout(function(){
			profesor_string = JSON.stringify(profesor);

			if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');

			return resolve(profesor_string);

		}, 3000);
		
	});
 }




 //En esta funcion simplemente encapsulamos las instrucciones para mostrar la informacion de usuarios en el DOM
 function mostrarListadoUsuarios2(usuarios){
	usuarios.map((user, i) => {
			let nombre = document.createElement('h3');

			nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;
			div_usuarios2.appendChild(nombre);
			document.querySelector(".loading").style.display = 'none';
		});
 }

 
// Y esta funcion también encapsula las instrucciones para mostrar la información de Janet en el DOM
 function mostrarJanet(user){
	console.log(user);
	let nombre = document.createElement('h4');
	let avatar = document.createElement('img');

	nombre.innerHTML =  user.first_name + " " + user.last_name;
	avatar.src = user.avatar;
	avatar.width = '100';

	div_janet.appendChild(nombre);
	div_janet.appendChild(avatar);

	document.querySelector("#janet .loading").style.display = 'none';
 }




});  // Se cierra el evento 'load'


