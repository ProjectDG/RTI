class BrandInfo{
  constructor(name, basicInfo = [], tastingNotes = [], similarBrands = [], description, type){
   this.name = name;
   this.basicInfo = basicInfo;
   this.tastingNotes = tastingNotes;
   this.similarBrands = similarBrands;    //  maybe make a similar taste and simialr production section
   this.description = description;
   this.type = type
;  };
 };


 
// Brand Info-----------------------------------------------------------------------------------------------------------------------------------------------------
// Tequilas -----------------------------------------------------------------------------------
//Blanco----------------------------------------
  let tequila123 = new BrandInfo(
    // Name 
    "123",
    // Basic Info
    [
      "Organic blanco great for purists looking for bright bursts of green agave, spice, and citrus peel with an almost oily mouthfeel 96 point rating from Tasting Panel Magazine Created by Master Distiller David Ravandi",
      "80 proof / 40% ABV",
      "NOM: 1480 / Tequila Las Americas / Amatitan, Jalisco"
    ],
    // Tasting Notes
    [
      'Aroma: cooked agave, cracked pepper, ripe fruits',
      'Palate: both green and cooked agave, lemon, black pepper, spice',
      'Finish: Lasting oiliness with dry spikes of spice'
    ],
     // Similar Brands
    [
      'Coming Soon...'
      /*
      "Don Julio Blanco",
      "Tequila Ocho Blanco",
      "Casa Dragones Blanco",
      "Siete Leguas Blanco",
      "El Jimador Blanco",
      "Espolon Blanco",
      "Casamigos Blanco",
      "Espolon Blanco",
      "Olmeca Altos Blanco",
      "Avión Añejo",
      "Casa Noble Blanco",
      "Cazadores Reposado",
      "Clase Azul Blanco",
      "El Tesoro Blanco",
      "Inspiro Tequila Luna Blanco",
      "Jose Cuervo Tradicional",
      "Chamucos Reposado",
      "Hornitos Plata"
      */
    ],
    // Description
    "123 Tequila was founded by agave cultivator and distiller David Ravandi, and emphasizes a distinctly artisanal approach. From the hand-blown recycled glass bottles to the soy ink-printed labels that showcase local artists’ wood carving, the focus is firmly on sustainability, conservation, and regional expression. 123 Blanco is certified organic tequila from the lowlands of Jalisco, sourced from plantations northeast of Guadalajara where synthetic fertilizers and pesticides are prohibited. Ten year old blue agaves are farmed and harvested without large scale mechanical equipment to minimize soil and water impacts, then cooked for two days in traditional stone ovens, and double-distilled in small batches. The result is a beautifully balanced showcase of classic lowland tequila character, full of mineral and spice notes accompanied by citrusy, floral, and herbaceous tones. Delicious sipped by itself or with lime! Certified organic.",
    // Type
    "Blanco"
    );
  
  let tequila1800 = new BrandInfo(
    // Name 
    "1800",
    // Basic Info
    [
    "Clean, delicate, balanced, smooth. Soft, sweet, floral, fruit, agave. Medium finish. Rested in mostly American oak, with a small portion of French oak for up to 15 days.",
    "80 proof / 40% ABV",
    "DISTILLATION:	2x distilled",
    "COOKING:	Autoclave (high pressure)",
    "NOM: 1122 / Jalisco (Los Valles)"
    ],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Made from 100% Weber blue agave and double-distilled, 1800 Blanco is a special selection of white tequilas blended together for added complexity and character. The clean, balanced taste with hints of sweet fruit and pepper is perfect sipped neat, on the rocks, as a shot or in a cocktail.",
    // Type
    "Blanco"
    );

    let tequila4Copas = new BrandInfo(
      // Name 
      "4 Copas",
      // Basic Info
      null,
      // Tasting Notes
      null,
      // Similar Brands
      null,
      // Description
      "", 
      // Type
      "Blanco"
    );

    let tequilaAdictivo = new BrandInfo(
      // Name 
      "Adictivo",
      // Basic Info
      [
        "Mexico- Tequila Adictivo Plata is a 100% pure Blue Agave, Crystal Bright Color with a soft warm flavor and herbaceous aromas. Awarded Silver Medal & Double Gold San Diego Spirits Festival 2017, Bronze Medal San Diego Spirits Festival 2018, Gold & Best In Show World Spirit Competition.",
        "80 proof / 40% ABV",
        "NOM #1560 / El Arenal, Jalisco"
      ],
      // Tasting Notes
      [
        'Nose: Herbaceous, slightly sweet with hints of vanilla',
        'Taste: Cooked agave, vanilla, white pepper',
        'Finish: Soft, warm, full body'
      ],
      // Similar Brands
      ["Coming Soon..."],
      // Description
      "Made from 100% pure Blue Agave, Adictivo Tequila is made by Gildardo Partida who comes from a family that has been dedicated to the art of making tequila for over 100 years. The Partida family, based in El Arenal, is the spirit behind not only Adictivo but well loved brands like Cava de Oro and Gran Reserva de Don Alberto.", 
      // Type
      "Blanco"
    );



  // Vodka-------------------------------------------------------------------------------------
  let vodkaBelvedere = new BrandInfo(
    // Name 
    "Belvedere",
    // Basic Info
    null,
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    null,
    // Type
    "Vodka"
  );

  let vodkaFinlandia = new BrandInfo(
    // Name 
    "Finlandia",
    // Basic Info
    null,
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    null, 
    // Type
    "Vodka"
  );


  
