$(document).ready(function(){
    var liquorButtons = $(".portrait-buttons");
    var tequila = $(".tequila-main");
    var vodka = $(".vodka-main");


    $(liquorButtons).on('click', function(){
        $(this).hide();
        $(liquorButtons).hide();
    });


    $(tequila).on('click', function(){
        $(".tequila").show();
    });

    $(vodka).on('click', function(){
        $(".vodka").show();
    });
    
  
  });