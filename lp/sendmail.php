<?php
// Define recipient email
$recipient_email = "ali.siddiquidm760@gmail.com";

// Read form data
$name = isset($_POST['name']) ? $_POST['name'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$message = isset($_POST['message']) ? $_POST['message'] : '';

// Form validation
if (empty($name) || empty($email) || empty($phone)  || empty($message)) {
    // Handle validation errors, e.g., redirect to an error page or display an error message
    header('Location: error.html');
    exit;
}

// Email headers
$headers = "From: $name <$email>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Compose the email message
$to = $recipient_email;
$subject = "New Contact Form Submission"; // Corrected subject
$message_body = "Name: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

// Send the email
$mailSuccess = mail($to, $subject, $message_body, $headers);

// Check if the email was sent successfully
if ($mailSuccess) {
    // Email sent successfully, you can redirect to a success page
    header('Location: success.html');
} else {
    // Email sending failed, redirect to an error page
    header('Location: error.html');
}
?>
