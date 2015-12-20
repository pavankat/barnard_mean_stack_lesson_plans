unfinished_scrape.js

//fn to insert western_easterns
function insertWesternEasterns(obj){

  //grab all the westerns
  var westerns = db.get('westerns');

  //grab all the easterns
  var easterns = db.get('easterns');

  westerns.col.aggregate([],function(err, westernsResult) {
    //console.log( JSON.stringify( westernsResult, undefined, 1 ) );

    easterns.col.aggregate([],function(err, easternsResult) {
      //console.log( JSON.stringify( easternsResult, undefined, 1 ) );

      western_easterns.insert({'western_id': 1, 'eastern_id': 2, 'spirit_animal_id' : 3})

    });

  });

  // pg.connect(connectionString, function (err, client, done) {

  //   client.query('SELECT * FROM western where name = $1', [obj.western_sign], function (err, western) {

  //     var western_id = western.rows[0].id

  //     client.query('SELECT * from eastern where name = $1', [obj.eastern_sign], function (errr, eastern) {

  //       var eastern_id = eastern.rows[0].id;

  //       client.query('SELECT * from spirit_animals where name = $1', [obj.primal_zodiac_sign], function (errr, spirit) {

  //         var spirit_animal_id = spirit.rows[0].id;

  //         client.query('INSERT INTO western_easterns (western_id, eastern_id, spirit_animal_id) VALUES ($1, $2, $3)', [western_id, eastern_id, spirit_animal_id], function (errr, spirit) {
  //           done();
  //         });

  //       });

  //     });
      
  //   });
  // }); 
}

insertWesternEasterns();
 