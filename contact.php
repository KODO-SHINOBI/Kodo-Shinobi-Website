<?php
 if(isset($_POST['submit'])){

    $email_to = "kodoshinobiofficial@gmail.com";
    $email_subject =  $_POST['subject'];
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $message = $_POST['message']; // required

    // create email headers
    $headers = 'From: ' . $email ;
    @mail($email_to, $email_subject, $message, $headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
 }
?>


