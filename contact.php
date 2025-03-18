<?php
$emailFrom = 'Contact form <contact-form@simplecode.gr>';
$emailSendTo = 'Send to <hello@simplecode.gr>';
$emailSubject = 'New message from contact form';

$fields = array('name' => 'Name', 'surname' => 'Surname', 'email' => 'Email', 'message' => 'Message');

$resStatusOkMsg = 'Contact form successfully submitted.';
$resStatusErrMsg = 'There was an error while submitting the form. Please try again later.';

/*** * * ***/

$EXCEPTION_FORM_IS_EMPTY = 'Form is empty';

/*** * * ***/

error_reporting(0);

/*** * * ***/

try
{
    // message

    $m = "New message from contact form\n=============================\n";

    $m .= (function($fields, $post, $EXCEPTION_FORM_IS_EMPTY) {
        if (count($post) == 0) {
            throw new \Exception($EXCEPTION_FORM_IS_EMPTY);
        }

        $message = '';
        foreach ($post as $key => $value) {
            if (isset($fields[$key])) {
                $message .= "$fields[$key]: $value\n";
            }
        }
        return $message;
    })($fields, $_POST, $EXCEPTION_FORM_IS_EMPTY);

    // headers
    $h = array(
        'Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $emailFrom,
        'Reply-To: ' . $emailFrom,
        'Return-Path: ' . $emailFrom,
    );

    /*** * * ***/

    mail(
        $emailSendTo, // send to
        $emailSubject, // subject
        $m, // message
        implode("\n", $h) // headers
    );

    /*** * * ***/

    $res = array(
        'type' => 'success',
        'message' => $resStatusOkMsg
    );
} catch (\Exception $e) {
    $res = array(
        'type' => 'danger',
        'message' => $resStatusErrMsg
    );
}

/*** * * ***/

// if req is AJAX -> JSON res
// else -> display $res['message']
if (
    !empty($_SERVER['HTTP_X_REQUESTED_WITH'])
    &&
    strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest'
) {
    $j = json_encode($res);

    /*** * * ***/

    header('Content-Type: application/json');
    echo $j;
} else {
    echo $res['message'];
}
