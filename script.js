$(document).ready(function(){
    var alphabet = $("#alphabet");
    var mainButtons = $(".main-buttons");
    var tequilaMain = $(".tequila-main");
    var vodkaMain = $(".vodka-main");
    var backButton = $(".back-button");
    var brandButtons = $(".brand-buttons");
    var tequilas = $(".tequila");
    var vodkas = $(".vodka");
    var buttonArea = document.getElementById('buttonDiv');


    const tequilaList = {
       'Don Julio' : [],
        'José Cuervo Tradicional' : [],
        'Teremana' : [],
    }


    function loadBrands(/*curr*/) {

        const targetDiv = buttonArea;

        Object.keys(tequilaList).forEach((brand) => {
            let button = document.createElement("button");
            let span = document.createElement("span");
            button.appendChild(span);
            span.innerHTML = brand;
            span.setAttribute('class', 'button-text')
            button.setAttribute('class', 'brand-buttons');
            button.setAttribute('value', tequilaList[brand]);
            targetDiv.append(button);
        })
        
    }
    


    $(alphabet).hide();
    $(backButton).hide();
    $(brandButtons).hide();


    $(mainButtons).on('click', function(){
        $(mainButtons).hide();
        $(alphabet).show();
        loadBrands();
    });

    $(tequilaMain).on('click', function(){
        $(vodkas).hide();
        $(tequilas).show();
        $(backButton).show();
    });

    $(vodkaMain).on('click', function(){
        $(tequilas).hide();
        $(vodkas).show();
        $(backButton).show();
    });


    $(backButton).on('click', function(){
        $(backButton).hide();
        $(brandButtons).hide();
        $(mainButtons).show();
    });
  
  });