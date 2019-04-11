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
  $admin_email  = "evgeniy@wsp24.ru";
  $form_subject = trim($_POST["type_form"]);

  foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {


      switch ($key) {
        case "form_subject":
        "Шаг 1";
        break;
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
  $admin_email  = "evgeniy@wsp24.ru";
  $form_subject = trim($_GET["type_form"]);

  foreach ( $_POST as $key => $value ) {
    if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {


      switch ($key) {
        case "form_subject":
        "Шаг 1";
        break;
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

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
  return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, adopt($form_subject), $message, $headers );