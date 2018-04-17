<?php

$name = $_POST['user_name'];
$email = $_POST['user_email'];
$massage = $_POST['user_massage'];
$token = "593191808:AAE9ZXybvyBacVBcuzKSozigjSHw2Z9CqbQ";
$chat_id = "-206454906";
$arr = array(
  'Username: ' => $name,
  'Email: ' => $email,
  'Message: ' => $massage
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ../index.html');
} else {
  echo "Error";
}
?>