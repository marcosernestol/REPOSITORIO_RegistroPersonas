'use strict' // Para que se use la notación estrícta

window.addEventListener('load',function(){
//  INTERESANTE:  También funciona si la declaramos asi:
//  window.addEventListener('load',()=>{

   console.log("Inicio OK");
  //alert("Inicio OK");

// Primero Obtenemos el objeto del formulario
var miFormulario = document.querySelector("#primerFormulario");
  // y Luego quiero mostrar lo capturado por ejemplo en una supuesta tabla 
var probandoTabla = document.querySelector("#frameListadoDePersonasRegistradas");



// Luego generamos un evento 
 miFormulario.addEventListener('submit',function(){
    console.log("Entra Submit");

    var varNombreUnico = document.querySelector("#inputNombreUnico").value;
    var varNombreCompleto = document.querySelector("#inputNombreCompleto").value;
    var varEdad = document.querySelector("#inputEdad").value ; // El valor capturado en la caja es texto, así que debo convertirlo a entero
    var varCorreoElectronico = document.querySelector("#inputCorreoElectronico").value;
    var varPassword = document.querySelector("#inputPassword").value;
  

     // En estas variables se capturan los datos y lo comprobaremos asi:
     console.log(varNombreUnico ,varNombreCompleto , varEdad , varCorreoElectronico, varPassword );

        // AHORA VAMOS A VALIDAR los datos de entrada, por ejemplo :
        // Que el campo se llene y NO esté vacío y que NO tenga espacios al inicio y fin
     
        // Con el siguiente if es fácil de validar y No nos deja pasar hasta que el dato dea válido
        if(varNombreUnico.trim() == null || varNombreUnico.trim().length == 0){
			alert("El NombreUnico no es válido");
                document.querySelector("#errorNombreUnico").innerHTML = "*"
			return false;
		}else{
            document.querySelector("#errorNombreUnico").style.display = "none" ;
        }

            // y así con los demás campos
        if(varNombreCompleto.trim() == null || varNombreCompleto.trim().length == 0){
            alert("El NombreCompleto no es válido");
            document.querySelector("#errorNombreCompleto").innerHTML = "*"
			return false;
		}else{
            document.querySelector("#errorNombreCompleto").style.display = "none" ;
        }

		if(varEdad == null || varEdad <= 0 || isNaN(varEdad)){
			alert("La Edad no es válida");
            document.querySelector("#errorEdad").innerHTML = "*"
			return false;
		}else{
            document.querySelector("#errorEdad").style.display = "none" ;
        }

        if(varCorreoElectronico.trim() == null || varCorreoElectronico.trim().length == 0){
            alert("El CorreoElectrónico no es válido");
            document.querySelector("#errorCorreoElectronico").innerHTML = "*"
			return false;
		}else{
            document.querySelector("#errorCorreoElectronico").style.display = "none" ;
        }

        if(varPassword.trim() == null || varPassword.trim().length == 0){
            alert("El Password no es válido");
            document.querySelector("#errorPassword").innerHTML = "*"
			return false;
		}else{
            document.querySelector("#errorPassword").style.display = "none" ;
        }



     // Esta es una primera opción para agregar Mostrar la informacion en la supuesta tabla
     var parrafo = document.createElement("p");
     parrafo.append(varNombreUnico);
     parrafo.append(varNombreCompleto);
     parrafo.append(varEdad);
     parrafo.append(varCorreoElectronico);
     parrafo.append(varPassword);
        probandoTabla.append(parrafo);

    // Otra forma de HACER LO MISMO es usar un array.
    var datos_usuario =[varNombreUnico,varNombreCompleto,varEdad,varCorreoElectronico,varPassword ];
        // Y hacer un for-in  para desplegar la informacion
        var indice; 
        for(indice in datos_usuario){
            probandoTabla.append(datos_usuario[indice]);
        }


    // UNA TERCER FORMA para mostrar los datos podría ser así:
    // Utilizando los párrafos de forma auxiliar.
    var parrafoNombreUnico = document.querySelector("#pNombreUnico span");
        // NOTAR QUE: en el document.querySelector("#pNombreUnico span") 
        // al colocar la palabra span, la funcion selecciona el span que hay dentro del parrafo 
    var parrafoNombreCompleto = document.querySelector("#pNombreCompleto span");
    var parrafoEdad = document.querySelector("#pEdad span");
    var parrafoCorreoElectronico = document.querySelector("#pCorreoElectronico span");
    var parrafoPassword = document.querySelector("#pPassword span");

    parrafoNombreUnico.innerHTML = varNombreUnico;
    parrafoNombreCompleto.innerHTML = varNombreCompleto;
    parrafoEdad.innerHTML = varEdad ; 
    parrafoCorreoElectronico.innerHTML = varCorreoElectronico;
    parrafoPassword.innerHTML = varPassword;



 });



});  // Se cierra el evento 'load'