// Whiskey -------------------------------------------------------------------------------------
// Bourbon --------------------------------------
let bourbonJimBeam = new BrandInfo(
  // Name 
  "Jim Beam",
  // Basic Info
  ["Kentucky- The world's number one bourbon. Jim Beam was founded in 1795 and has been operated by one family for seven generations. We've always created bourbon our way, aging it twice as long as the law requires.", 
  "Jim Beam is produced from the fermentation and distillation of corn, rye, and malted barley.", 
  "80 proof / 40% ABV"],
  // Tasting Notes
  ["Rich, Vanilla, Oak, Cinnamon, Balanced"],
  // Similar Brands
  null,
  // Description
  "Jim Beam is an American brand of bourbon whiskey produced in Clermont, Kentucky, by Beam Suntory. It is one of the best-selling brands of bourbon in the world. Since 1795 (interrupted by Prohibition), seven generations of the Beam family have been involved in whiskey production for the company that produces the brand.", 
  // Type
  "Bourbon"
);




// Jarritos ------------------------------------------------------------------------------------
  let jarritosFruitPunch = new BrandInfo(
    // Name 
    "Fruit Punch",
    // Basic Info
    ["This soda features a lightly carbonated fizz, mild fruity aroma, and a sweet, candied fruit taste that combines notes of cherry, strawberry, and citrus flavors. It is made with real fruit flavors, real cane sugar, and is never made with high fructose corn syrup to deliver a clean, non-syrupy sweetness."],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Jarritos is made in fruit flavors and is less carbonated than popular soft drinks. It is made in Mexico. Many Jarritos varieties are naturally flavored. The word jarrito means\"little jug\" in Spanish and refers to the Mexican tradition of drinking water and other drinks in clay pottery jugs.", 
    // Type
    "Jarritos"
  );

  let jarritosGrapefruit = new BrandInfo(
    // Name 
    "Grapefruit",
    // Basic Info
    ["This naturally-flavored soda features a lightly carbonated fizz, and a true grapefruit aroma with a perfectly balanced tart and sweet flavor. It is made with real fruit flavors, real cane sugar, and is never made with high fructose corn syrup to deliver a clean, non-syrupy sweetness."],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Jarritos is made in fruit flavors and is less carbonated than popular soft drinks. It is made in Mexico. Many Jarritos varieties are naturally flavored. The word jarrito means\"little jug\" in Spanish and refers to the Mexican tradition of drinking water and other drinks in clay pottery jugs.", 
    // Type
    "Jarritos"
  );

  let jarritosGuava = new BrandInfo(
    // Name 
    "Guava",
    // Basic Info
    ["This naturally-flavored soda features a lightly carbonated fizz, mild tropical fruit aroma, and a subtly sweet, refreshing guava taste with notes of passion fruit. It is made with real fruit flavors, real cane sugar, and is never made with high fructose corn syrup to deliver a clean, non-syrupy sweetness."],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Jarritos is made in fruit flavors and is less carbonated than popular soft drinks. It is made in Mexico. Many Jarritos varieties are naturally flavored. The word jarrito means\"little jug\" in Spanish and refers to the Mexican tradition of drinking water and other drinks in clay pottery jugs.", 
    // Type
    "Jarritos"
  );

  let jarritosLime = new BrandInfo(
    // Name 
    "Lime",
    // Basic Info
    ["Jarritos Natural Lime soda is one of Mexico's premier sodas, and its popularity has extended well past the country's borders due to its refreshing flavor and use of actual sugar. This comes at a time when so many companies are using high-fructose corn syrup in their sodas."],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Jarritos is made in fruit flavors and is less carbonated than popular soft drinks. It is made in Mexico. Many Jarritos varieties are naturally flavored. The word jarrito means\"little jug\" in Spanish and refers to the Mexican tradition of drinking water and other drinks in clay pottery jugs.", 
    // Type
    "Jarritos"
  );

  let jarritosMandarin = new BrandInfo(
    // Name 
    "Mandarin",
    // Basic Info
    ["Jarritos Mandarin is a delicious and refreshing soda that has a unique and authentic flavor. The mandarin orange taste is prominent and not too sweet, making it a great option for those looking for a tasty alternative to traditional cola drinks."],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Jarritos is made in fruit flavors and is less carbonated than popular soft drinks. It is made in Mexico. Many Jarritos varieties are naturally flavored. The word jarrito means\"little jug\" in Spanish and refers to the Mexican tradition of drinking water and other drinks in clay pottery jugs.", 
    // Type
    "Jarritos"
  );

  let jarritosMango = new BrandInfo(
    // Name 
    "Mango",
    // Basic Info
    ["This soda features a lightly carbonated fizz, ripe, tropical aroma, and a sweet mango flavor. It is made with real fruit flavors, real cane sugar, and is never made with high fructose corn syrup to deliver a clean, non-syrupy sweetness. Plus, it is naturally caffeine-free."],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Jarritos is made in fruit flavors and is less carbonated than popular soft drinks. It is made in Mexico. Many Jarritos varieties are naturally flavored. The word jarrito means\"little jug\" in Spanish and refers to the Mexican tradition of drinking water and other drinks in clay pottery jugs.", 
    // Type
    "Jarritos"
  );

  let jarritosPineapple = new BrandInfo(
    // Name 
    "Pineapple",
    // Basic Info
    ["Super Good Since 1950. Enjoy the exceptional summery flavor and juiciness of pineapple. Made with 100% real sugar and a whole lot of tropical awesomeness. Try it today, just open a bottle and with each sip discover why Jarritos is the Authentic Mexican Soda Pop."],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Jarritos is made in fruit flavors and is less carbonated than popular soft drinks. It is made in Mexico. Many Jarritos varieties are naturally flavored. The word jarrito means\"little jug\" in Spanish and refers to the Mexican tradition of drinking water and other drinks in clay pottery jugs.", 
    // Type
    "Jarritos"
  );

  let jarritosTamarind = new BrandInfo(
    // Name 
    "Tamarind",
    // Basic Info
    ["This naturally-flavored soda features a lightly carbonated fizz and a refreshingly sweet, mild tamarind flavor with notes of caramel and bitter orange. It is made with real fruit flavors, real cane sugar, and is never made with high fructose corn syrup to deliver a clean, non-syrupy sweetness."],
    // Tasting Notes
    null,
    // Similar Brands
    null,
    // Description
    "Jarritos is made in fruit flavors and is less carbonated than popular soft drinks. It is made in Mexico. Many Jarritos varieties are naturally flavored. The word jarrito means\"little jug\" in Spanish and refers to the Mexican tradition of drinking water and other drinks in clay pottery jugs.", 
    // Type
    "Jarritos"
  );






