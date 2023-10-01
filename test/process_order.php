<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $order = $_POST["order"];

    // Validate data (you can add more checks)

    // Send the email
    $to = "danialsohail733@gmail.com"; // Change to your email address
    $subject = "New Food Order from $name";
    $message = "Customer: $name\nEmail: $email\nOrder: $order";

    if (mail($to, $subject, $message)) {
        echo "Order sent successfully!";
    } else {
        echo "Error sending order.";
    }
}
?>