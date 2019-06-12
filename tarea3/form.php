<?php

    if(isset($_GET['submit'])){
        
        $nombre = $_GET['nombre'];
        $contrasena = $_GET['contrasena'];
        $email = $_GET['email'];
        $fecha = $_GET['date'];
}

    echo $nombre;

    if(isset($_GET['submit'])){
        if(empty($nombre)){
            echo"<p class='error'>*Nombre vacio<p/>";
        }
        if(empty($contrasena)){
            echo"<p class='error'>*Contraseña vacia<p/>";
        }
        if(empty($email)){
            echo"<p class='error'>*Email vacio<p/>";
        }
        if(empty($fecha)){
            echo"<p class='error'>*Fecha vacia<p/>";
        }
    }

?>