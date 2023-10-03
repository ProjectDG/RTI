

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
      'Casa Maestri Flask' : ["Blanco"],
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
      'El Luchador 110' : ["Blanco"],
      'El Mayor' : ["Blanco"],
      'El Tequileno' : ["Blanco"],
      'El Tesoro' : ["Blanco"],
      'El Espolon' : ["Blanco"],
      'Eterno Verano' : ["Blanco"],
      'Exotico' : ["Blanco"],
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
      //'Kah' : ["Blanco"],
      'Komos' : ["Blanco"],
      'Lapis' : ["Blanco"],
      'Los Azulejos' : ["Blanco"],
      'Los Arango' : ["Blanco"],
      'Los Nuhuales' : ["Blanco"],
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
      'Sauza Hornitos' : ["Blanco"],
      'Siempre' : ["Blanco"],
      'Siete Leguas' : ["Blanco"],
      'Suerte' : ["Blanco"],
      'Tapatio' : ["Blanco"],
      'Teremana' : ["Blanco"],
      'The Butterfly Cannon Blue' : ["Blanco"],
      'The Butterfly Cannon Rosa' : ["Blanco"],  // ---------------> Flavored or Joven?
      'Tosco' : ["Blanco"],
      'Tres Agaves' : ["Blanco"],
      'Tres Generaciones' : ["Blanco"],
      'Tromba' : ["Blanco"],
      'Vanguardia' : ["Blanco"],
      'Vide De Louie' : ["Blanco"],
      'Villa One' : ["Blanco"],
      'Volcan' : ["Blanco"]
    }

    // Reposado Tequila List
    const reposadoList = {
      '512' : ["Reposado"],
      '818' : ["Reposado"],
      '1800' : ["Reposado"],
      '1 2 3' : ["Reposado"],
      //'4 Copas' : ["Reposado"],
      'Adictivo' : ["Reposado"],
      //'Agavales' : ["Reposado"],
      'Ambhar' : ["Reposado"],
      'Arette' : ["Reposado"],
      'Arrogante' : ["Reposado"],
      'Arta' : ["Reposado"],
      'Artenom' : ["Reposado"],
      'Asombroso' : ["Reposado"],
      //'Astral' : ["Reposado"],
      'Avion' : ["Reposado"],
      'Azunia' : ["Reposado"],
      //'Baron' : ["Reposado"],
      'Blue Nectar' : ["Reposado"],
      'Blue Nectar Special Craft' : ["Reposado"],
      //'Cabeza' : ["Reposado"],
      'Cabo Wabo' : ["Reposado"],
      //'Calirosa' : ["Reposado"],
      'Camarena' : ["Reposado"],
      'Cantera' : ["Reposado"],
      'Casa Del Sol' : ["Reposado"],
      'Casa Maestri Flask' : ["Reposado"],
      'Casa Mexico' : ["Reposado"],
      'Casa Noble' : ["Reposado"],
      'Casamigos' : ["Reposado"],
      'Catrina' : ["Reposado"],
      'Cazadores' : ["Reposado"],
      'Cenote' : ["Reposado"],
      'Chamucos' : ["Reposado"],
      'Chaquira' : ["Reposado"],
      'Chinaco' : ["Reposado"],
      //'Cimarron' : ["Reposado"],
      'Cincoro' : ["Reposado"],
      'Coa De Jima' : ["Reposado"],
      'Codigo' : ["Reposado"],
      'Corazon' : ["Reposado"],
      //'Corazon Estate' : ["Reposado"],
      //'Corazon Expesiones' : ["Reposado"],
      'Corralejo' : ["Reposado"],
      'Corzo' : ["Reposado"],
      'Dano\'s' : ["Reposado"],
      'DeLeon' : ["Reposado"],
      'Don Cheyo' : ["Reposado"],
      'Don Fulano' : ["Reposado"],
      'Don Julio' : ["Reposado"],
      'Don Julio Double Cask' : ["Reposado"],
      //'Don Londres' : ["Reposado"],
      'Don Suenos' : ["Reposado"],
      'Don Abraham' : ["Reposado"],
      'Don Felix' : ["Reposado"],
      'Don Ramon' : ["Reposado"],
      //'Dona Celia' : ["Reposado"],
      //'Dos Primos' : ["Reposado"],
      'Dos Armadillos' : ["Reposado"],
      'Dulce Vida' : ["Reposado"],
      'El Jimador' : ["Reposado"],
      //'El Luchador' : ["Reposado"],
      //'El Luchador 110' : ["Reposado"],
      'El Mayor' : ["Reposado"],
      //'El Tequileno' : ["Reposado"],
      'El Tesoro' : ["Reposado"],
      'El Espolon' : ["Reposado"],
      'Eterno Verano' : ["Reposado"],
      //'Florida Kush' : ["Reposado"],
      'Fortaleza' : ["Reposado"],
      'G4' : ["Reposado"],
      'Gran Centenario' : ["Reposado"],
      'Grand Mayan' : ["Reposado"],
      'Herencia' : ["Reposado"],
      'Herradura' : ["Reposado"],
      'Hiatus' : ["Reposado"],
      'Honor Claro' : ["Reposado"],
      'Hussongs' : ["Reposado"],
      'Insolito' : ["Reposado"],
      'José Cuervo Tradicional' : ["Reposado"],
      //'Kah' : ["Reposado"],
      'Lapis' : ["Reposado"],
      'Los Azulejos' : ["Reposado"],
      'Los Arango' : ["Reposado"],
      'Lunazul' : ["Reposado"],
      'Maestro Dobel' : ["Reposado"],
      'Maracame' : ["Reposado"],
      'Mi Campo' : ["Reposado"],
      'Mijenta' : ["Reposado"],
      'Milagro' : ["Reposado"],
      'Nueveuno' : ["Reposado"],
      'Ocho' : ["Reposado"],
      'Olmeca Altos' : ["Reposado"],
      //'One With Life' : ["Reposado"],
      'Padre Azul' : ["Reposado"],
      'Paqui' : ["Reposado"],
      'Partida' : ["Reposado"],
      'Pasote' : ["Reposado"],
      'Patron' : ["Reposado"],
      //'Patron Estate' : ["Reposado"],
      //'Pura Vida' : ["Reposado"],
      'Revolucion' : ["Reposado"],
      'Riazul' : ["Reposado"],
      //'Rock\'N\'Roll' : ["Reposado"],
      'San Matias' : ["Reposado"],
      'Sauza Hornitos' : ["Reposado"],
      'Siempre' : ["Reposado"],
      'Siete Leguas' : ["Reposado"],
      'Suerte' : ["Reposado"],
      'Tapatio' : ["Reposado"],
      'Teremana' : ["Reposado"],
      //'The Butterfly Cannon Blue' : ["Reposado"],
      //'The Butterfly Cannon Rosa' : ["Reposado"],  // ---------------> Flavored or Joven?
      'Tosco' : ["Reposado"],
      'Tres Agaves' : ["Reposado"],
      'Tres Generaciones' : ["Reposado"],
      'Tromba' : ["Reposado"],
      'Vanguardia' : ["Reposado"],
      //'Vide De Louie' : ["Reposado"],
      'Villa One' : ["Reposado"],
      'VIVA XXX11' : ["Reposado"],
      'Volcan' : ["Reposado"],
      'Yave' : ["Reposado"]
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
      'Pina Loca' : ["Flavored"]
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
      'Canadian' : ["ClassWhiskey"],
      //'Indian' : ["ClassWhiskey"],
      'Irish' : ["ClassWhiskey"],
      //'Japanese' : ["ClassWhiskey"],
      'Rye' : ["ClassWhiskey"],
      'Scotch' : ["ClassWhiskey"],
      'Single Malt & Blended' : ["ClassWhiskey"],
      'Tennessee' : ["ClassWhiskey"],
      //'White' : ["ClassWhiskey"],
      'Flavored Whiskey' : ["ClassWhiskey"]
    }

    // Bourbon List
    const bourbonList = {
      'Jim Beam' : ["Bourbon"],
    }

    // Canadian List
    const canadianList = {
      '' : ["Canadian"],
    }

    // Flavored Whiskey List
    const flavoredWhiskeyList = {
      '' : ["FlavoredWhiskey"]
    }

    // Irish List
    const irishList = {
      '' : ["Irish"],
    }

    // Rye List
    const ryeList = {
      '' : ["Rye"],
    }

    // Scotch List
    const scotchList = {
      '' : ["Scotch"],
    }

    // Single Malt & Blended List
    const singleMaltBlendedList = {
      '' : ["Single Malt & Blended"],
    }

    // TennesseeList
    const tennesseeList = {
      'Jack Daniels' : ["Tennessee"],
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
    
    // Cordials List
    const cordialsList = {
      '' : ["Cordials"],
    }

    // Wine List
    const wineList = {
      '' : ["Wine"],
    }

    // Beer Class List
    const beerClassList = {
      'Draft' : ["ClassBeer"],
      'Bottle' : ["ClassBeer"],
    }

    // Draft Beer List
    const draftBeerList = {
      'Bone Hook "Lager"' : ["DraftBeer"],
      'Bone Hook "Wicked Seas"' : ["DraftBeer"],
      'Dos Equis "Lager"' : ["DraftBeer"],
      'Kona "Big Wave"' : ["DraftBeer"],
      'Modelo Especial' : ["DraftBeer"],
      'Pacifico' : ["DraftBeer"],
      'Ankrolab "Turtle Season"' : ["DraftBeer"],
    }

    // Bottle Beer List
    const bottleBeerList = {
      'Amstel Light' : ["BottleBeer"],
      'Budweiser' : ["BottleBeer"],
      'Bud Light' : ["BottleBeer"],
      'Coors Light' : ["BottleBeer"],
      'Corona Extra' : ["BottleBeer"],
      'Corona Light' : ["BottleBeer"],
      'Corona Premier' : ["BottleBeer"],
      'Corona Familiar' : ["BottleBeer"],
      'Corona N.A.' : ["BottleBeer"],
      'Dos Equis "Amber"' : ["BottleBeer"],
      'Dos Equis "Lager"' : ["BottleBeer"],
      'Heineken' : ["BottleBeer"],
      'Heineken N.A.' : ["BottleBeer"],
      'Bone Hook "Island Breeze"' : ["BottleBeer"],
      'Michelob Ultra' : ["BottleBeer"],
      'Miller Light' : ["BottleBeer"],
      'Modelo Especial' : ["BottleBeer"],
      'Modelo Negra' : ["BottleBeer"],
      'McKenzies "Pumpkin Jack"' : ["BottleBeer"],
      'Tecate' : ["BottleBeer"],
      'Victoria' : ["BottleBeer"],
      'Bone hook " Wicked Seas"' : ["BottleBeer"],
      'Yuengling' : ["BottleBeer"],
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
        Object.keys(current).sort().forEach((brand) => {
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

          if(button.id === "Single Malt & Blended"){
            button.setAttribute('id', 'SingleMaltBlended');
            console.log(button.id)
          }

          if(button.id === "Flavored Whiskey"){
            button.setAttribute('id', 'FlavoredWhiskey');
            console.log(button.id)
          }
      });
}

    // Loads Beer Classes
    function loadBeerClass(current) {
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
    loadBrands(bourbonList);
    loadBrands(canadianList);
    loadBrands(irishList);
    loadBrands(ryeList);
    loadBrands(scotchList);
    loadBrands(singleMaltBlendedList);
    loadBrands(tennesseeList);
    loadBrands(flavoredWhiskeyList);
    // Rum----------------------------
    loadBrands(rumList);
    // Gin----------------------------
    loadBrands(ginList);
    // Cordials-----------------------
    loadBrands(cordialsList);
    // Wine---------------------------
    loadBrands(wineList);
    // Beer---------------------------
    loadBeerClass(beerClassList);
    loadBrands(draftBeerList);
    loadBrands(bottleBeerList);
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

    // Show Bourbon Buttons
    $("#Bourbon").on('click', function(){
      hide();
      $(".brand-buttons[value|='Bourbon'").show();
    });

    // Show Canadian Buttons
    $("#Canadian").on('click', function(){
      hide();
      $(".brand-buttons[value|='Canadian'").show();
    });
    
    // Show Irish Buttons
    $("#Irish").on('click', function(){
      hide();
      $(".brand-buttons[value|='Irish'").show();
    });

    // Show Rye Buttons
    $("#Rye").on('click', function(){
      hide();
      $(".brand-buttons[value|='Rye'").show();
    });

    // Show Scotch Buttons
    $("#Scotch").on('click', function(){
      hide();
      $(".brand-buttons[value|='Scotch'").show();
    });

    // Show Single Malt & Blended Buttons
    $("#SingleMaltBlended").on('click', function(){
      hide();
      $(".brand-buttons[value|='Single Malt & Blended'").show();
    });

    // Show Tennessee Buttons
    $("#Tennessee").on('click', function(){
      hide();
      $(".brand-buttons[value|='Tennessee'").show();
    });

    // Show Flavored Whiskey Buttons
    $("#FlavoredWhiskey").on('click', function(){
      hide();
      $(".brand-buttons[value|='FlavoredWhiskey'").show();
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

    // Show Beer Class Buttons
    $(".main-buttons[value|='Beer'").on('click', function(){
      hide();
      $(".brand-buttons[value|='ClassBeer'").show();
    });

    // Show Draft Beer Buttons
    $("#Draft").on('click', function(){
      hide();
      $(".brand-buttons[value|='DraftBeer'").show();
    });

    // Show Bottle Beer Buttons
    $("#Bottle").on('click', function(){
      hide();
      $(".brand-buttons[value|='BottleBeer'").show();
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