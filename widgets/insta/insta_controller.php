<!DOCTYPE html>
<html>
<body>

<?php

//Cross-Origin Request Headers

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000');
    header('Content-Length: 0');
    header('Content-Type: text/plain');
    die();
}

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//\\

//Σύνδεση με την βάση
$mysqli = new mysqli("localhost","hm_istoselida","mI4yi1^0","hm_istoselida");
$mysqli_meta = new mysqli("localhost","hm_istoselida_hm_meta","mI4yi1^0_hm_meta","hm_istoselida_hm_meta");

//Έλεγχος ασφαλείας
$safe = false;

$safe_result = $mysqli_meta->query("SELECT * FROM `hm_insta_users` WHERE onoma = '" . mysqli_real_escape_string($mysqli, $_POST['onoma']) . "' AND kwdikos = '" . mysqli_real_escape_string($mysqli, $_POST['kwdikos']) . "';" );
if ( mysqli_num_rows($safe_result) > 0 ) {
    $mysqli_meta->query("INSERT INTO `hm_insta_logins` (`id`, `IP`, `timestamp`, `state`, `onoma`) VALUES (NULL, '" . mysqli_real_escape_string($mysqli, $_SERVER['REMOTE_ADDR']) . "', CURRENT_TIMESTAMP, 'epityxia', '" . mysqli_real_escape_string($mysqli, $_POST['onoma']) . "');");
    $safe=true;
} else {
    $mysqli_meta->query("INSERT INTO `hm_insta_logins` (`id`, `IP`, `timestamp`, `state`, `onoma`) VALUES (NULL, '" . mysqli_real_escape_string($mysqli, $_SERVER['REMOTE_ADDR']) . "', CURRENT_TIMESTAMP, 'apotyxia', '" . mysqli_real_escape_string($mysqli, $_POST['onoma']) . "');");

    $safe=false;
}
if ($safe) {
    $timestamp_current = $mysqli_meta->query("SELECT CURRENT_TIMESTAMP()");
    $timestamp_current = mysqli_fetch_array($timestamp_current)[0];
    $timestamp_current = explode(" ", $timestamp_current)[0];
    $safe_result2 = $mysqli_meta->query("SELECT * FROM `hm_insta_logins` WHERE IP = '" . mysqli_real_escape_string($mysqli, $_SERVER['REMOTE_ADDR']) . "' AND timestamp LIKE '" . mysqli_real_escape_string($mysqli, $timestamp_current) . "%' AND state = 'apotyxia';");
    if ( mysqli_num_rows($safe_result2) > 36 ) {
        $safe=false;
    }
}

//Εισαγωγή δεδομένων
if ($safe) {
    if ( !is_null($_POST['image']) ) {
        $mysqli->query("INSERT INTO `hm_insta` (`id`, `date`, `periexomeno`, `typos`, `seira`) VALUES (NULL, CURRENT_TIMESTAMP, '" . mysqli_real_escape_string($mysqli, $_POST['image']) . "', 'base64', '" . mysqli_real_escape_string($mysqli, $_POST['seira']) . "');");
    }
}
?>

</body>
</html> 
