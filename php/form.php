<?php

	$destino  = "ignaciofj@gmail.com";

	$nombre   = $_POST["iNombreApellido"];
	$correo   = $_POST["iEmail"];
	$telefono = $_POST["iTelefono"];
	$mensaje  = $_POST["taMensaje"];
	
	$contenido = "\nNombre: " . $nombre . "\n\nCorreo: " . $correo . "\n\nTeléfono: " . $telefono . "\n\nMensaje: " . $mensaje;

	mail($destino,"*** Nueva consulta web - sobrenaturalnutricion.com ***",$contenido);
	header("Location: ../pages/contacto-gracias.html");

?>