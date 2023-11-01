/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    /*$("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });*/

    setTimeout(function(){
        jQuery('#portfolio .img-fluid').height(jQuery('.img-fluid').eq(0).height());
        jQuery('#portfolio .img-fluid').width(jQuery('.img-fluid').eq(0).width());
    }, 5000);
    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    //navbarCollapse();
    // Collapse the navbar when page is scrolled
    //$(window).scroll(navbarCollapse);

    //Navbar color change during scroll
    /*$(document).ready(function(){ 
        var scroll_pos = 0;
        var animation_begin_pos = 0; //where you want the animation to begin
        var animation_end_pos = 1000; //where you want the animation to stop
        var beginning_color = new $.Color( '#ffffffd9' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
        var ending_color = new $.Color( '#212529' ); ;//what color we want to use in the end
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop(); 
            if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
               // console.log( 'scrolling and animating' );
                //we want to calculate the relevant transitional rgb value
                var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
                var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
                var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
                var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
                var newColor = new $.Color( newRed, newGreen, newBlue );
                //console.log( newColor.red(), newColor.green(), newColor.blue() );
                $('#mainNav').animate({ backgroundColor: newColor }, 0);
            } else if ( scroll_pos > animation_end_pos ) {
                 $('#mainNav').animate({ backgroundColor: ending_color }, 0);
            } else if ( scroll_pos < animation_begin_pos ) {
                 $('#mainNav').animate({ backgroundColor: beginning_color }, 0);
            } else { }
        });
    });*/
    $(document).ready(function(){ 
        var scroll_pos = 0;
        var animation_begin_pos = 0; //where you want the animation to begin
        var animation_end_pos = 1000; //where you want the animation to stop
        var beginning_color = new $.Color( '#ffffffd9' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
        var ending_color = new $.Color( '#212529' ); ;//what color we want to use in the end
        $(document).scroll(function() {
            scroll_pos = $(this).scrollTop(); 
            if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
               // console.log( 'scrolling and animating' );
                //we want to calculate the relevant transitional rgb value
                var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
                var minuspercentScrolled = 100 - percentScrolled*250;   
                //console.log('1000 ' + minuspercentScrolled);
                var opacity_var = minuspercentScrolled + '%';
                //console.log('opacity2 : ' + opacity_var);
                var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
                var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
                var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
                var newColor = new $.Color( newRed, newGreen, newBlue );
                $('#mainNav').animate({ opacity: opacity_var }, 0);
            } else if ( scroll_pos > animation_end_pos ) {
                 $('#mainNav').animate({ opacity: opacity_var }, 0);
            } else if ( scroll_pos < animation_begin_pos ) {
                 $('#mainNav').animate({ opacity: opacity_var }, 0);
            } else { }
        });
    });

    //Slogan and arrow
    var i = 0;
    var txt = 'Πράττουμε με κώδικα, ιδέες που δεν μένουν απαρατήρητες.';
    var speed = 70;
    $(window).on('load', function(){ 
        function separator_to_arrow() {
            jQuery('.separator_to_arrow').eq(0).css('opacity','0.9');
            jQuery('.separator_to_arrow').eq(0).animate({ opacity : 0.0 }, 3000);
            jQuery('.separator_to_arrow').eq(0).css('display','none');
            jQuery('.separator_to_arrow').eq(1).css('opacity','0.0');
            jQuery('.separator_to_arrow').eq(1).css('display','unset');
            jQuery('.separator_to_arrow').eq(1).animate({ opacity : 0.9 }, 3000);
        }
        function telikos_elegxos() {
            document.getElementById("slogan-slogan").innerHTML = txt;
        }
        function typeWriter() {
          if (i < txt.length) {
            document.getElementById("slogan-slogan").innerHTML = txt.slice(0, i+1);
            i++;
            setTimeout(typeWriter, speed);
          }
          if (i == txt.length) {
            setTimeout(separator_to_arrow(), i*speed);
            setTimeout(telikos_elegxos(), i*speed+1);
            setTimeout(telikos_elegxos(), i*speed+3);          
            }
        }
        typeWriter();
    });

    //Insta - insta
        jQuery(document).ready(function(){
            var insta_fotos = [];
            var insta_fotos_count = 0;
            var insta_username = "indian__tech__";
            var insta_dom_child_temp;
            $.getJSON( "https://www.highmonkeys.gr/widgets/insta/index.php?app", function( data ) {
                console.log(data);
                var insta_temp1 = data['images'];
                for (i=0; i < insta_temp1.length; i++) {
                    insta_fotos[i] = data['images'][i];   
                    insta_fotos_count = insta_fotos_count + 1;
                }
            }).done(function() {
                for (i=0; i < insta_fotos_count; i++) {
                    insta_dom_child_temp = i + 1;
                    jQuery('.insta_foto:nth-child('+ insta_dom_child_temp +') img').attr("src",insta_fotos[i]);
                }
            });

            jQuery('.insta-button').eq(0).css('margin-top',jQuery('.insta_foto').eq(0).css('margin-top'));
        });

    //Blog - blog
    jQuery(document).ready(function() {
        var blog_post_top = 0;
        var blog_post_left = 0;
        function blog_ypologismoi() {
            for (i=0; i < jQuery('.blog-post').length; i++) {
                //Υπολογισμός επιθυμητού διαστήματος επάνω
                //blog_post_top = ( jQuery('.blog-post').height() - jQuery('.blog-titlos').eq(i).height() ) / 2;
                //Υπολογισμός επιθυμητού διαστήματος αριστερά
                blog_post_left = ( jQuery('#blog-doxeio').width() - jQuery('.blog-titlos').eq(i).width() ) / 2;
                //Εφαρμογή επιθυμητών διαστημάτων
                //jQuery('.blog-titlos').eq(i).css('padding-top',blog_post_top);
                jQuery('.blog-titlos').eq(i).css('padding-left',blog_post_left);
                jQuery('.blog-titlos').each(function(){jQuery(this).css('padding-top', jQuery('.blog-titlos').eq(0).css('font-size'))});
                jQuery('.blog-titlos').each(function(){jQuery(this).css('padding-bottom', jQuery('.blog-titlos').eq(0).css('font-size'))});
            }
        }

        var wp_posts = [];
        $.getJSON( "https://blog.highmonkeys.gr/wp-json/wp/v2/posts", function( data ) {
            for (i=0; i < jQuery('.blog-post').length; i++) {
                wp_posts[i] = [];
                wp_posts[i]['titlos'] = data[i]['title'].rendered;
                wp_posts[i]['syndesmos'] = data[i]['link'];

                jQuery('.blog-titlos').eq(i).html(wp_posts[i]['titlos']);
                jQuery('#blog-doxeio a').eq(i).attr('href',wp_posts[i]['syndesmos']);
                jQuery('#blog-doxeio a').eq(i).attr('target','_blank');
            }
        }).done(function() {
            blog_ypologismoi();
        });;

        jQuery(window).on('load', function() {
            blog_ypologismoi();
        });        

        jQuery(window).resize(function(){
            blog_ypologismoi();  
        });
    });    


    //Copyrights
    /*
    jQuery(window).on('load', function() {
        var copyrights_i;
        var copyrights_year;
        var copyrights_txt;
        var copyrights_speed = 210;
        var copyrights_timeout_clear_counter = 0;
        var copyrights_timeouts = [];

        function copyrights_doxeio() {
            copyrights_i = 0;
            copyrights_year = new Date().getFullYear();
            copyrights_txt = 'Copyright © highmonkeys '+new Date().getFullYear()+'.';
            copyrights_speed = copyrights_speed;

            function copyrights_typeWriter() {
                for (copyrights_timeout_clear_counter = 0; copyrights_timeout_clear_counter < copyrights_timeouts.length; copyrights_timeout_clear_counter++) {
                    console.log('a');
                    clearTimeout(copyrights_timeouts[copyrights_timeout_clear_counter]);
                }

                if (copyrights_i < copyrights_txt.length) {
                    jQuery('div.col-lg-4:nth-child(3)').html(copyrights_txt.slice(0, copyrights_i+1));
                    //
                    copyrights_i++;
                    copyrights_timeouts[copyrights_i] = setTimeout(copyrights_typeWriter, copyrights_speed);
                }
            }

            copyrights_typeWriter();
        }

        setInterval(function(){ 
            copyrights_doxeio();
        }, 7000);
    });
    */
})(jQuery); // End of use strict 

//Removed Google Analytics
