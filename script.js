

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
      'Rum' : [],
      'Gin' : [],
      'Cordials' : [],
      'Wine' : [],
      'Beer' : [],
      'Jarritos' : []
    }

    // Tequila Class List
    const tequilaClassList = {
      'Blanco' : ["ClassTequila"],
      'Reposado' : ["ClassTequila"],
      'Anejo' : ["ClassTequila"],
      'Joven' : ["ClassTequila"],
      'Mezcal' : ["ClassTequila"],
      'Flavored' : ["ClassTequila"],
      'Select' : ["ClassTequila"]
    }


    // Blanco Tequila List
    const blancoList = {
      '512' : ["Blanco"],
      '818' : ["Blanco"],
      '1800' : ["Blanco"],
      '1 2 3' : ["Blanco"],
      '4 Copas' : ["Blanco"],
      'Adictivo' : ["Blanco"],
      'Agavales' : ["Blanco"],
      'Ambhar' : ["Blanco"],
      'Arette' : ["Blanco"],
      'Arrogante' : ["Blanco"],
      'Arta' : ["Blanco"],
      'Artenom' : ["Blanco"],
      'Asombroso' : ["Blanco"],
      'Astral' : ["Blanco"],
      'Avion' : ["Blanco"],
      'Azunia' : ["Blanco"],
      'Baron' : ["Blanco"],
      'Blue Nectar' : ["Blanco"],
      'Cabeza' : ["Blanco"],
      'Cabo Wabo' : ["Blanco"],
      'Calirosa' : ["Blanco"],
      'Camarena' : ["Blanco"],
      'Cantera' : ["Blanco"],
      'Casa Del Sol' : ["Blanco"],
      'Casa Mexico' : ["Blanco"],
      'Casa Noble' : ["Blanco"],
      'Casamigos' : ["Blanco"],
      'Catrina' : ["Blanco"],
      'Cazadores' : ["Blanco"],
      'Cenote' : ["Blanco"],
      'Chamucos' : ["Blanco"],
      'Chaquira' : ["Blanco"],
      'Chinaco' : ["Blanco"],
      'Cimarron' : ["Blanco"],
      'Cincoro' : ["Blanco"],
      'Casa Maestri Flask' : ["Blanco"],
      'Coa De Jima' : ["Blanco"],
      'Codigo' : ["Blanco"],
      'Codiga Rosa' : ["Blanco"],  // ------------------>  might need to change the class
      'Corazon' : ["Blanco"],
      'Corazon Estate' : ["Blanco"],
      'Corazon Expesiones' : ["Blanco"],
      'Corralejo' : ["Blanco"],
      'Corzo' : ["Blanco"],
      'Dano\'s' : ["Blanco"],
      'DeLeon' : ["Blanco"],
      'Don Cheyo' : ["Blanco"],
      'Don Fulano' : ["Blanco"],
      'Don Julio' : ["Blanco"],
      'Don Londres' : ["Blanco"],
      'Don Suenos' : ["Blanco"],
      'Don Abraham' : ["Blanco"],
      'Don Felix' : ["Blanco"],
      'Don Ramon' : ["Blanco"],
      'Dona Celia' : ["Blanco"],
      'Dos Primos' : ["Blanco"],
      'Dos Armadillos' : ["Blanco"],
      'Dulce Vida' : ["Blanco"],
      'El Jimador' : ["Blanco"],
      'El Luchador' : ["Blanco"],
      'El Luchado 110' : ["Blanco"],
      'El Mayor' : ["Blanco"],
      'El Tequileno' : ["Blanco"],
      'El Tesoro' : ["Blanco"],
      'Espolon' : ["Blanco"],
      'Eterno Verano' : ["Blanco"],
      'Florida Kush' : ["Blanco"],
      'Fortaleza' : ["Blanco"],
      'G4' : ["Blanco"],
      'Gran Centenario' : ["Blanco"],
      'Grand Mayan' : ["Blanco"],
      'Herencia' : ["Blanco"],
      'Herradura' : ["Blanco"],
      'Hiatus' : ["Blanco"],
      'Honor Reflexion' : ["Blanco"],
      'Hussongs' : ["Blanco"],
      'Insolito' : ["Blanco"],
      'José Cuervo Tradicional' : ["Blanco"],
      'Kah' : ["Blanco"],
      'Lapis' : ["Blanco"],
      'Los Azulejos' : ["Blanco"],
      'Los Arango' : ["Blanco"],
      'Lunazul' : ["Blanco"],
      'Maestro Dobel' : ["Blanco"],
      'Maracame' : ["Blanco"],
      'Mi Campo' : ["Blanco"],
      'Mijenta' : ["Blanco"],
      'Milagro' : ["Blanco"],
      'Nueveuno' : ["Blanco"],
      'Ocho' : ["Blanco"],
      'Olmeca Altos' : ["Blanco"],
      'One With Life' : ["Blanco"],
      'Padre Azul' : ["Blanco"],
      'Paqui' : ["Blanco"],
      'Partida' : ["Blanco"],
      'Pasote' : ["Blanco"],
      'Patron' : ["Blanco"],
      'Patron Estate' : ["Blanco"],
      'Pura Vida' : ["Blanco"],
      'Revolucion' : ["Blanco"],
      'Riazul' : ["Blanco"],
      'Rock\'N\'Roll' : ["Blanco"],
      'San Matias' : ["Blanco"],
      'Santo Puro' : ["Blanco"],
      'Sauza Hornitos' : ["Blanco"],
      'Siempre' : ["Blanco"],
      'Siete Leguas' : ["Blanco"],
      'Suerte' : ["Blanco"],
      'Tapatio' : ["Blanco"],
      'Teremana' : ["Blanco"],
      'The Butterfly Cannon Blue' : ["Blanco"],
      'The Butterfly Cannon Rosa' : ["Blanco"],  // ---------------> Flavored or Joven?
      'Tosco' : ["Blanco"],
      'Tres Generaciones' : ["Blanco"],
      'Tres Agaves' : ["Blanco"],
      'Tromba' : ["Blanco"],
      'Vanguardia' : ["Blanco"],
      'Vide De Louie' : ["Blanco"],
      'Villa One' : ["Blanco"],
      'Volcan' : ["Blanco"],
    }


    // Reposado Tequila List
    const reposadoList = {
      '1 2 3' : ["Reposado"],
    }


    // Anejo Tequila List
    const anejoList = {
      '1 2 3' : ["Anejo"],
    }


    // Joven Tequila List
    const jovenList = {
      'Viva XXXII' : ["Joven"],
    }
    

    // Select Tequila List
    const selectList = {
      '1 2 3' : ["Select"],
    }


    // Mezcal Tequila List
    const mezcalList = {
      'Santo Puro Mezquila' : ["Mezcal"],
    }


    // Flavored Tequila List
    const flavoredTequilaList = {
      '1800 Coconut' : ["Flavored"],
      'Cantera Cafe' : ["Flavored"],
      'Dano\'s Infused' : ["Flavored"],
      'Ghost' : ["Flavored"],
      'Rock\'N\'Roll Mango' : ["Flavored"],
      'Pina Loca' : ["Flavored"],
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

    // Whiskey List
    const whiskeyClassList = {
      'Bourbon' : ["ClassWhiskey"],
    }

    // Whiskey List
    const whiskeyList = {
      '' : ["Whiskey"],
    }

    // Rum List
    const rumList = {
      'Bacardi' : ["Rum"],
      'Bacardi Coconut' : ["Rum"],
      'Bacardi Coqito' : ["Rum"],
      'Bacardi Dragonberry' : ["Rum"],
      'Bacardi Lime' : ["Rum"],
      'Bacardi Limon' : ["Rum"],
      'Bacardi Pineapple' : ["Rum"],
      'Bacardi Raspberry' : ["Rum"],
      'Captain Morgan' : ["Rum"],
      'Capatain Morgan Grapefruit' : ["Rum"],
      'Leblon' : ["Rum"],
      'Malibu' : ["Rum"],
      'Mount Gay' : ["Rum"],
      'Myers' : ["Rum"],
      'Plantation 3 Star' : ["Rum"],
      'Plantation Dark' : ["Rum"],
    }

    // Gin List
    const ginList = {
      'Aviation' : ["Gin"],
      'Beefeater' : ["Gin"],
      'Bombay' : ["Gin"],
      'Bombay Saphire' : ["Gin"],
      'Hendricks' : ["Gin"],
      'Tanqueray' : ["Gin"],
    }

    // Scotch List
    const scotchList = {
      '' : ["Scotch"],
    }
    
    // Cordials List
    const cordialsList = {
      '' : ["Cordials"],
    }

    // Wine List
    const wineList = {
      '' : ["Wine"],
    }

    // Beer List
    const beerList = {
      '' : ["Beer"],
    }
   


   // Jarritos List
   const jarritosList = {
    'Fruit Punch' : ["Jarritos"],
    'Grapefruit' : ["Jarritos"],
    'Guava' : ["Jarritos"],
    'Lime' : ["Jarritos"],
    'Mandarin' : ["Jarritos"],
    'Mango' : ["Jarritos"],
    'Pineapple' : ["Jarritos"],
    'Tamarind' : ["Jarritos"]
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
            span.setAttribute('class', 'button-text');
            button.setAttribute('id', brand);
            button.setAttribute('class', 'brand-buttons');
            button.setAttribute('value', current[brand]);
            targetDiv.append(button);
        });
}

    // Loads Tequila Classes
    function loadTequilaClass(current) {
      const targetDiv = $("#buttonDiv");
      Object.keys(current).forEach((brand) => {
          let button = document.createElement("button");
          let span = document.createElement("span");
          button.appendChild(span);
          span.innerHTML = brand;
          span.setAttribute('class', 'button-text');
          button.setAttribute('id', brand);
          button.setAttribute('class', 'brand-buttons');
          button.setAttribute('value', current[brand]);
          targetDiv.append(button);
      });
}

    // Loads Whiskey Classes
    function loadWhiskeyClass(current) {
      const targetDiv = $("#buttonDiv");
      Object.keys(current).forEach((brand) => {
          let button = document.createElement("button");
          let span = document.createElement("span");
          button.appendChild(span);
          span.innerHTML = brand;
          span.setAttribute('class', 'button-text');
          button.setAttribute('id', brand);
          button.setAttribute('class', 'brand-buttons');
          button.setAttribute('value', current[brand]);
          targetDiv.append(button);
      });
}
    

    // Initialization---------------------------------------------------------
    loadTypes();
    // Tequilas-----------------------
    loadTequilaClass(tequilaClassList)
    loadBrands(blancoList);
    loadBrands(reposadoList);
    loadBrands(anejoList);
    loadBrands(jovenList);
    loadBrands(selectList);
    loadBrands(mezcalList);
    loadBrands(flavoredTequilaList);
    // Vodkas-------------------------
    loadBrands(vodkaList);
    // Whiskeys-----------------------
    loadWhiskeyClass(whiskeyClassList);
    loadBrands(whiskeyList);
    // Rum----------------------------
    loadBrands(rumList);
    // Gin----------------------------
    loadBrands(ginList);
    // Cordials-----------------------
    loadBrands(cordialsList);
    // Wine---------------------------
    loadBrands(wineList);
    // Beer---------------------------
    loadBrands(beerList);
    // Jarritos-----------------------
    loadBrands(jarritosList);
    $("#alphabetDiv").hide();
    $(".back-button").hide();
    $(".brand-buttons").hide();
    $("#buttonDiv").hide();
    // -----------------------------------------------------------------------

    // Repetative Hide Function
    function hide(){
      $("#mainButtonDiv").hide();
      $(".main-buttons").hide();
      $(".brand-buttons").hide();
      $(".brand-buttons[value|='Class'").hide();
      $("#buttonDiv").show();
      $(".back-button").show();
      openFullscreen();
    }

    // Show Tequila Class Buttons
    $(".main-buttons[value|='Tequila'").on('click', function(){
        hide();
        $(".brand-buttons[value|='ClassTequila'").show();
    });

    // Show Blanco Tequila Buttons
    $("#Blanco").on('click', function(){
      hide();
      $(".brand-buttons[value|='Blanco'").show();
    });

    // Show Reposado Tequila Buttons
    $("#Reposado").on('click', function(){
      hide();
      $(".brand-buttons[value|='Reposado'").show();
    });

    // Show Anejo Tequila Buttons
    $("#Anejo").on('click', function(){
      hide();
      $(".brand-buttons[value|='Anejo'").show();
    });

    // Show Joven Tequila Buttons
    $("#Joven").on('click', function(){
    hide();
    $(".brand-buttons[value|='Joven'").show();
    });

    // Show Select Reserves Tequila Buttons
    $("#Select").on('click', function(){
    hide();
    $(".brand-buttons[value|='Select'").show();
});

    // Show Mezcal Buttons
    $("#Mezcal").on('click', function(){
    hide();
    $(".brand-buttons[value|='Mezcal'").show();
    });

    // Show Flavored Tequila Buttons
    $("#Flavored").on('click', function(){
      hide();
      $(".brand-buttons[value|='Flavored'").show();
    });

    // Show Vodka Buttons
    $(".main-buttons[value|='Vodka'").on('click', function(){
  hide();
  $(".brand-buttons[value|='Vodka'").show();
    });
    
    // Show Whiskey Class Buttons
    $(".main-buttons[value|='Whiskey'").on('click', function(){
      hide();
      $(".brand-buttons[value|='ClassWhiskey'").show();
    });

    // Show Rum Buttons
    $(".main-buttons[value|='Rum'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Rum'").show();
    });

    // Show Gin Buttons
    $(".main-buttons[value|='Gin'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Gin'").show();
    });

    // Show Jarritos Buttons
    $(".main-buttons[value|='Jarritos'").on('click', function(){
  hide();
  $(".brand-buttons[value|='Jarritos'").show();
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