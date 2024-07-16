<?php 
    // header('Access-Control-Allow-Origin: http://localhost:3000');

    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];

    // echo $name


    header('Access-Control-Allow-Origin: http://localhost:3000');
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $recipient = "trystansiew@gmail.com";
    $headers = "From: $name <$email>";

    if(mail($recipient, $subject, $message, $headers)){
        echo "Email sent successfully!";
    } else{
        echo "Failed to send email, Please try again later";
    }

?>