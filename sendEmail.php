<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

  $tel = trim($_POST["tel"]);
  $quiz__step = array(
    trim($_POST["quiz__step1"]),
    trim($_POST["quiz__step2"]),
    trim($_POST["quiz__step3"]),
    trim($_POST["quiz__step4"]),
    trim($_POST["quiz__step5"]),
    trim($_POST["quiz__step6"])
  );
  $admin_email  = "2402404@bk.ru";
  $form_subject = trim($_POST["type_form"]);

  foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {

      if ($key === "quiz__step1" ) {
        $key = "Ответ на 1 шаг квиза";
      }
      elseif ($key === "quiz__step2") {
        $key = "Ответ на 2 шаг квиза";
      }
      elseif ($key === "quiz__step3") {
        $key = "Ответ на 3 шаг квиза";
      }
      elseif ($key === "quiz__step4") {
        $key = "Ответ на 4 шаг квиза";
      }
      elseif ($key === "quiz__step5") {
        $key = "Ответ на 5 шаг квиза";
      }
      elseif ($key === "quiz__step6") {
        $key = "Ответ на 6 шаг квиза";
      }
      elseif ($key === "type_form") {
        $key = "Наименование формы";
      }
      elseif ($key === "order") {
        $key = "Номер заказа";
      }
      elseif ($key === "amount") {
        $key = "Сумма заказа";
      }
      elseif ($key === "description") {
        $key = "Описание заказа";
      }
      elseif ($key === "name") {
        $key = "ФИО";
      }
      elseif ($key === "phone") {
        $key = "Телефон";
      }
      elseif ($key === "client_city") {
        $key = "Город";
      }
      elseif ($key === "tel") {
        $key = "Телефон";
      }
      elseif ($key === "name_of_product") {
        $key = "Наименование продукта";
      }
      elseif ($key === "type_buyform") {
        $key = "Тип формы";
      }
      elseif ($key === "email") {
        $key = "E-mail";
      }

      $message .= "
      " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>" . $key. "</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
    }
  }
} else if ( $method === 'GET' ) {

  $tel = trim($_GET["tel"]);
  $quiz__step = array(
    trim($_GET["quiz__step1"]),
    trim($_GET["quiz__step2"]),
    trim($_GET["quiz__step3"]),
    trim($_GET["quiz__step4"]),
    trim($_GET["quiz__step5"]),
    trim($_GET["quiz__step6"])
  );
  $admin_email  = "2402404@bk.ru";
  $form_subject = trim($_GET["type_form"]);

  foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {

      if ($key === "quiz__step1" ) {
        $key = "Ответ на 1 шаг квиза";
      }
      elseif ($key === "quiz__step2") {
        $key = "Ответ на 2 шаг квиза";
      }
      elseif ($key === "quiz__step3") {
        $key = "Ответ на 3 шаг квиза";
      }
      elseif ($key === "quiz__step4") {
        $key = "Ответ на 4 шаг квиза";
      }
      elseif ($key === "quiz__step5") {
        $key = "Ответ на 5 шаг квиза";
      }
      elseif ($key === "quiz__step6") {
        $key = "Ответ на 6 шаг квиза";
      }
      elseif ($key === "type_form") {
        $key = "Наименование формы";
      }
      elseif ($key === "order") {
        $key = "Номер заказа";
      }
      elseif ($key === "amount") {
        $key = "Сумма заказа";
      }
      elseif ($key === "description") {
        $key = "Описание заказа";
      }
      elseif ($key === "name") {
        $key = "ФИО";
      }
      elseif ($key === "phone") {
        $key = "Телефон";
      }
      elseif ($key === "client_city") {
        $key = "Город";
      }
      elseif ($key === "tel") {
        $key = "Телефон";
      }
      elseif ($key === "name_of_product") {
        $key = "Наименование продукта";
      }
      elseif ($key === "type_buyform") {
        $key = "Тип формы";
      }
      elseif ($key === "email") {
        $key = "E-mail";
      }

      $message .= "
      " . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>" . $key. "</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
    }
  }
}

$message = "<h1>Отправлено с сайта камины в Воронеже</h1><table style='width: 100%;'>$message</table>";

function adopt($text) {
  return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );