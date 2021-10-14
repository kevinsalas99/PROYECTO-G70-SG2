<?php
error_reporting(0);
$names = $_POST['names'];
$email = $_POST['email'];
$texto = $_POST['texto'];

$header = 'From: ' . $mail . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre_y_apellido . " \r\n";
$mensaje .= "Su e-mail es: " . $mail . " \r\n";
$mensaje .= "Mensaje: " . $_POST['texto'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = proseagro.cvp@gmail.com;
$asunto = 'Mensaje de cliente';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'Mensaje enviado correctamente';

header("location:index.html");

?>