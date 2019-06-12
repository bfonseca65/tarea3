function validar() {
    
    var nombre, contrasena, email, fecha, expRegEmail, expRegNombre ;

    nombre = document.getElementById("nombre").value;
    contrasena = document.getElementById("contrasena").value; 
    email = document.getElementById("email").value;
    fecha = document.getElementById("date").value;
    
    expRegEmail = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
       
    expRegNombre = new RegExp("^[a-z]+\.[a-z]+$");
  
    
    if(!expRegNombre.test(nombre)){
        
        alert("Nombre incorrecto");
        return false;
    }
    
    if(!expRegEmail.test(email)){
        
        alert("Email incorrecto");
        return false;
    }

        
}