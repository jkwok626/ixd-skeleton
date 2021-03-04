//'use strict';
var products = require('../products.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('home', products);
};

var score = products.voteScore;

exports.upVote = function(req, res) {
	score.products[0].voteScore++;
	console.log("voteScore: " + score.products[0].voteScore);
}

exports.downVote = function(req, res) {
	score.products[0].voteScore--;
	console.log("voteScore: " + score.products[0].voteScore);
}
/*$(document).ready(function() {
	initializePage();
});*/

/*
 * Function that is called when the document is ready.
 */
/*function initializePage() {
	$('.btn btn-secondary up').click(upScore);
}

var score = products;

function upScore() {
	score.products[0].voteScore++;
	console.log("voteScore: " + score.products[0].voteScore);
}

function downScore() {
	score.products[0].voteScore--;
	console.log("voteScore: " + score.products[0].voteScore);
}*/