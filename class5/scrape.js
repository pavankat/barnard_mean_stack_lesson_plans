//DB: spiritAnimals

//data scrape

//request for http call
var request = require('request');

//cheerio to transverse through body of response
var cheerio = require('cheerio');

// Database Config to use mongodb and monk module
// telling where the db lives and which database to use
  var mongo = require('mongodb');
  var monk = require('monk');
  var db = monk('localhost:27017/spiritAnimals');

//fn to determine if response is JSON
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

//this function sets up initial tables that 
function setUp(){

  western_signs = ["Aquarius", "Aries", "Cancer", "Capricorn", "Gemini", "Leo", "Libra", "Pisces", "Sagittarius", "Scorpio", "Taurus", "Virgo"];

  eastern_signs = ["Dog", "Dragon", "Horse", "Monkey", "Ox", "Pig", "Rabbit", "Rat", "Rooster", "Sheep", "Snake", "Tiger"];

  var westerns = db.get('westerns'); //let's you grab a collection
  var easterns = db.get('easterns'); //let's you grab a collection

  for(var i = 0; i < western_signs.length; i++){
    westerns.insert({'name': western_signs[i]});
  }

  for(var i = 0; i < eastern_signs.length; i++){
    easterns.insert({'name': eastern_signs[i]})
  }

}

//setUp(); //only run this initially


//fn to insert name/url into spirit_animal tables
function insertSpiritAnimal(obj){
  var spiritAnimals = db.get('spiritAnimals'); //let's you grab a collection
  spiritAnimals.insert({name: obj.name , url: obj.url });
}

function insertWesternEasterns(obj){
  var wes = db.get('western_eastern_spiritanimals'); //let's you grab a collection
  wes.insert(obj);
}


request('http://www.primalastrology.com/primal-zodiac-by-combination.html', function (error, response, html) {
  if (!error && response.statusCode == 200) {

    var $ = cheerio.load(html);

    console.log('cheerio loaded')

    var table = $('table');

      var trs = table.find('tr');

      console.log(trs.length)

      var westerns_easterns = [];
      var spirit_animal_urls = [];

      for(var i=1; i < trs.length; i++){
        var tds = trs.eq(i).find('td');

        //grabs row data
        var western_sign = tds.eq(0).text();
        var eastern_sign = tds.eq(2).text();
        var primal_zodiac_sign = tds.eq(4).text();

        //variables contained above are being assigned keys in object
        var we = {'western_sign': western_sign, 'eastern_sign': eastern_sign, 'primal_zodiac_sign': primal_zodiac_sign};

        //objects being pushed into western_easterns array
        westerns_easterns.push(we);

        //console.log(we);

        //taking the names and url
        obj = {};
        //creating name key {name : primal_zodiac_sign} ex. {name : whale}
        obj['name'] = primal_zodiac_sign;
        //creating url key {url : www.blah.com} ex. {name : www.blah.com/whale}
        obj['url'] = tds.eq(4).children('a').eq(0).attr('href');

        //console.log(obj)

        //objects being pushed into spirit_animals_urls
        spirit_animal_urls.push(obj)

      }

      //loop over arrays created and call functions created
      //function calls perform SQL inserts
      for (var i = 0; i < spirit_animal_urls.length; i++){
        insertSpiritAnimal(spirit_animal_urls[i]);
      }

      //console.log(westerns_easterns);

      for (var i = 0; i < westerns_easterns.length; i++){
        insertWesternEasterns(westerns_easterns[i])
      }
  }
});


