
//DB: spiritanimals
//Seeded eastern & western table with names of animals already

//data scrape

//request for http call
var request = require('request');

//cheerio to transverse through body of response
var cheerio = require('cheerio');
var pg = require("pg");
var connectionString = "pg://localhost/spiritanimal";

//fn to determine if response is JSON
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

//fn to insert name/url into spirit_animal tables
function insertSpiritAnimal(obj){
  pg.connect(connectionString, function (err, client, done) {
    console.log('inserted Spirit Animal', obj);

    client.query('INSERT INTO spirit_animals (name, url) VALUES ($1, $2)', [obj.name, obj.url], function (err, result) {
      console.log(err);

      done();
  
    });
  });
}

//fn to insert western_easterns
function insertWesternEasterns(obj){
  pg.connect(connectionString, function (err, client, done) {

    client.query('SELECT * FROM western where name = $1', [obj.western_sign], function (err, western) {

      var western_id = western.rows[0].id

      client.query('SELECT * from eastern where name = $1', [obj.eastern_sign], function (errr, eastern) {

        var eastern_id = eastern.rows[0].id;

        client.query('SELECT * from spirit_animals where name = $1', [obj.primal_zodiac_sign], function (errr, spirit) {

          var spirit_animal_id = spirit.rows[0].id;

          client.query('INSERT INTO western_easterns (western_id, eastern_id, spirit_animal_id) VALUES ($1, $2, $3)', [western_id, eastern_id, spirit_animal_id], function (errr, spirit) {
            done();
          });

        });

      });
      
    });
  }); 
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

        console.log(we);

        //taking the names and url
        obj = {};
        //creating name key {name : primal_zodiac_sign} ex. {name : whale}
        obj['name'] = primal_zodiac_sign;
        //creating url key {url : www.blah.com} ex. {name : www.blah.com/whale}
        obj['url'] = tds.eq(4).children('a').eq(0).attr('href');

        console.log(obj)

        //objects being pushed into spirit_animals_urls
        spirit_animal_urls.push(obj)

      }

      //loop over arrays created and call functions created
      //function calls perform SQL inserts
      for (var i = 0; i < spirit_animal_urls.length; i++){
        insertSpiritAnimal(spirit_animal_urls[i]);
      }

      for (var i = 0; i < westerns_easterns.length; i++){
        insertWesternEasterns(westerns_easterns[i])
      }
  }
});