//Yphresies - yphresies
jQuery(document).ready(function(){
    jQuery('.yphresies_kathgoria_titlos').eq(0).addClass('yphresies_kathgoria_titlos_epilegmeno');
    jQuery('.yphresies_kathgoria_keimeno').eq(0).addClass('yphresies_kathgoria_keimeno_epilegmeno');
    var yphresies_kathgoria_titlos = jQuery('.yphresies_kathgoria_titlos');

    console.log('rad');

    //

    /*function ypologismos_ypsous(epilegmeno) {
        console.log('ypologismos_ypsous');

        if (epilegmeno != undefined) {
            jQuery(epilegmeno).addClass('yphresies_ypologismos_ypsous');
        } else {
            jQuery('.yphresies_kathgoria_titlos').eq(0).addClass('yphresies_ypologismos_ypsous');
        }

        if (epilegmeno == undefined || (! jQuery(epilegmeno).hasClass('yphresies_ypologismos_ypsous'))) {
            // Υπολογισμός διάστασης (τέλος ύψους) κειμένου
            var ypologismos_ypsous_1 = jQuery('.yphresies_kathgoria_keimeno_epilegmeno').offset().top + jQuery('.yphresies_kathgoria_keimeno_epilegmeno').height();
            // Υπολογισμός διάστασης (τέλος ύψους) βασικού δοχείου
            var ypologismos_ypsous_2 = jQuery('#yphresies_doxeio_0').offset().top + jQuery('#yphresies_doxeio_0').height();
            // Υπολογισμός ύψους τίτλου
            var ypologismos_ypsous_3 = jQuery('.yphresies_kathgoria_keimeno_epilegmeno').offset().top - jQuery('#yphresies_doxeio_0').offset().top;
            // Υπολογισμός διαφοράς (κενού) μεταξύ των επιλεγμένων κειμένου και τίτλου
            var ypologismos_ypsous_4 = (ypologismos_ypsous_3) - jQuery('.yphresies_kathgoria_titlos_epilegmeno').height();
            console.log('ypologismos_ypsous_4 : ' + ypologismos_ypsous_4);
            // Άθροιθσμα τελικού επιθυμητού ύψους και εφαρμογή του, παλιά τιμή + διαφορά κειμένου με βασικό δοχείο (=ύψος που χρειάζεται να προστεθεί) + πάνω κενό για ομοιομορφία και κάτω
            var ypologismos_ypsous_5 = jQuery('#yphresies_doxeio_0').height() + ( ypologismos_ypsous_1 - ypologismos_ypsous_2 ) + ypologismos_ypsous_4;
            jQuery('#yphresies_doxeio_0').height(ypologismos_ypsous_5);

            //Αλλαγές για κινητά
            var mobile_p_keno;
            if ( jQuery(window).width() <= 321 ) {
                var ypologismos_ypsous_3 = ( jQuery('.yphresies_kathgoria_keimeno_epilegmeno').offset().top - jQuery('#yphresies_doxeio_0').offset().top ) / 3;
                // Υπολογισμός διαφοράς (κενού) μεταξύ των επιλεγμένων κειμένου και τίτλου
                var ypologismos_ypsous_4 = (ypologismos_ypsous_3) - jQuery('.yphresies_kathgoria_titlos_epilegmeno').height();
                console.log('ypologismos_ypsous_4 : ' + ypologismos_ypsous_4);
                // Άθροιθσμα τελικού επιθυμητού ύψους και εφαρμογή του, παλιά τιμή + διαφορά κειμένου με βασικό δοχείο (=ύψος που χρειάζεται να προστεθεί) + πάνω κενό για ομοιομορφία και κάτω
                var ypologismos_ypsous_5 = jQuery('#yphresies_doxeio_0').height() + ( ypologismos_ypsous_1 - ypologismos_ypsous_2 ) + ypologismos_ypsous_4;
                jQuery('#yphresies_doxeio_0').height(ypologismos_ypsous_5);

                //Εφαρμογή ίδιου κενού πάνω και κάτω, για περιηγητές κινητού
                mobile_p_keno = jQuery('#yphresies_doxeio_2 > div.yphresies_kathgoria_keimeno.yphresies_kathgoria_keimeno_epilegmeno > p:nth-child(1)').css('margin-bottom');
                jQuery('.yphresies_kathgoria_keimeno').css('margin-top', mobile_p_keno);
            }
        }
    }*/

    function ypologismos_ypsous() {
       /* var yphresies_ypsos_titlwn;
        var yphresies_ypsos_keimenwn = 0;*/
		var yphresies_ypsos_kenoy;
        var yphresies_ypsos_kenwn;

		yphresies_ypsos_kenoy = jQuery('.yphresies_kathgoria_keimeno p').eq(0).css('margin-bottom').split('px')[0];

        /*yphresies_ypsos_titlwn = jQuery('.yphresies_kathgoria_titlos').eq(0).height();
        if (/Mobi/.test(navigator.userAgent) || jQuery('#yphresies_doxeio_0').width() < 650) {
            yphresies_ypsos_titlwn = yphresies_ypsos_titlwn * 3;
            jQuery('#mobile_debug>p').html('yphresies if 2');
        }
        for (i = 0; i < jQuery('.yphresies_kathgoria_keimeno').length; i++) {
            if ( jQuery('.yphresies_kathgoria_keimeno').eq(i).height() > yphresies_ypsos_keimenwn ) {
                yphresies_ypsos_keimenwn = jQuery('.yphresies_kathgoria_keimeno').eq(i).height();
            }
        }

        yphresies_ypsos_kenwn = yphresies_ypsos_kenoy*2

        jQuery('#yphresies_doxeio_0').height(yphresies_ypsos_titlwn + yphresies_ypsos_keimenwn + yphresies_ypsos_kenwn);*/

        jQuery('.yphresies_kathgoria_keimeno').each(function(){jQuery(this).css('margin-top', yphresies_ypsos_kenoy+'px')});
        jQuery('.yphresies_kathgoria_keimeno').each(function(){jQuery(this).css('margin-bottom', yphresies_ypsos_kenoy+'px')});

        if ( jQuery('#yphresies_doxeio_0').height() < jQuery('#yphresies_doxeio_0').prop('scrollHeight') ) {
            jQuery('#yphresies_doxeio_0').css('height',jQuery('#yphresies_doxeio_0').prop('scrollHeight')+'px');

            jQuery('#mobile_debug').css('display','block');        
            jQuery('#mobile_debug>p').html('rad14 : ' + jQuery('#yphresies_doxeio_0').height() + ',, ' + jQuery('#yphresies_doxeio_0').prop('scrollHeight'));
        }
        console.log('rad ypologismos');
    }

    //

    for (i=0; i < yphresies_kathgoria_titlos.length; i++) { 
	    yphresies_kathgoria_titlos.eq(i).on('click', function() {
      	for (i2=0; i2 < jQuery('.yphresies_kathgoria_titlos').length; i2++) {
        	jQuery('.yphresies_kathgoria_titlos').eq(i2).removeClass('yphresies_kathgoria_titlos_epilegmeno');
            jQuery('.yphresies_kathgoria_keimeno').eq(i2).removeClass('yphresies_kathgoria_keimeno_epilegmeno');
            jQuery('.yphresies_kathgoria_keimeno').eq(i2).removeClass('yphresies_ypologismos_ypsous');
        }
        jQuery(this).addClass('yphresies_kathgoria_titlos_epilegmeno');
        
        for (i3=0; i3 < yphresies_kathgoria_titlos.length; i3++) { 
        	if (jQuery('.yphresies_kathgoria_titlos').eq(i3).hasClass('yphresies_kathgoria_titlos_epilegmeno')) {
              	console.log('a');
              	jQuery('.yphresies_kathgoria_keimeno').eq(i3).addClass('yphresies_kathgoria_keimeno_epilegmeno');
            }
        }

        /*ypologismos_ypsous(this);*/
      })
    }

    //

    ypologismos_ypsous();

    jQuery(window).on('load', function() {
        ypologismos_ypsous();
    });

    jQuery(window).resize(function(){
        ypologismos_ypsous();
        console.log('rad ypologismos 2');
    });
});
