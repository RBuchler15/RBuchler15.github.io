<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "dave@zpmloans.com"; 
    $subject = "Contact Form Submission";
    
    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['questions'];

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $emailBody = "Name: $fName $lName\n";
    $emailBody .= "Email: $email\n";
    $emailBody .= "Phone: $phone\n";
    $emailBody .= "Message:\n$message";

    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
