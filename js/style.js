// progress bar section strat

(function($) {
    'use strict';

    $('.html').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#fa5b0f'
    });
    $('.css').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#fa5b0f'
    });



    $('.bootstrap').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#fa5b0f'
    });



    $('.javascript').rProgressbar({
        percentage: 65,
        fillBackgroundColor: '#fa5b0f'
    });



    $('.jquery').rProgressbar({
        percentage: 60,
        fillBackgroundColor: '#fa5b0f',
    });
    $('.wordpress').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#fa5b0f',
    });
    $('.SEO').rProgressbar({
        percentage: 50,
        fillBackgroundColor: '#fa5b0f',
    });
    $('.PHP').rProgressbar({
        percentage: 65,
        fillBackgroundColor: '#fa5b0f',
    });

})(jQuery);


// progress bar section end

//portfolio section strat

var $grid = $('.porfilo-active').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth:1
    }
    });

    $('.porfilo-menu').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });

    // for menu active class
    $('.porfilo-menu button').on('click',function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

// portfolio section end

///porfilio section strat

//client slider section stat

$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
    mouseDrag:false,
    loop:true,
    margin:2,
    nav:true,
    responsive:{
    0:{
    items:1
    },
    600:{
    items:1
    },
    1000:{
    items:3
    }
    }
    });
    
    $('.owl-prev').click(function() {
    $active = $('.owl-item .item.show');
    $('.owl-item .item.show').removeClass('show');
    $('.owl-item .item').removeClass('next');
    $('.owl-item .item').removeClass('prev');
    $active.addClass('next');
    if($active.is('.first')) {
    $('.owl-item .last').addClass('show');
    $('.first').addClass('next');
    $('.owl-item .last').parent().prev().children('.item').addClass('prev');
    }
    else {
    $active.parent().prev().children('.item').addClass('show');
    if($active.parent().prev().children('.item').is('.first')) {
    $('.owl-item .last').addClass('prev');
    }
    else {
    $('.owl-item .show').parent().prev().children('.item').addClass('prev');
    }
    }
    });
    
    $('.owl-next').click(function() {
    $active = $('.owl-item .item.show');
    $('.owl-item .item.show').removeClass('show');
    $('.owl-item .item').removeClass('next');
    $('.owl-item .item').removeClass('prev');
    $active.addClass('prev');
    if($active.is('.last')) {
    $('.owl-item .first').addClass('show');
    $('.owl-item .first').parent().next().children('.item').addClass('prev');
    }
    else {
    $active.parent().next().children('.item').addClass('show');
    if($active.parent().next().children('.item').is('.last')) {
    $('.owl-item .first').addClass('next');
    }
    else {
    $('.owl-item .show').parent().next().children('.item').addClass('next');
    }
    }
    });
    
    });
    ///client slider section end
    
    //navbar 
    $(window).on('scroll',function(){
        if ($(window).scrollTop()){
            $('nav').addClass('black');
        }
        else
        {
            $('nav').removeClass('black');
        }
    
    })
    //navbar

    /// top up 

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
