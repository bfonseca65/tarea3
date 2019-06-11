function validar() {
    
    var nombre, contrasena, email, fecha, expreg;

    nombre = document.getElementById("nombre").value;
    contrasena = document.getElementById("contrasena").value; 
    email = document.getElementById("email").value;
    fecha = document.getElementById("date").value;
    
    expreg = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
       
    
    if(!expreg.test(email)){
        
        alert("Email incorrecto");
        return false;
    }
    
        
}