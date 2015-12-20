//DB: random_things


// Database Config to use mongodb and monk module
// telling where the db lives and which database to use
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/randomThings');

var giftIdeas = db.get('gift_ideas'); //let's you grab a collection

// giftIdeas.insert({'name': 'lobster mac and cheese', 'url': 'http://www.hancockgourmetlobster.com/product/Lobster_Mac_and_Cheese/Mac_and_Cheese', 'for': 'gf'}); //let's you insert into a collection

// giftIdeas.insert({'name': 'll bean fleece', 'url': 'http://www.hancockgourmetlobster.com/product/Lobster_Mac_and_Cheese/Mac_and_Cheese', 'for': 'dad' }); //let's you insert into a collection

// giftIdeas.insert({'name': 'll bean fleece', 'url': 'http://www.hancockgourmetlobster.com/product/Lobster_Mac_and_Cheese/Mac_and_Cheese', 'for': 'mom' }); //let's you insert into a collection

// giftIdeas.remove({ for : 'mom'}); //delete a record in the collection


//giftIdeas.findAndModify({_id: '564d09c1ad7994a5c4020ca2'}, {'url' : 'http://www.chairs.com'});

giftIdeas.findAndModify({ name: 'll bean fleece'}, {'url':'www.google.com'})













