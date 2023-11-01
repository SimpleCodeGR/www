<?php
    if ( isset($_GET['app']) ) {
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

        $mysqli = new mysqli("localhost","hm_istoselida","mI4yi1^0","hm_istoselida");
        if ($result = $mysqli->query("(SELECT * FROM `hm_insta` WHERE `typos` = 'base64' ORDER BY id DESC LIMIT 12) ORDER BY seira ASC LIMIT 9")) {
            $row_count = 0;
            echo '{"images":[';
            while($row = $result->fetch_assoc()) {
                if ($row_count == 0) {
                    echo '"';
                } else {
                    echo ',"';
                }
                echo $row['periexomeno'] . '"';
                $row_count = $row_count + 1;
            }
            echo ' ]}';
        }
    } else {
        echo <<<EOL
<!DOCTYPE html>
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    function toDataURL(url, seira, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        var reader = new FileReader();
        reader.onloadend = function() {
          callback(reader.result, seira);
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    }

    jQuery(document).ready(function() {
        jQuery('#insta_reload').on('click', function() {
            var insta_fotos = [];
            var insta_fotos_base64 = [];
            var insta_fotos_count = 0;
            var insta_username = "simplecode.gr";

            var insta_safe_onoma = jQuery('#insta_safe_onoma').val();
            var insta_safe_kwdikos = jQuery('#insta_safe_kwdikos').val();

            $.getJSON( "https://www.instagram.com/"+insta_username+"/?__a=1", function( data ) {
                var insta_temp1 = data['graphql']['user']['edge_owner_to_timeline_media']['edges'];
                for (i=0; i < insta_temp1.length; i++) {
                    insta_fotos[i] = data['graphql']['user']['edge_owner_to_timeline_media']['edges'][i]['node']['thumbnail_src'];
                    toDataURL(insta_fotos[i], i, function(dataUrl, seira_temp) {
                        insta_fotos_base64[i] = dataUrl;
                        jQuery.ajax({  
                            type: "POST",
                            url: 'https://www.highmonkeys.gr/widgets/insta/insta_controller.php',
                            data: {image: insta_fotos_base64[i], seira: seira_temp, onoma: insta_safe_onoma, kwdikos: insta_safe_kwdikos}
                        });
                    });                   
                    insta_fotos_count = insta_fotos_count + 1;
                }
            }).done(function() {
                //for (i=1; i < insta_fotos_count; i++) {
                //jQuery('.insta_foto:nth-child('+i+') img').attr("src",insta_fotos[i]);
            });
        });
    });
</script>
</head>
<body>
<h1>Higmonkeys Instagram Reload</h1>
<input type="text" id="insta_safe_onoma">
<br>
<input type="password" id="insta_safe_kwdikos">
<button id="insta_reload" type="button"">Click Me!</button>
</body>
</html>
EOL;
    }
?>
