


'use strict' // Para que se use la notación estrícta

window.addEventListener('load',function(){
//  INTERESANTE:  También funciona si la declaramos asi:
//  window.addEventListener('load',()=>{

  console.log("Pagina5");

  // --------------   AHORA VAMOS A TRABAJAR CON FETCH  --------

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
        console.log(usuarios);  // Imprimimos el arreglo en la Consola para ver cómo se muestra.
    });  // Y hasta aqui , se consiguio utilizar el metodo fetch.



    // 



    // 






});  // Se cierra el evento 'load'





