<?php

$to = 'devarajpraj368@gmail.com';
$subject = 'Subscriber: New Message Recieved In Hairtique.com';

    $name1 = $_POST["name1"];
    $name2 = $_POST["name2"];
    $phone = $_POST["phone"];
    $txtemail = $_POST["txtemail"];

    
    $headers = "From: <$txtemail>" . "\r\n";
    $headers .= "Reply-To: $txtemail" . "\r\n";
    
    $body = "Subscriber's Email Id : $txtemail\n";
    
mail($to, $subject, $name1,$name2,$phone,$txtemail,$headers);          

echo "<script>window.location.href='contact.html';</script>";			
?>