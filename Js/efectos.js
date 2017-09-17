$(document).ready(function(){
    
    //efecto menu
    $('header .contenedor .menu a').each(function(index,elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top: '0'
        },2000 + (index * 500));
    });

    //efecto header

    if($(window).width() > 800 ){
        $('header .contenedor .texto').css({
            opacity:0,
            marginTop: 0
        });

        $('header .contenedor .texto').animate({
            opacity: 1,
            marginTop: '-52px'
        },1500);
    }

    //scroll elementos del menu

    var acercaDe = $('#acerca-de').offset().top,
    menu = $('#platillos').offset().top,
    galeria = $('#galeria').offset().top,
    ubicacion = $('#ubicacion').offset().top;

    //scroll elementos

    $('#btn-cerca-de').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
         scrollTop: 1100  
        },500);
    });
    
    $('#btn-menu').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 2100
        },500);
    });

    $('#btn-galerias').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop:3700
        },500);
    });

    $('#btn-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 4400
        },500);
    });

});