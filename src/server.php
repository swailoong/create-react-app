<?php 
    // header('Access-Control-Allow-Origin: http://localhost:3000');

    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $message = $_POST['message'];

    // echo $name
    
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require '../vendor/autoload.php';

    header('Access-Control-Allow-Origin: http://localhost:3000');
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = "trystansiew@gmail.com";
    $headers = "From: $name <$email>";

    // if(mail($recipient, $subject, $message, $headers)){
    //     echo "Email sent successfully!";
    // } else{
    //     echo "Failed to send email, Please try again later";
    // }

    $mail = new PHPMailer(exceptions:true);

    try{
    $mail->SMTPDebug = false;
    $mail->isSMTP();
    $mail->Host = 'smtp-mail.outlook.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'siewwailoong1997@hotmail.com';
    $mail->Password = 'Trystan385011';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('siewwailoong1997@hotmail.com');
    $mail->addAddress('siewwailoong1997@hotmail.com');
    $mail->addReplyTo($email);
    $mail->Subject = $subject;
    $mail->isHTML( isHtml: true);
    $mail->Body = "<p>Name: {$name}</p><p>Email: {$email}</p><p>Message: {$message}</p>";
    $mail->AltBody = $message;

    $mail->send();
    echo "Message has been sent";
      } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
?>