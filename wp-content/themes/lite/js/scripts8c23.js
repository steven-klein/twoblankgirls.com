/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
1.0 Navigation
2.0 Featured Content
3.0 Scrolling Top
4.0 bxSlider
--------------------------------------------------------------*/

( function($) {    

	"use strict";
    
    /*--------------------------------------------------------------
    1.0 Navigation
    --------------------------------------------------------------*/
    var container, button, menu, links, subMenus;

    container = $('#site-navigation');
    if (!container) {
        return;
    }

    button = $('#menu-toggle');
    if ('undefined' === typeof button) {
        return;
    }

    menu = container.find('ul').first();

    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }

    menu.attr('aria-expanded', 'false');
    if (-1 === menu.hasClass('nav-menu')) {
        menu.addClass(' nav-menu');
    }

    button.click(function () {
        if (container.hasClass('toggled')) {
            container.removeClass('toggled');
            button.attr('aria-expanded', 'false');
            menu.attr('aria-expanded', 'false');
        } else {
            container.addClass('toggled');
            button.attr('aria-expanded', 'true');
            menu.attr('aria-expanded', 'true');
        }
    });
    
   
    /*--------------------------------------------------------------
    2.0 Featured Content
    --------------------------------------------------------------*/
    var rtl = localize.rtl ? true : false;   
    $('.featured .owl-carousel').owlCarousel({
        loop: true,
        rtl: rtl,
        responsive:{
            0:{
                items:1                
            },
            600:{
                items:2                
            },
            1000:{
                items:3               
            }
        }
    });    
    
    /*--------------------------------------------------------------
    3.0 Scrolling Top
    --------------------------------------------------------------*/
    
    var moveup = $("#move-up");
    $(window).scroll(function() { 
		if($(this).scrollTop() != 0) {
			moveup.fadeIn();	
		} else {
			moveup.fadeOut();
		}
	});
     

    moveup.click(function(e) {  
        e.preventDefault();
        $('html, body').animate({
           scrollTop: 0
        }, 1000);
	}); 
    
    /*--------------------------------------------------------------
    4.0 bxSlider
    --------------------------------------------------------------*/
    
    $('.bxdddslider').bxSlider({
        mode: 'fade',
         adaptiveHeight: true,
         onSliderLoad: function(){
            $(".bxslider-wrap").css("visibility", "visible");
        }
    });
    
    $('.bxslider').each(function(i, obj) {
		var id = $(this).attr('data-id');		
		$(this).bxSlider({			
            pagerCustom: '#bx-pager-'+id,
			mode: 'fade',			
    		controls : false, 	 		   
		    adaptiveHeight: true,            
            onSliderLoad: function(){
                $(".bxslider-wrap").css("visibility", "visible");
            }		    
		});
	});
} ) ( jQuery );