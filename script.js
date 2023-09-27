

$(document).ready(function(){

  // Switches to fullscreen with first button press.
    var elem = document.getElementsByTagName("BODY")[0];
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


    // Drink Type List
    const typeList = {
      'Tequila' : [],
      'Vodka' : [],
      'Whiskey' : [],
      'Gin' : [],
      'Rum' : [],
      'Scotch' : [],
      'Liqueur' : [],
      'Wine' : [],
      'Beer' : [],
      'Jarritos' : []
    }

    // Tequila Class List
    const tequilaClassList = {
      'Blanco' : ["Class"],
      'Reposado' : ["Class"],
      'Anejo' : ["Class"],
      'Joven' : ["Class"],
      'Select Reserves' : ["Class"],
      'Mezcal' : ["Class"]
    }


    // Blanco Tequila List
    const tequilaList = {
      '1 2 3 Organic' : ["Tequila"],
      '1800' : ["Tequila"],
      '1800 Coconut' : ["Tequila"],
      '4 Copas' : ["Tequila"],
      '512' : ["Tequila"],
      '818' : ["Tequila"],
      'Adictivo' : ["Tequila"],
      'Agavales' : ["Tequila"],
      'Ambhar' : ["Tequila"],
      'Arette' : ["Tequila"],
      'Arrogante' : ["Tequila"],
      'Arta' : ["Tequila"],
      'Don Julio' : ["Tequila"],
      'José Cuervo Tradicional' : ["Tequila"],
      'Teremana' : ["Tequila"],
      'Patron' : ["Tequila"]
    }
    

    // Vodka List
    const vodkaList = {
      'Belvedere' : ["Vodka"],
      'Finlandia' : ["Vodka"],
      'Grey Goose' : ["Vodka"],
      'Ketel One' : ["Vodka"],
      'Ketel One Citroen' : ["Vodka"],
      'Tito\'s' : ["Vodka"]
      // Template  --------->    '' : ["Vodka"],
   }


   // Creates the main buttons for selecting which type of drink they want
   function loadTypes() {
    const targetDiv = $("#mainButtonDiv");
    Object.keys(typeList).forEach((type) => {
        let button = document.createElement("button");
        let span = document.createElement("span");
        button.appendChild(span);
        span.innerHTML = type;
        span.setAttribute('class', 'button-text')
        button.setAttribute('class', "main-buttons");
        button.setAttribute('value', type)
        targetDiv.append(button);
    });
}


    // Creates buttons for the different brands of liquor
    function loadBrands(current) {
        const targetDiv = $("#buttonDiv");
        Object.keys(current).forEach((brand) => {
            let button = document.createElement("button");
            let span = document.createElement("span");
            button.appendChild(span);
            span.innerHTML = brand;
            span.setAttribute('class', 'button-text')
            button.setAttribute('class', 'brand-buttons');
            button.setAttribute('value', current[brand]);
            targetDiv.append(button);
        });
    }
    

    // Initialization
    loadTypes();
    loadBrands(tequilaClassList)
    loadBrands(tequilaList);
    loadBrands(vodkaList);
    $("#alphabetDiv").hide();
    $(".back-button").hide();
    $(".brand-buttons").hide();
    $("#buttonDiv").hide();


    // Show Tequila Class Buttons
    $(".main-buttons[value|='Tequila'").on('click', function(){
        $("#mainButtonDiv").hide();
        $(".main-buttons").hide();
        $(".brand-buttons").hide();
        $("#buttonDiv").show();
        $(".brand-buttons[value|='Class'").show();
        $(".back-button").show();
        openFullscreen();
    });

    // Show Tequila Buttons
    $(".brand-buttons[value|='Class'").on('click', function(){
      $("#mainButtonDiv").hide();
      $(".main-buttons").hide();
      $(".brand-buttons[value|='Class'").hide();
      $("#buttonDiv").show();
      $(".brand-buttons[value|='Tequila'").show();
      $(".back-button").show();
      openFullscreen();
  });

    // Show Vodka Buttons
    $(".main-buttons[value|='Vodka'").on('click', function(){
        $("#mainButtonDiv").hide();
        $(".main-buttons").hide();
        $("#buttonDiv").show();
        $(".brand-buttons[value|='Vodka'").show();
        $(".back-button").show();
        openFullscreen();
    });

    // Back Button
    $(".back-button").on('click', function(){
        $("#buttonDiv").hide();
        $(".brand-buttons").hide();
        $(".back-button").hide();
        $("#mainButtonDiv").show();
        $(".main-buttons").show();
    });

  });