/*  Brand Info Template---------------------------------
  let template = new BrandInfo(
    // Name 
    "",
    // Basic Info
    [],
    // Tasting Notes
    [],
    // Similar Brands
    [],
    // Description
    "", 
    // Type
    ""
  );
*/







// Brands Array For Matching-----------------------------------------------------------------------------------
  let brands = [
    tequila123,
    tequila1800,
    tequila4Copas,
    tequilaAdictivo,
    vodkaBelvedere,
    vodkaFinlandia,
    bourbonJimBeam,
    jarritosFruitPunch,
    jarritosGrapefruit,
    jarritosGuava,
    jarritosLime,
    jarritosMandarin,
    jarritosMango,
    jarritosPineapple,
    jarritosTamarind
   ]; // end of brands array


//console.log(brands);
  


   









// Start of JQuery --------------------------------------------------------------------------------------------------
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
      '123' : ["Blanco"],
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
      'Hennessy' : ["Brandy"],
      'LouisXIII' : ["Brandy"],
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
      'St Germain Elderflower' : ["Cordials"],
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
      'Bone Hook "Wicked Seas"' : ["BottleBeer"],
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
    let targetDiv = $("#mainButtonDiv");
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

            if(button.id === "Hennessy"){
              span.innerText = "Hennessy (Cognac)";
            }
      
            if(button.id === "LouisXIII"){
              span.innerText = "Louis XIII (Cognac)";
            }
        });
}

    // Creates buttons for the different brands of liquor
    function addBrandImage(current) {
      let typeTitleDiv = $("#typeTitleDiv");
      let typeTitle = document.createElement('p');
      typeTitle.setAttribute("id", "typeTitle")
      typeTitle.setAttribute("class", "all-info")
      typeTitle.innerText = current.value;
      typeTitleDiv.append(typeTitle);
      $("#typeTitleDiv").show();
      console.log(typeTitle.innerText);

      // Puts a space in the typeTitle
      if(current.value === "FlavoredWhiskey"){
        typeTitle.innerText = "Flavored Whiskey";
      }

      // Accesses the div the image and description will be put in-----------------------------------------------------
      const targetDiv = $("#infoContainer");

      // Creates the image and specific div for it. Also assigns I.D.s-------------------------------------------------
      let imageDiv = document.createElement('div');
      imageDiv.setAttribute("id", "imageDiv");
      imageDiv.setAttribute("class", "all-info");
      let img = document.createElement('img');
      img.setAttribute("id", "image");
      img.setAttribute("class", "all-info");

      // Breaks down the "current" argument so it can be used to search for the image file.----------------------------
      let categoryFirstLetter = current.value.toLowerCase()[0];
      let categoryRestOfLetters = current.value.slice(1).replaceAll(" ", "");
      let category = categoryFirstLetter + categoryRestOfLetters;
      let preCamelCase = current.id.replaceAll(":", "");
      let camelCase = preCamelCase.replaceAll(" ", "");

      // Uses Breakdown to search for specific image.
      img.src = "./images/" + category + camelCase + ".png";
      
      // Creates a div for the brand name or "title" and assigns an I.D.-----------------------------------------------
      const titleDiv  = document.createElement('div');
      titleDiv.setAttribute("id", "titleDiv");
      titleDiv.setAttribute("class", "all-info");
 
      // Creates a <p> element for the "title" and assigns an I.D. Then uses the "current"-----------------------------
      // argument to set the "title"
      let titleElement = document.createElement('p');
      titleElement.setAttribute("id", "imageTitle");
      titleElement.setAttribute("class", "all-info");
      titleElement.innerText = current.id;

      if(current.id === "Hennessy"){
        titleElement.innerText = "Hennessy (Cognac)";
      }

      if(current.id === "LouisXIII"){
        titleElement.innerText = "Louis XIII (Cognac)";
      }

      console.log(current.id)

      // Creates a div where the brand information will be stored and assigns an I.D.----------------------------------
      const infoDiv  = document.createElement('div');
      infoDiv.setAttribute("id", "infoDiv");
      infoDiv.setAttribute("class", "all-info");

      

      // Creates sections and contents for them------------------------------------------------------------------------
      // Creates + / - signs for collapsing similar brands elements
      let plusSimilarBrands = document.createElement('p');
      plusSimilarBrands.setAttribute("id", "plusSimilarBrands");
      plusSimilarBrands.setAttribute("class", "plus-minus all-info");
      plusSimilarBrands.innerText = "+";
      let minusSimilarBrands = document.createElement('p');
      minusSimilarBrands.setAttribute("id", "minusSimilarBrands");
      minusSimilarBrands.setAttribute("class", "plus-minus all-info");
      minusSimilarBrands.innerText = "-";

      // "Tasting Notes Section"------------------------------------------------
      let similarBrandsTitle = document.createElement('h2');
      similarBrandsTitle.setAttribute("id", "similarBrandsTitle");
      similarBrandsTitle.setAttribute("class", "section-titles similar-brands-title all-info");
      similarBrandsTitle.innerText = "Similar Brands";
      similarBrandsTitle.appendChild(plusSimilarBrands);
      similarBrandsTitle.appendChild(minusSimilarBrands);
      let similarBrandsElement = document.createElement('p');
      similarBrandsElement.setAttribute("id", "similarBrandsInfo");
      similarBrandsElement.setAttribute("class", "section-info similar-brands-info all-info");

      // Creates + / - signs for collapsing basic info elements
      let plusBasicInfo = document.createElement('p');
      plusBasicInfo.setAttribute("id", "plusBasicInfo")
      plusBasicInfo.setAttribute("class", "plus-minus all-info")
      plusBasicInfo.innerText = "+";
      let minusBasicInfo = document.createElement('p');
      minusBasicInfo.setAttribute("id", "minusBasicInfo")
      minusBasicInfo.setAttribute("class", "plus-minus all-info");
      minusBasicInfo.innerText = "-";

      // "Tasting Notes Section"------------------------------------------------
      let basicInfoTitle = document.createElement('h2');
      basicInfoTitle.setAttribute("id", "basicInfoTitle");
      basicInfoTitle.setAttribute("class", "section-titles basic-info-title all-info");
      basicInfoTitle.innerText = "Basic Info";
      basicInfoTitle.appendChild(plusBasicInfo);
      basicInfoTitle.appendChild(minusBasicInfo);
      let basicInfoElement = document.createElement('p');
      basicInfoElement.setAttribute("id", "basicInfoInfo");
      basicInfoElement.setAttribute("class", "section-info basic-info-info all-info");

      // Creates + / - signs for collapsing tasting notes elements
      let plusTastingNotes = document.createElement('p');
      plusTastingNotes.setAttribute("id", "plusTastingNotes")
      plusTastingNotes.setAttribute("class", "plus-minus all-info")
      plusTastingNotes.innerText = "+";
      let minusTastingNotes = document.createElement('p');
      minusTastingNotes.setAttribute("id", "minusTastingNotes")
      minusTastingNotes.setAttribute("class", "plus-minus all-info");
      minusTastingNotes.innerText = "-";

      // "Tasting Notes Section"------------------------------------------------
      let tastingNotesTitle = document.createElement('h2');
      tastingNotesTitle.setAttribute("id", "tastingNotesTitle");
      tastingNotesTitle.setAttribute("class", "section-titles tasting-notes-title all-info");
      tastingNotesTitle.innerText = "Tasting Notes";
      tastingNotesTitle.appendChild(plusTastingNotes);
      tastingNotesTitle.appendChild(minusTastingNotes);
      let tastingNotesElement = document.createElement('p');
      tastingNotesElement.setAttribute("id", "tastingNotesInfo");
      tastingNotesElement.setAttribute("class", "section-info tasting-notes-info all-info");

      // Creates + / - signs for collapsing description elements-------------------------------------------------------
      let plusDescription = document.createElement('p');
      plusDescription.setAttribute("id", "plusDescription")
      plusDescription.setAttribute("class", "plus-minus all-info")
      plusDescription.innerText = "+";
      let minusDescription = document.createElement('p');
      minusDescription.setAttribute("id", "minusDescription")
      minusDescription.setAttribute("class", "plus-minus all-info")
      minusDescription.innerText = "-";

      // "Description Section"---------------------------------------------------
      let descriptionTitle = document.createElement('h2');
      descriptionTitle.setAttribute("id", "descriptionTitle");
      descriptionTitle.setAttribute("class", "section-titles description-title all-info");
      descriptionTitle.innerText = "About the Brand";
      descriptionTitle.appendChild(plusDescription);
      descriptionTitle.appendChild(minusDescription);
      let descriptionElement = document.createElement('p');
      descriptionElement.setAttribute("id", "brandDescription");
      descriptionElement.setAttribute("class", "section-info description-info all-info");
      
      

      // Assembles the Brand Info Section------------------------------------------------------------------------------
      // Image and div
      targetDiv.append(imageDiv);
      imageDiv.append(img);
      // Title and div
      targetDiv.append(titleDiv);
      titleDiv.append(titleElement);
      // Info div
      targetDiv.append(infoDiv);
      // Basic Info Section
      infoDiv.append(basicInfoTitle);
      infoDiv.append(basicInfoElement);
      // Tasting Notes Section
      infoDiv.append(tastingNotesTitle);
      infoDiv.append(tastingNotesElement);
      // Similar Brands Section
      infoDiv.append(similarBrandsTitle);
      infoDiv.append(similarBrandsElement);
      // Description Section
      infoDiv.append(descriptionTitle);
      infoDiv.append(descriptionElement);
      

      // Start of function for brand info-----------------------------------------------------------------------------
      let imgTitle = $("#imageTitle").text();
      let title = $("#typeTitle").text();
      //console.log(title);

      // Brand Info Function
      brands.map(x => {
        if(x["name"] === imgTitle && x["type"] === title){

          // Basic Info
          if(x.basicInfo !== null){
            x.basicInfo.map(i => {
              //console.log(i);
              let p = document.createElement('p');
              p.append(i);
              basicInfoElement.append(p);
            })
          } else {
            $("#basicInfoTitle").remove();
            $("#basicInfoElement").remove();
          }


          // Tasting Notes
          if(x.tastingNotes !== null){
            x.tastingNotes.map(i => {
              //console.log(i);
              let p = document.createElement('p');
              p.append(i);
              tastingNotesElement.append(p);
            })
          } else {
            $("#tastingNotesTitle").remove();
            $("#tastingNotesElement").remove();
          }

          // Similar Brands
          if(x.similarBrands !== null){
            x.similarBrands.map(i => {
              //console.log(i);
              let p = document.createElement('p');
              p.append(i);
              similarBrandsElement.append(p);
            })
          } else {
            $("#similarBrandsTitle").remove();
            $("#similarBrandsElement").remove();
          }

          // Description
          if(x.description !== null){
            descriptionElement.innerText = x.description;
          } else {
            $("#descriptionTitle").remove();
            $("#brandDescription").remove();
          }


          //console.log(x);
        }
      });

      // Plus / Minus for dropdown menu-------------------------------------------------------------------------------
      $(".basic-info-title").on("click", function(){
        $(".basic-info-info").toggle();
        $("#minusBasicInfo").toggle();
        $("#plusBasicInfo").toggle();
      });

      $(".tasting-notes-title").on("click", function(){
        $(".tasting-notes-info").toggle();
        $("#minusTastingNotes").toggle();
        $("#plusTastingNotes").toggle();
      });

      $(".similar-brands-title").on("click", function(){
        $(".similar-brands-info").toggle();
        $("#minusSimilarBrands").toggle();
        $("#plusSimilarBrands").toggle();
      });

      $(".description-title").on("click", function(){
        $(".description-info").toggle();
        $("#minusDescription").toggle();
        $("#plusDescription").toggle();
      });

      

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
            //console.log(button.id)
          }
      });
}



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
    $("#typeTitleDiv").hide();
    $("#infoContainer").hide();


    // Repetative Hide Function ---------------------------------------------------------------------------------------------
    function hide(){
      $("#mainButtonDiv").hide();
      $(".main-buttons").hide();
      $(".brand-buttons").hide();
      $("#backButtonToMain").show();
      $("#buttonDiv").show();
      openFullscreen();
    }
    
    // Tequila --------------------------------------------------------------------------------------------------------------
    // Show Tequila Class Buttons
    $(".main-buttons[value|='Tequila'").on('click', function(){
      hide();
      $(".brand-buttons[value|='ClassTequila'").show();
    });

    // Show Blanco Tequila Buttons
    $("#Blanco").on('click', function(){
      hide();
      $(".brand-buttons[value|='Blanco'").show();
      $("#tequilaClassBackButton").show();
    });

    // Blanco Button Actions
    $(".brand-buttons[value|='Blanco'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#tequilaClassBackButton").hide();
      $("#infoContainer").show();
      $("#tequilaBlancoBackButton").show();
    });

    // Show Reposado Tequila Buttons
    $("#Reposado").on('click', function(){
      hide();
      $(".brand-buttons[value|='Reposado'").show();
      $("#tequilaClassBackButton").show();
    });

    // Reposado Button Actions
    $(".brand-buttons[value|='Reposado'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#tequilaClassBackButton").hide();
      $("#infoContainer").show();
      $("#tequilaReposadoBackButton").show();
    });

    // Show Anejo Tequila Buttons
    $("#Anejo").on('click', function(){
      hide();
      $(".brand-buttons[value|='Anejo'").show();
      $("#tequilaClassBackButton").show();
    });

    // Anejo Button Actions
      $(".brand-buttons[value|='Anejo'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#tequilaClassBackButton").hide();
      $("#infoContainer").show();
      $("#tequilaAnejoBackButton").show();
    });

    // Show Joven Tequila Buttons
    $("#Joven").on('click', function(){
    hide();
    $(".brand-buttons[value|='Joven'").show();
    $("#tequilaClassBackButton").show();
    });

    // Joven Button Actions
    $(".brand-buttons[value|='Joven'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#tequilaClassBackButton").hide();
      $("#infoContainer").show();
      $("#tequilaJovenBackButton").show();
    });

    // Show Select Reserves Tequila Buttons
    $("#Select").on('click', function(){
    hide();
    $(".brand-buttons[value|='Select'").show();
    $("#tequilaClassBackButton").show();
    });

    // Select Button Actions
    $(".brand-buttons[value|='Select'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#tequilaClassBackButton").hide();
      $("#infoContainer").show();
      $("#tequilaSelectBackButton").show();
    });

    // Show Mezcal Buttons
    $("#Mezcal").on('click', function(){
    hide();
    $(".brand-buttons[value|='Mezcal'").show();
    $("#tequilaClassBackButton").show();
    });

    // Mezcal Button Actions
    $(".brand-buttons[value|='Mezcal'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#tequilaClassBackButton").hide();
      $("#infoContainer").show();
      $("#tequilaMezcalBackButton").show();
    });

    // Show Flavored Tequila Buttons
    $("#Flavored").on('click', function(){
      hide();
      $(".brand-buttons[value|='Flavored'").show();
      $("#tequilaClassBackButton").show();
    });

    // Flavored Tequila Button Actions
    $(".brand-buttons[value|='Flavored'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#tequilaClassBackButton").hide();
      $("#infoContainer").show();
      $("#tequilaFlavoredBackButton").show();
    });

    // Vodka --------------------------------------------------------------------------------------------------------------
    // Show Vodka Buttons
    $(".main-buttons[value|='Vodka'").on('click', function(){
  hide();
  $(".brand-buttons[value|='Vodka'").show();
    });

    // Vodka Button Actions
    $(".brand-buttons[value|='Vodka'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#vodkaBackButton").show();
    });
    
  // Whiskey --------------------------------------------------------------------------------------------------------------
    // Show Whiskey Class Buttons
    $(".main-buttons[value|='Whiskey'").on('click', function(){
      hide();
      $(".brand-buttons[value|='ClassWhiskey'").show();
    });

    // Show Bourbon Buttons
    $("#Bourbon").on('click', function(){
      hide();
      $(".brand-buttons[value|='Bourbon'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Bourbon Button Actions
    $(".brand-buttons[value|='Bourbon'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#bourbonBackButton").show();
    });

    // Show Canadian Buttons
    $("#Canadian").on('click', function(){
      hide();
      $(".brand-buttons[value|='Canadian'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Canadian Button Actions
    $(".brand-buttons[value|='Canadian'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#canadianBackButton").show();
    });
    
    // Show Irish Buttons
    $("#Irish").on('click', function(){
      hide();
      $(".brand-buttons[value|='Irish'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Irish Button Actions
    $(".brand-buttons[value|='Irish'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#irishBackButton").show();
    });

    // Show Mexican Buttons
    $("#Mexican").on('click', function(){
      hide();
      $(".brand-buttons[value|='Mexican'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Mexican Button Actions
    $(".brand-buttons[value|='Mexican'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#mexicanBackButton").show();
    });

    // Show Rye Buttons
    $("#Rye").on('click', function(){
      hide();
      $(".brand-buttons[value|='Rye'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Rye Button Actions
    $(".brand-buttons[value|='Rye'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#ryeBackButton").show();
    });

    // Show Scotch Buttons
    $("#Scotch").on('click', function(){
      hide();
      $(".brand-buttons[value|='Scotch'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Scotch Button Actions
    $(".brand-buttons[value|='Scotch'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#scotchBackButton").show();
    });

    // Show Single Malt & Blended Buttons
    $("#SingleMaltBlended").on('click', function(){
      hide();
      $(".brand-buttons[value|='Single Malt & Blended'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Single Malt & Blended Button Actions
    $(".brand-buttons[value|='SingleMaltBlended'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#singleMaltBlendedBackButton").show();
    });

    // Show Tennessee Buttons
    $("#Tennessee").on('click', function(){
      hide();
      $(".brand-buttons[value|='Tennessee'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Tennessee Button Actions
    $(".brand-buttons[value|='Tennessee'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#tennesseeBackButton").show();
    });

    // Show Flavored Whiskey Buttons
    $("#FlavoredWhiskey").on('click', function(){
      hide();
      $(".brand-buttons[value|='FlavoredWhiskey'").show();
      $("#whiskeyClassBackButton").show();
    });

    // Flavored Whiskey Button Actions
    $(".brand-buttons[value|='FlavoredWhiskey'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#whiskeyClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#flavoredWhiskeyBackButton").show();
    });

    // Rum ------------------------------------------------------------------------------------------------------------
    // Show Rum Buttons
    $(".main-buttons[value|='Rum'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Rum'").show();
    });

    // Rum Button Actions
    $(".brand-buttons[value|='Rum'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#rumBackButton").show();
    });

    // Gin -----------------------------------------------------------------------------------------------------------
    // Show Gin Buttons
    $(".main-buttons[value|='Gin'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Gin'").show();
    });

    // Gin Button Actions
    $(".brand-buttons[value|='Gin'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#ginBackButton").show();
    });

    // Brandy -------------------------------------------------------------------------------------------------------
    // Show Brandy Buttons
    $(".main-buttons[value|='Brandy'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Brandy'").show();
    });

    // Brandy Button Actions
    $(".brand-buttons[value|='Brandy'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#brandyBackButton").show();
    });

    // Cordials ----------------------------------------------------------------------------------------------------
    // Show Cordials Buttons
    $(".main-buttons[value|='Cordials'").on('click', function(){
      hide();
      $(".brand-buttons[value|='Cordials'").show();
    });

    // Cordials Button Actions
    $(".brand-buttons[value|='Cordials'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#cordialsBackButton").show();
    });

    // Wine -------------------------------------------------------------------------------------------------------
    // Show Wine Class Buttons
    $(".main-buttons[value|='Wine'").on('click', function(){
      hide();
      $(".brand-buttons[value|='ClassWine'").show();
    });

    // Show Red Wine Buttons ------------------------------------------
    $("#Red").on('click', function(){
      hide();
      $(".brand-buttons[value|='Red'").show();
      $("#wineClassBackButton").show();
    });

    // Red Wine Button Actions
    $(".brand-buttons[value|='Red'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#wineClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#redBackButton").show();
    });

    // Show White Wine Buttons ----------------------------------------
    $("#White").on('click', function(){
      hide();
      $(".brand-buttons[value|='White'").show();
      $("#wineClassBackButton").show();
    });

    // White Wine Button Actions
    $(".brand-buttons[value|='White'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#wineClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#whiteBackButton").show();
    });

    // Show Rose Wine Buttons -----------------------------------------
    $("#Rosé").on('click', function(){
      hide();
      $(".brand-buttons[value|='Rose'").show();
      $("#wineClassBackButton").show();
    });

    // Rose Button Actions
    $(".brand-buttons[value|='Rose'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#wineClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#roseBackButton").show();
    });

    // Show Sparkling Wine Buttons ------------------------------------
    $("#Sparkling").on('click', function(){
      hide();
      $(".brand-buttons[value|='Sparkling'").show();
      $("#wineClassBackButton").show();
    });

    // Sparkling Button Actions
    $(".brand-buttons[value|='Sparkling'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#wineClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#sparklingBackButton").show();
    });

    // Show Champagne Wine Buttons ------------------------------------
    $("#Champagne").on('click', function(){
      hide();
      $(".brand-buttons[value|='Champagne'").show();
      $("#wineClassBackButton").show();
    });

    // Champagne Button Actions
    $(".brand-buttons[value|='Champagne'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#wineClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#champagneBackButton").show();
    });

    // Show Beer Class Buttons -----------------------------------------------------------------------------------
    $(".main-buttons[value|='Beer'").on('click', function(){
      hide();
      $(".brand-buttons[value|='ClassBeer'").show();
    });

    // Show Draft Beer Buttons-----------------------------------------
    $("#Draft").on('click', function(){
      hide();
      $(".brand-buttons[value|='DraftBeer'").show();
      $("#beerClassBackButton").show();
    });

    // Draft Button Actions
    $(".brand-buttons[value|='DraftBeer'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#beerClassBackButton").hide();
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#draftBackButton").show();
  });

  // Show Bottle Beer Buttons-----------------------------------------
  $("#Bottle").on('click', function(){
    hide();
    $(".brand-buttons[value|='BottleBeer'").show();
    $("#beerClassBackButton").show();
  });

  // Bottle Button Actions
  $(".brand-buttons[value|='BottleBeer'").on('click', function(){
    hide();
    addBrandImage(this);
    $("#beerClassBackButton").hide();
    $("#buttonDiv").hide();
    $("#infoContainer").show();
    $("#bottleBackButton").show();
});

    // Show Bottle Beer Buttons----------------------------------------
    $("#Bottle").on('click', function(){
      hide();
      $(".brand-buttons[value|='BottleBeer'").show();
    });

    // Show Jarritos Buttons-------------------------------------------------------------------------------------
    $(".main-buttons[value|='Jarritos'").on('click', function(){
  hide();
  $(".brand-buttons[value|='Jarritos'").show();
    });

    // Jarritos Button Actions
    $(".brand-buttons[value|='Jarritos'").on('click', function(){
      hide();
      addBrandImage(this);
      $("#buttonDiv").hide();
      $("#infoContainer").show();
      $("#jarritosBackButton").show();
    });


    // All Back Buttons ----------------------------------------------------------------------------------------------------------
    // Back Button To Tequila Classes --------------------------------------------------------------------------------------------
    $("#tequilaClassBackButton").on('click', function(){
      // Hide -----------------------------
      $(".brand-buttons").hide();
      $("#tequilaClassBackButton").hide();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='ClassTequila'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Blanco Tequila Brands -----------------------------------------
    $("#tequilaBlancoBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#tequilaBlancoBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#tequilaClassBackButton").show();
      $(".brand-buttons[value|='Blanco'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Reposado Tequila Brands -----------------------------------------
    $("#tequilaReposadoBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#tequilaReposadoBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#tequilaClassBackButton").show();
      $(".brand-buttons[value|='Reposado'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Anejo Tequila Brands -----------------------------------------
    $("#tequilaAnejoBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#tequilaAnejoBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#tequilaClassBackButton").show();
      $(".brand-buttons[value|='Anejo'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Joven Tequila Brands -----------------------------------------
    $("#tequilaJovenBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#tequilaJovenBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#tequilaClassBackButton").show();
      $(".brand-buttons[value|='Joven'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Mezcal Tequila Brands -----------------------------------------
    $("#tequilaMezcalBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#tequilaMezcalBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#tequilaClassBackButton").show();
      $(".brand-buttons[value|='Mezcal'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Flavored Tequila Brands -----------------------------------------
    $("#tequilaFlavoredBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#tequilaFlavoredBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#tequilaClassBackButton").show();
      $(".brand-buttons[value|='Flavored'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Select Tequila Brands -----------------------------------------
    $("#tequilaSelectBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#tequilaSelectBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#tequilaClassBackButton").show();
      $(".brand-buttons[value|='Select'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Vodka Brands ---------------------------------------------------------------------------------------------
    $("#vodkaBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#vodkaBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='Vodka'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Whiskey Classes ------------------------------------------------------------------------------------------
    $("#whiskeyClassBackButton").on('click', function(){
      // Hide -----------------------------
      $(".brand-buttons").hide();
      $("#whiskeyClassBackButton").hide();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='ClassWhiskey'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Bourbon Brands -----------------------------------------
    $("#bourbonBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#bourbonBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#whiskeyClassBackButton").show();
      $(".brand-buttons[value|='Bourbon'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Canadian Brands ----------------------------------------
    $("#canadianBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#canadianBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#whiskeyClassBackButton").show();
      $(".brand-buttons[value|='Canadian'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Irish Brands -------------------------------------------
    $("#irishBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#irishBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#whiskeyClassBackButton").show();
      $(".brand-buttons[value|='Irish'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Mexican Brands -----------------------------------------
    $("#mexicanBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#mexicanBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#whiskeyClassBackButton").show();
      $(".brand-buttons[value|='Mexican'").show();
      $("#backButtonToMain").show();
    });
    
    // Back Button To Rye Brands ---------------------------------------------
    $("#ryeBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#ryeBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#whiskeyClassBackButton").show();
      $(".brand-buttons[value|='Rye'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Scotch Brands ------------------------------------------
    $("#scotchBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#scotchBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#whiskeyClassBackButton").show();
      $(".brand-buttons[value|='Scotch'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Tennessee Brands ---------------------------------------
    $("#tennesseeBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#tennesseeBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#whiskeyClassBackButton").show();
      $(".brand-buttons[value|='Tennessee'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Flavored Whiskey Brands --------------------------------
    $("#flavoredWhiskeyBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#flavoredWhiskeyBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#whiskeyClassBackButton").show();
      $(".brand-buttons[value|='FlavoredWhiskey'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Rum Brands ----------------------------------------------------------------------------------------------------
    $("#rumBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#rumBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='Rum'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Gin Brands ----------------------------------------------------------------------------------------------------
    $("#ginBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#ginBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='Gin'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To brandy Brands -------------------------------------------------------------------------------------------------
    $("#brandyBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#brandyBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='Brandy'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Cordials Brands -----------------------------------------------------------------------------------------------
    $("#cordialsBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#cordialsBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='Cordials'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Wine Classes --------------------------------------------------------------------------------------------------
    $("#wineClassBackButton").on('click', function(){
      // Hide -----------------------------
      $(".brand-buttons").hide();
      $("#wineClassBackButton").hide();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='ClassWine'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Red Brands -----------------------------------------
    $("#redBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#redBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#wineClassBackButton").show();
      $(".brand-buttons[value|='Red'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To White Brands -----------------------------------------
    $("#whiteBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#whiteBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#wineClassBackButton").show();
      $(".brand-buttons[value|='White'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Rosé Brands -----------------------------------------
    $("#roseBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#roseBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#wineClassBackButton").show();
      $(".brand-buttons[value|='Rose'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Sparkling Brands -----------------------------------------
    $("#sparklingBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#sparklingBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#wineClassBackButton").show();
      $(".brand-buttons[value|='Sparkling'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Champagne Brands -----------------------------------------
    $("#champagneBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#champagneBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#wineClassBackButton").show();
      $(".brand-buttons[value|='Champagne'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Beer Classes --------------------------------------------------------------------------------------------------
    $("#beerClassBackButton").on('click', function(){
      // Hide -----------------------------
      $(".brand-buttons").hide();
      $("#beerClassBackButton").hide();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='ClassBeer'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Draft Brands -----------------------------------------
    $("#draftBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#draftBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#beerClassBackButton").show();
      $(".brand-buttons[value|='DraftBeer'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Draft Brands -----------------------------------------
    $("#bottleBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#bottleBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $("#beerClassBackButton").show();
      $(".brand-buttons[value|='BottleBeer'").show();
      $("#backButtonToMain").show();
    });

    // Back Button To Jarritos Brands -----------------------------------------------------------------------------------------------
    $("#jarritosBackButton").on('click', function(){
      // Hide -----------------------------
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $("#jarritosBackButton").hide();
      $(".all-info").remove();
      
      // Show ------------------------------
      $("#buttonDiv").show();
      $(".brand-buttons[value|='Jarritos'").show();
      $("#backButtonToMain").show();
    });


    // Back to Main Screen-----------------------------------------------------------------------------------------------------------
    $("#backButtonToMain").on('click', function(){
      // Hide -----------------------------
      $("#buttonDiv").hide();
      $("#typeTitleDiv").hide();
      $("#infoContainer").hide();
      $(".brand-buttons").hide();
      $(".back-button").hide();
      $("#backButtonToMain").hide();
      $(".all-info").remove();
      

      // Show ------------------------------
      $("#mainButtonDiv").show();
      $(".main-buttons").show();
    });

  }); // End of JQuery Tag