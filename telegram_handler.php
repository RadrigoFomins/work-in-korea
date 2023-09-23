<?php
$title = $_POST['title'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$question = $_POST['question'];

// ID чата
$telegramChatId = '413001326';
// Токен бота
$telegramToken = '5927538583:AAE9x4NR-2pySdeZP5tvkLBKvFlTu4YqEBo';

$message = "Форма: $title
Имя: $name
Телефон: $phone
Вопрос: $question";

$telegramUrl = "https://api.telegram.org/bot$telegramToken/sendMessage?chat_id=$telegramChatId&text=" . urlencode($message);

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $telegramUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // не проверять SSL-сертификат
$telegramResponse = curl_exec($ch);
curl_close($ch);
