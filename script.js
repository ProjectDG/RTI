

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
      'Brandy' : [],
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
      'ArteNom 1123' : ["Blanco"],
      'ArteNom 1579' : ["Blanco"],
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
      'ArteNom 1414' : ["Reposado"],
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
      'VIVA XXXII' : ["Reposado"],
      'Volcan' : ["Reposado"],
      'Yave' : ["Reposado"]
    }

    // Anejo Tequila List
    const anejoList = {
      '512' : ["Anejo"],
      '818' : ["Anejo"],
      '1800' : ["Anejo"],
      '1 2 3' : ["Anejo"],
      '4 Copas' : ["Anejo"],
      'Adictivo' : ["Anejo"],
      //'Agavales' : ["Anejo"],
      'Ambhar' : ["Anejo"],
      'Arette' : ["Anejo"],
      'Arrogante' : ["Anejo"],
      'Arta' : ["Anejo"],
      'ArteNom 1146' : ["Anejo"],
      //'Asombroso' : ["Anejo"],
      //'Astral' : ["Anejo"],
      'Avion' : ["Anejo"],
      'Azunia' : ["Anejo"],
      'Azunia Black' : ["Anejo"],
      //'Baron' : ["Anejo"],
      'Blue Nectar' : ["Anejo"],
      'Cabal' : ["Anejo"],
      //'Cabeza' : ["Anejo"],
      'Cabo Wabo' : ["Anejo"],
      'Calirosa' : ["Anejo"],
      'Camarena' : ["Anejo"],
      'Cantera' : ["Anejo"],
      'Casa Del Sol' : ["Anejo"],
      'Casa Dragones' : ["Anejo"],
      'Casa Maestri' : ["Anejo"],
      'Casa Mexico' : ["Anejo"],
      'Casa Noble' : ["Anejo"],
      'Casamigos' : ["Anejo"],
      'Casino' : ["Anejo"],
      'Catrina' : ["Anejo"],
      'Cazadores' : ["Anejo"],
      'Cenote' : ["Anejo"],
      'Chamucos' : ["Anejo"],
      'Chaquira' : ["Anejo"],
      'Chinaco' : ["Anejo"],
      //'Cimarron' : ["Anejo"],
      'Cincoro' : ["Anejo"],
      //'Coa De Jima' : ["Anejo"],
      'Codigo' : ["Anejo"],
      'Corazon' : ["Anejo"],
      //'Corazon Estate' : ["Anejo"],
      //'Corazon Expesiones' : ["Anejo"],
      'Corralejo' : ["Anejo"],
      'Corzo' : ["Anejo"],
      'Dano\'s' : ["Anejo"],
      'DeLeon' : ["Anejo"],
      'Don Abraham' : ["Anejo"],
      'Don Cheyo' : ["Anejo"],
      'Don Felix' : ["Anejo"],
      'Don Fulano' : ["Anejo"],
      'Don Julio' : ["Anejo"],
      //'Don Londres' : ["Anejo"],
      'Don Ramon' : ["Anejo"],
      'Don Suenos' : ["Anejo"],
      //'Dona Celia' : ["Anejo"],
      //'Dos Primos' : ["Anejo"],
      'Dos Armadillos' : ["Anejo"],
      'Dulce Vida' : ["Anejo"],
      'El Jimador' : ["Anejo"],
      //'El Luchador' : ["Anejo"],
      //'El Luchador 110' : ["Anejo"],
      'El Mayor' : ["Anejo"],
      //'El Tequileno' : ["Anejo"],
      'El Tesoro' : ["Anejo"],
      'El Espolon' : ["Anejo"],
      'Florida Kush' : ["Anejo"],
      'Fortaleza' : ["Anejo"],
      'G4' : ["Anejo"],
      'Gran Centenario' : ["Anejo"],
      'Grand Mayan Ultra' : ["Anejo"],
      'Herencia' : ["Anejo"],
      'Herradura' : ["Anejo"],
      'Hiatus' : ["Anejo"],
      'Hussongs' : ["Anejo"],
      'Insolito' : ["Anejo"],
      'José Cuervo Tradicional' : ["Anejo"],
      //'Kah' : ["Anejo"],
      'Lapis' : ["Anejo"],
      'Los Arango' : ["Anejo"],
      'Los Azulejos MasterPiece' : ["Anejo"],
      'Los Azulejos Talavera' : ["Anejo"],
      'Lunazul' : ["Anejo"],
      'Maestro Dobel' : ["Anejo"],
      'Maracame' : ["Anejo"],
      //'Mi Campo' : ["Anejo"],
      //'Mijenta' : ["Anejo"],
      'Milagro' : ["Anejo"],
      'Nueveuno' : ["Anejo"],
      'Ocho' : ["Anejo"],
      'Olmeca Altos' : ["Anejo"],
      'Padre Azul' : ["Anejo"],
      'Paqui' : ["Anejo"],
      'Partida' : ["Anejo"],
      'Pasote' : ["Anejo"],
      'Patron' : ["Anejo"],
      'Pura Vida' : ["Anejo"],
      'Revolucion' : ["Anejo"],
      'Riazul' : ["Anejo"],
      'San Matias Tahona' : ["Anejo"],
      'Sauza Hornitos' : ["Anejo"],
      'Sauza Hornitos Black' : ["Anejo"],
      'Siete Leguas' : ["Anejo"],
      'Suerte' : ["Anejo"],
      'Tapatio' : ["Anejo"],
      'Tosco' : ["Anejo"],
      'Tres Agaves' : ["Anejo"],
      'Tres Generaciones' : ["Anejo"],
      'Tromba' : ["Anejo"],
      'Vanguardia' : ["Anejo"],
      'Villa One' : ["Anejo"],
      'VIVA XXXII Extra Anejo' : ["Anejo"],
      'Volcan' : ["Anejo"]
    }

    // Joven Tequila List
    const jovenList = {
      'Viva XXXII' : ["Joven"]
    }

    // Select Tequila List
    const selectList = {
      '1800 Cristalino' : ["Select"],
      '1800 Milenio' : ["Select"],
      'Arette Extra Anejo' : ["Select"],
      'Arta Extra Anejo' : ["Select"],
      'Asombroso 5 Year' : ["Select"],
      'Avion 44' : ["Select"],
      'Avion Cristalino' : ["Select"],
      'Cantera Extra Anejo' : ["Select"],
      'Casa Noble Single Barrel' : ["Select"],
      'Casa Dragones (Joven)' : ["Select"],
      'Casino Azul Warship' : ["Select"],
      'Casino Azul Extra Anejo' : ["Select"],
      'Cazadores Extra Anejo' : ["Select"],
      'Chaquira Extra Anejo' : ["Select"],
      'Cincoro Gold' : ["Select"],
      'Cincoro Extra Anejo' : ["Select"],
      'Clase Azul (Blanco)' : ["Select"],
      'Clase Azul (Reposado)' : ["Select"],
      'Clase Azul (Anejo)' : ["Select"],
      'Clase Azul (Mezcal)' : ["Select"],
      'Clase Azul 5 Year Extra Anejo' : ["Select"],
      'Clase Azule Dia De Los Muertos' : ["Select"],
      'Codigo 1530 George Straight Anejo' : ["Select"],
      'Codigo 1530 Barrel Strength Anejo' : ["Select"],
      'Codigo Extra Anejo' : ["Select"],
      'Corralejo 99,000 Horas' : ["Select"],
      'Corralejo (Reposado) Triple Distilled ' : ["Select"],
      'Deleon Extra Anejo' : ["Select"],
      'Deleon Diamante' : ["Select"],
      'Don Cheyo Extra Anejo' : ["Select"],
      'Don Julio 1942' : ["Select"],
      'Don Julio 70th' : ["Select"],
      'Don Julio Primavera' : ["Select"],
      'Don Julio Real' : ["Select"],
      'Don Abraham Extra Anejo' : ["Select"],
      'El Tesoro 80th' : ["Select"],
      'El Tesoro Paradiso' : ["Select"],
      'El Espolon 6 Year' : ["Select"],
      'El Espolon Extra Anejo' : ["Select"],
      'Fuenteseca 21 Year' : ["Select"],
      'G4 Extra Anejo' : ["Select"],
      'G4 5 Year Anejo' : ["Select"],
      'Gran Coramino Cristalino' : ["Select"],
      'Grand Love Extra Anejo' : ["Select"],
      'Grand Mayan Ultra' : ["Select"],
      'Herradura Scotch Cask' : ["Select"],
      'Herradura Suprema' : ["Select"],
      'Herradura Ultra' : ["Select"],
      'Jose Cuervo Familia' : ["Select"],
      'Komos Cristalino' : ["Select"],
      'Komos Extra Anejo' : ["Select"],
      'Komos Rosa (Reposado)' : ["Select"],
      'Maestro Dobel 50' : ["Select"],
      'Maestro Dobel Diamante' : ["Select"],
      'Maestro Doble Humito' : ["Select"],
      'Milagro Select Barrel Reserve (Blanco)' : ["Select"],
      'Milagro Select Barrel Reserve (Reposado)' : ["Select"],
      'Milagro Select Barrel Reserve (Anejo)' : ["Select"],
      'Ocho Extra Anejo' : ["Select"],
      'Partida Elegante' : ["Select"],
      'Patron Gran Burdeos' : ["Select"],
      'Patron Gran Platinum' : ["Select"],
      'Patron El Alto' : ["Select"],
      'Patron En Lalique' : ["Select"],
      'Patron Gran Piedra' : ["Select"],
      'Patron Guillermo Del Torro' : ["Select"],
      'Patron Sherry' : ["Select"],
      'Patron Extra Anejo' : ["Select"],
      'Qui Extra Anejo' : ["Select"],
      'Revolucion Cristalino' : ["Select"],
      'Revoulcion Extra Anejo 3 Year' : ["Select"],
      'Roca Patron (Blanco)' : ["Select"],
      'Rock\'N\'Roll Cristalino' : ["Select"],
      'San Matias Rey Sol' : ["Select"],
      'Siete Leguas Dantano' : ["Select"],
      'Suerte Extra Anejo' : ["Select"],
      'Tapatio Excel' : ["Select"],
      'Tres Cuatro Cinco Extra Anejo' : ["Select"],
    }

    // Mezcal Tequila List
    const mezcalList = {
      'Amaras Cupreata' : ["Mezcal"],
      'Amaras Espadin' : ["Mezcal"],
      'Amaras Reposado' : ["Mezcal"],
      'Agua Migica' : ["Mezcal"],
      'Banhez Tobala' : ["Mezcal"],
      'Casamigos' : ["Mezcal"],
      'Clase Azul Durango' : ["Mezcal"],
      'Clase Azul Guerero' : ["Mezcal"],
      'Convite Coyote' : ["Mezcal"],
      'Creyente (Joven)' : ["Mezcal"],
      'Del Maguey Arronqueno' : ["Mezcal"],
      'Del Maguey Chichicapa' : ["Mezcal"],
      'Del Maguey Crema' : ["Mezcal"],
      'Del Maguey Espadin' : ["Mezcal"],
      'Del Maquey Las Milpas' : ["Mezcal"],
      'Del Maguey Madrecuixe' : ["Mezcal"],
      'Del Maguey Minero' : ["Mezcal"],
      'Del Maguey Pechuga' : ["Mezcal"],
      'Del Maguey Rio Minas' : ["Mezcal"],
      'Del Maguey San Luis Rio' : ["Mezcal"],
      'Del Maguey San Pablo' : ["Mezcal"],
      'Del Maguey Santo Domingo' : ["Mezcal"],
      'Del Maguey Vida' : ["Mezcal"],
      'Del Maguey Wild Jabali' : ["Mezcal"],
      'Del Maguey Wild Papalome' : ["Mezcal"],
      'Del Maguey Wild Tobala' : ["Mezcal"],
      'Delirio (Blanco)' : ["Mezcal"],
      'Delirio (Reposado)' : ["Mezcal"],
      'Delirio (Anejo)' : ["Mezcal"],
      'Derrumbes Oaxaca' : ["Mezcal"],
      'Derrumbes San Luis' : ["Mezcal"],
      'Derrumbes Taumulipas' : ["Mezcal"],
      'Derrumbes Zacatecus' : ["Mezcal"],
      'Don Ramon (Joven)' : ["Mezcal"],
      'Dos Hombres (Joven)' : ["Mezcal"],
      'El Recuerdo Abocado' : ["Mezcal"],
      'El Recuerdo (Joven)' : ["Mezcal"],
      'Fabriquero Sotol' : ["Mezcal"],
      'Fidencio Classico' : ["Mezcal"],
      'Fidencio Madrecuixe' : ["Mezcal"],
      'Fidencio Unico' : ["Mezcal"],
      'Geu Beez Jabali (Joven)' : ["Mezcal"],
      'Hijos Pear' : ["Mezcal"],
      'Ilegal (Reposado)' : ["Mezcal"],
      'Ilegal (Anejo)' : ["Mezcal"],
      'Ilegal (Joven)' : ["Mezcal"],
      'Kimo Sabe (Joven)' : ["Mezcal"],
      'Leyenda Verde Potosi' : ["Mezcal"],
      'Los Amantes (Reposado)' : ["Mezcal"],
      'Los Amantes (Anejo)' : ["Mezcal"],
      'Los Amantes (Joven)' : ["Mezcal"],
      'Monte Alban' : ["Mezcal"],
      'Montelobos Espadin' : ["Mezcal"],
      'Montelobos (Joven)' : ["Mezcal"],
      'Montelobos Tobala' : ["Mezcal"],
      'Peo Criollo' : ["Mezcal"],
      'Peolton Vegan Pechuga' : ["Mezcal"],
      'Raicilla Sierra' : ["Mezcal"],
      'Raicilla Tabernas' : ["Mezcal"],
      'Rey Campero Cuishe' : ["Mezcal"],
      'Ray Campero Espadin' : ["Mezcal"],
      'Rey Campero Jabali' : ["Mezcal"],
      'Rosaluna (Joven)' : ["Mezcal"],
      'Santo Puro Mezquila' : ["Mezcal"],
      'Senorio (Anejo)' : ["Mezcal"],
      'Sombra (Reposado)' : ["Mezcal"],
      'Sombra (Joven)' : ["Mezcal"],
      'Sotol La Higuera' : ["Mezcal"],
      'Verde Momento' : ["Mezcal"],
      'Xicala (Joven)' : ["Mezcal"],
      'Xicaru (Blanco)' : ["Mezcal"],
      'Xicuru (Reposado)' : ["Mezcal"],
      'Xicuru (Anejo)' : ["Mezcal"],
      'Zignum (Blanco)' : ["Mezcal"],
      'Zignum (Reposado)' : ["Mezcal"],
      'Zignum (Anejo)' : ["Mezcal"],
    }

    // Flavored Tequila List
    const flavoredTequilaList = {
      '1800 Coconut' : ["Flavored"],
      'Cantera Cafe' : ["Flavored"],
      'Dano\'s Infused' : ["Flavored"],
      'Ghost' : ["Flavored"],
      'Rock\'N\'Roll Mango' : ["Flavored"],
      'Pina Loca' : ["Flavored"],
      'Tanteo Jalapeno' : ["Flavored"],
      'Tanteo Habanero' : ["Flavored"],
      'Tanteo Chipotle' : ["Flavored"]
    }

    // Vodka List
    const vodkaList = {
      'Belvedere' : ["Vodka"],
      'Finlandia' : ["Vodka"],
      'Grey Goose' : ["Vodka"],
      'Ketel One' : ["Vodka"],
      'Ketel One Citroen' : ["Vodka"],
      'Tito\'s' : ["Vodka"],
      'Van Gogh Chocolate' : ["Vodka"],
      // Template  --------->    '' : ["Vodka"],
    }

    // Whiskey List
    const whiskeyClassList = {
      'Bourbon' : ["ClassWhiskey"],
      'Canadian' : ["ClassWhiskey"],
      //'Indian' : ["ClassWhiskey"],
      'Irish' : ["ClassWhiskey"],
      //'Japanese' : ["ClassWhiskey"],
      'Mexican' : ["ClassWhiskey"],
      'Rye' : ["ClassWhiskey"],
      'Scotch' : ["ClassWhiskey"],
      //'Single Malt & Blended' : ["ClassWhiskey"],
      'Tennessee' : ["ClassWhiskey"],
      //'White' : ["ClassWhiskey"],
      'Flavored Whiskey' : ["ClassWhiskey"]
    }

    // Bourbon List
    const bourbonList = {
      'Jim Beam' : ["Bourbon"],
      'Jim Beam Black' : ["Bourbon"],
      'Knob Creek' : ["Bourbon"],
      'Maker\'s Mark' : ["Bourbon"],
      'Woodford Reserve' : ["Bourbon"],
      'Yellowstone' : ["Bourbon"],
    }

    // Canadian List
    const canadianList = {
      'Canadian Club (Rye)' : ["Canadian"],
      'Crown Royal (Blended)' : ["Canadian"],
      'Seagram\'s V.O. (Blended)' : ["Canadian"],
    }

    // Flavored Whiskey List
    const flavoredWhiskeyList = {
      'Demon Seed (Rye)' : ["FlavoredWhiskey"],
      'Drambuie (Scotch)' : ["FlavoredWhiskey"],
      'Fireball (Canadian)' : ["FlavoredWhiskey"],
      'Skrewball' : ["FlavoredWhiskey"],
    }

    // Irish List
    const irishList = {
      'Bushmills (Blended)' : ["Irish"],
      'Jameson' : ["Irish"],
      'Tullamore D.E.W. (Blended)' : ["Irish"],
    }

     // Mexican List
     const mexicanList = {
      'Abasolo' : ["Mexican"],
    }

    // Rye List
    const ryeList = {
      'Old Forester' : ["Rye"],
      'Pendleton' : ["Rye"],
    }

    // Scotch List
    const scotchList = {
      'Dewars (Blended)' : ["Scotch"],
      'Glenfiddich 12 Year (Single Malt)' : ["Scotch"],
      'J & B (Blended)' : ["Scotch"],
      'Johnny Walker Red (Blended)' : ["Scotch"],
      'Johnny Walker Black (Blended)' : ["Scotch"],
      'Johnny Walker Blue (Blended)' : ["Scotch"],
    }

    // Single Malt & Blended List
    const singleMaltBlendedList = {
      '' : ["Single Malt & Blended"],
    }

    // TennesseeList
    const tennesseeList = {
      'Jack Daniels' : ["Tennessee"],
      'Jack Daniels: Gentleman Jack' : ["Tennessee"],
      'Jack Daniels (Single Barrel)' : ["Tennessee"],
    }

    // Rum List
    const rumList = {
      'Bacardi' : ["Rum"],
      'Bacardi Coconut' : ["Rum"],
      'Bacardi Coconut' : ["Rum"],
      'Bacardi Dragonberry' : ["Rum"],
      'Bacardi Lime' : ["Rum"],
      'Bacardi Limon' : ["Rum"],
      'Bacardi Pineapple' : ["Rum"],
      'Bacardi Raspberry' : ["Rum"],
      'Captain Morgan' : ["Rum"],
      'Captain Morgan Grapefruit' : ["Rum"],
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
      'Bombay Sapphire' : ["Gin"],
      'Hendricks' : ["Gin"],
      'Tanqueray' : ["Gin"],
    }

    // Brandy List
    const brandyList = {
      'Hennessy (Cognac)' : ["Brandy"],
      'Louis XIII (Cognac)' : ["Brandy"],
    }

    // Cordials List
    const cordialsList = {
      'Amaretto' : ["Cordials"],
      'Aperol' : ["Cordials"],
      'Bailey\'s Irish Cream' : ["Cordials"],
      'Blackberry Brandy' : ["Cordials"],
      'Blue Curacao' : ["Cordials"],
      'Campari' : ["Cordials"],
      'Cedilla Liqueur De Acai' : ["Cordials"],
      'Chambord' : ["Cordials"],
      'Chartreuse' : ["Cordials"],
      'Chinola Passion Fruit' : ["Cordials"],
      'Cointreau' : ["Cordials"],
      'DHōS Bittersweet' : ["Cordials"],
      'Frangelico' : ["Cordials"],
      'Grand Marnier' : ["Cordials"],
      'Jägermeister' : ["Cordials"],
      'Kahlua' : ["Cordials"],
      'Midori' : ["Cordials"],
      'Nixta Elote' : ["Cordials"],
      'Peach Schnapps' : ["Cordials"],
      'Sambuca' : ["Cordials"],
      'Sour Apple Pucker' : ["Cordials"],
      'Southern Comfort' : ["Cordials"],
      'St. Germaine Elderflower' : ["Cordials"],
      'Disaronno Amaretto' : ["Cordials"],
      'Vermouth Dry' : ["Cordials"],
      'Vermouth Sweet' : ["Cordials"],
      'Watermelon Pucker' : ["Cordials"]
    }

    // Wine Class List
    const wineClassList = {
      'Red' : ["ClassWine"],
      'White' : ["ClassWine"],
      'Rosé' : ["ClassWine"],
      'Sparkling' : ["ClassWine"],
      'Champagne' : ["ClassWine"],
    }

    // Red Wine List
    const redList = {
      '19 Crimes (Red Blend)' : ["Red"],
      'Dreaming Tree (Pinot Noir)' : ["Red"],
      'Josh (Cabernet)' : ["Red"],
      'La Crema (Pinot Noir)' : ["Red"],
      'Lindeman\'s (Cabernet)' : ["Red"],
      'Lindeman\'s (Merlot)' : ["Red"],
      'Meiomi (Pinot Noir)' : ["Red"],
      'Sterling (Merlot)' : ["Red"],
      'Terrazas (Malbec)' : ["Red"],
    }

    // White Wine List
    const whiteList = {
      'Beringer (Sauvignon Blanc)' : ["White"],
      'Chateau St. Jean (Chardonnay)' : ["White"],
      'Chloe (Pinot Grigio)' : ["White"],
      'Ferrari-Carano (Sauvignon Blanc)' : ["White"],
      'Kim Crawford (Sauvignon Blanc)' : ["White"],
      'Lindeman\'s (Chardonnay)' : ["White"],
      'Lindeman\'s (Pinot Grigio)' : ["White"],
      'Santa Margherita (Pinot Grigio)' : ["White"],
      'Ruffino (Pinot Grigio)' : ["White"],
      'Sonoma (Chardonnay)' : ["White"],
      'Stags Leap (Chardonnay)' : ["White"]
    }

    // Rosé Wine List
    const roseList = {
      'Hampton Water' : ["Rose"],
    }

    // Sparkling Wine List
    const sparklingList = {
      'Maschino (Prosseco)' : ["Sparkling"],
    }

    // Champagne Wine List
    const champagneList = {
      'Chandon Brut (Split)' : ["Champagne"],
      'Veuve Clicqout (Glass)' : ["Champagne"],
      'Moet Rose Blend (Split)' : ["Champagne"],
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
      'Dos Equis "Lager"' : ["DraftBeer"],              // ------------------- beer pictures are broken fix later
      'Kona "Big Wave"' : ["DraftBeer"],
      'Modelo Especial' : ["DraftBeer"],
      'Pacifico' : ["DraftBeer"],
      'Ankrolab (Turtle Season)' : ["DraftBeer"],
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
    let targetDiv = $("#mainButtonDiv")
    //let targetDiv = document.createElement("div");
    //targetDiv.setAttribute("id", "mainButtonDiv");
    Object.keys(typeList).forEach((type) => {
        let button = document.createElement("button");
        let span = document.createElement("span");
        button.appendChild(span);
        span.innerHTML = type;
        span.setAttribute('class', 'button-text');
        button.setAttribute('class', "main-buttons");
        button.setAttribute('value', type);
        //document.body.append(targetDiv);
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

    // Creates buttons for the different brands of liquor
    function addBrandImage(current) {
      const targetDiv = $("#buttonDiv");
      let imageDiv = document.createElement('div');
      imageDiv.setAttribute("id", "imageDiv")
      let img = document.createElement('img');
      img.setAttribute("id", "image")
      let categoryFirstLetter = current.value.toLowerCase()[0];
      let categoryRestOfLetters = current.value.slice(1).replaceAll(" ", "");
      let category = categoryFirstLetter + categoryRestOfLetters;
      let camelCase = current.id.replaceAll(" ", "");
      img.src = "./images/" + category + camelCase + ".png";
      
      const titleDiv  = document.createElement('div');
      titleDiv.setAttribute("id", "titleDiv")
 
      let titleElement = document.createElement('p');
      titleElement.setAttribute("id", "imageTitle")
      titleElement.innerText = current.id;

      const infoDiv  = document.createElement('div');
      infoDiv.setAttribute("id", "infoDiv")

      let descriptionTitle = document.createElement('h2');
      descriptionTitle.setAttribute("id", "descriptionTitle");
      descriptionTitle.innerText = "Description"
      let descriptionElement = document.createElement('p');
      descriptionElement.setAttribute("id", "brandDescription");
      descriptionElement.innerText = "123 Tequila was founded by agave cultivator and distiller David Ravandi, and emphasizes a distinctly artisanal approach. From the hand-blown recycled glass bottles to the soy ink-printed labels that showcase local artists’ wood carving, the focus is firmly on sustainability, conservation, and regional expression. 123 Blanco is certified organic tequila from the lowlands of Jalisco, sourced from plantations northeast of Guadalajara where synthetic fertilizers and pesticides are prohibited. Ten year old blue agaves are farmed and harvested without large scale mechanical equipment to minimize soil and water impacts, then cooked for two days in traditional stone ovens, and double-distilled in small batches. The result is a beautifully balanced showcase of classic lowland tequila character, full of mineral and spice notes accompanied by citrusy, floral, and herbaceous tones. Delicious sipped by itself or with lime! Certified organic.";
      // automate above ^^^^^^^^


      targetDiv.append(imageDiv);
      imageDiv.append(img);
      targetDiv.append(titleDiv);
      titleDiv.append(titleElement);
      targetDiv.append(infoDiv);
      infoDiv.append(descriptionTitle);
      infoDiv.append(descriptionElement);
      //console.log(img.src);
}

    // Loads Classes
    function loadClasses(current) {
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

          /*
          if(button.id === "Single Malt & Blended"){
            button.setAttribute('id', 'SingleMaltBlended');
            console.log(button.id)
          }
          */

          if(button.id === "Flavored Whiskey"){
            button.setAttribute('id', 'FlavoredWhiskey');
            console.log(button.id)
          }
      });
}


/*
function backButtons(){
  let backButtons = document.createElement("button");
  backButtons.setAttribute("class", "back-button")
  document.body.append(backButtons);
}
 */   


    // Initialization---------------------------------------------------------
    loadTypes();
    // Tequilas-----------------------
    loadClasses(tequilaClassList)
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
    loadClasses(whiskeyClassList);
    loadBrands(bourbonList);
    loadBrands(canadianList);
    loadBrands(irishList);
    loadBrands(mexicanList);
    loadBrands(ryeList);
    loadBrands(scotchList);
    loadBrands(singleMaltBlendedList);
    loadBrands(tennesseeList);
    loadBrands(flavoredWhiskeyList);
    // Rum----------------------------
    loadBrands(rumList);
    // Gin----------------------------
    loadBrands(ginList);
    // Brandy-------------------------
    loadBrands(brandyList);
    // Cordials-----------------------
    loadBrands(cordialsList);
    // Wine---------------------------
    loadClasses(wineClassList);
    loadBrands(redList);
    loadBrands(whiteList);
    loadBrands(roseList);
    loadBrands(sparklingList);
    loadBrands(champagneList)
    // Beer---------------------------
    loadClasses(beerClassList);
    loadBrands(draftBeerList);
    loadBrands(bottleBeerList);
    // Jarritos-----------------------
    loadBrands(jarritosList);
    // Initial Hidden Items  ---------
    $(".back-button").hide();
    $("#backButtonToMain").hide();
    $(".brand-buttons").hide();
    $(".brand-buttons").hide();
    $("#buttonDiv").hide();
    //$("#tequilaClassDiv").hide();
    // -----------------------------------------------------------------------



    // Repetative Hide Function
    function hide(){
      $("#mainButtonDiv").hide();
      $(".main-buttons").hide();
      $(".brand-buttons").hide();
      $("#backButtonToMain").show();
      $("#buttonDiv").show();
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
      $(".back-button").show();
    });

    // Blanco Button Actions
    $(".brand-buttons[value|='Blanco'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").show();
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

    // Vodka Button Actions
    $(".brand-buttons[value|='Vodka'").on('click', function(){
      hide();
      addBrandImage(this);
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

    // Show Mexican Buttons
    $("#Mexican").on('click', function(){
      hide();
      $(".brand-buttons[value|='Mexican'").show();
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

    // Tennessee Button Actions
    $(".brand-buttons[value|='Tennessee'").on('click', function(){
      hide();
      addBrandImage(this);
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

    // Rum Button Actions
    $(".brand-buttons[value|='Rum'").on('click', function(){
      hide();
      addBrandImage(this);
  });

    // Show Gin Buttons
    $(".main-buttons[value|='Gin'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Gin'").show();
    });

    // Gin Button Actions
    $(".brand-buttons[value|='Gin'").on('click', function(){
      hide();
      addBrandImage(this);
  });

    // Show Brandy Buttons
    $(".main-buttons[value|='Brandy'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Brandy'").show();
    });

    // Brandy Button Actions
    $(".brand-buttons[value|='Brandy'").on('click', function(){
      hide();
      addBrandImage(this);
  });

    // Show Cordials Buttons
    $(".main-buttons[value|='Cordials'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Cordials'").show();
    });

    // Show Wine Class Buttons
    $(".main-buttons[value|='Wine'").on('click', function(){
      hide();
      $(".brand-buttons[value|='ClassWine'").show();
    });

    // Show Red Wine Buttons
    $("#Red").on('click', function(){
      hide();
      $(".brand-buttons[value|='Red'").show();
    });

    // Show White Wine Buttons
    $("#White").on('click', function(){
      hide();
      $(".brand-buttons[value|='White'").show();
    });

    // Show Rose Wine Buttons
    $("#Rosé").on('click', function(){
      hide();
      $(".brand-buttons[value|='Rose'").show();
    });

    // Show Sparkling Wine Buttons
    $("#Sparkling").on('click', function(){
      hide();
      $(".brand-buttons[value|='Sparkling'").show();
    });

    // Show Champagne Wine Buttons
    $("#Champagne").on('click', function(){
      hide();
      $(".brand-buttons[value|='Champagne'").show();
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

    // Draft Button Actions
    $(".brand-buttons[value|='Draft'").on('click', function(){
      hide();
      addBrandImage(this);
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

    // Jarritos Button Actions
    $(".brand-buttons[value|='Jarritos'").on('click', function(){
      hide();
      addBrandImage(this);
    });

    // Back Button To Main Screen
    $("#backButtonToMain").on('click', function(){
      $("#buttonDiv").hide();
      $(".brand-buttons").hide();
      $(".back-button").hide();
      $("#backButtonToMain").hide();
      $("#titleDiv").remove();
      $("#image").remove();
      $("#imageDiv").remove();
      $("#infoDiv").remove();

      $("#mainButtonDiv").show();
      $(".main-buttons").show();
    });


  });