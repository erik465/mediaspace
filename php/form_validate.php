<?php

$name = $_POST['name'];
$mail = $_POST['mail'];
$business = $_POST['business'];
$tel = $_POST['tel'];
$loc = $_POST['loc'];
$he = $_POST['he'];
$wi = $_POST['we'];
$pitch = $_POST['pitch'];
$type = $_POST['type'];


$from = $mail;
$to = 'mediaspace.es@gmail.com';
$message = "Nombre: ".$name ."\n Compañía: ".$business ."\nTelefono: " . $tel . "\nLocacion: ".$loc. "\n Altura: " . $he . "\n Anchura: ".$wi."\n Pitch: ". $pitch . "\n Tipo: " . $type;
$subject = 'Presupuesto LED';
$subject = "=?utf-8?B?".base64_encode($subject)."?=";
$headers = "From: $from \r\n Reply to: $from \r\n Content-type: text/plain; charset=utf-0 \r\n";

mail($to, $subject, $message, $headers);
header("Location: /pages/mpage.html");
exit;
?>