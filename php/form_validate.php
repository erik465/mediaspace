<?php

$name = $_GET['name'];
$name = $_GET['name'];
$mail = $_GET['mail'];
$business = $_GET['business'];
$tel = $_GET['tel'];
$loc = $_GET['loc'];
$he = $_GET['he'];
$wi = $_GET['wi'];
$pitch = $_GET['pitch'];
$type = $_GET['type'];


$from = $mail;
$to = 'mediaspace.es@gmail.com';
$message = "Nombre: ".$name ."\n Compañía: ".$business ."\nTelefono: " . $tel . "\nLocacion: ".$loc. "\n Altura: " . $he . "\n Anchura: ".$wi."\n Pitch: ". $pitch . "\n Tipo: " . $type;
$subject = 'Presupuesto LED';
$subject = "=?utf-8?B?".base64_encode($subject)."?=";
$headers = "From: $from \r\n Reply-to: $from \r\n Content-type:text/plain; charset=urf-8\r\n";

mail($to, $subject, $message, $headers);
header('Location: /pages/configes.html');
exit;


?>