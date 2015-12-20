var request = require('request');
//in terminal where this file is stored:
//npm install request

//cheerio to transverse through body of response
var cheerio = require('cheerio');

// in terminal where this file is stored:
//npm install cheerio

request('http://www.universityherald.com/articles/5544/20131113/top-10-colleges-that-produce-the-most-u-s-presidents-and-vice-presidents.htm', function (error, response, html) {
	//console.log(html)

	//load cheerio
	var $ = cheerio.load(html);

	var title = $('h1').text();

	var paragraphs = $('p');

	debugger;

	for(var i = 0; i < paragraphs.length; i++){
		console.log(paragraphs.eq(i).text());
	}

	console.log(title);


});

//in terminal where this file is stored:
//node <filename.js>