$(document).ready(function(){
    var mainButtons = $(".main-buttons");
    var tequila = $(".tequila-main");
    var vodka = $(".vodka-main");
    var backButton = $(".back-button");
    var brandButtons = $(".brand-buttons");


    $(backButton).hide();
    $(brandButtons).hide();


    $(mainButtons).on('click', function(){
        $(mainButtons).hide();
    });

    $(tequila).on('click', function(){
        $(".vodka").hide();
        $(".tequila").show();
        $(backButton).show();
    });

    $(vodka).on('click', function(){
        $(".tequila").hide();
        $(".vodka").show();
        $(backButton).show();
    });


    $(backButton).on('click', function(){
        $(backButton).hide();
        $(brandButtons).hide();
        $(mainButtons).show();
    });
  
  });