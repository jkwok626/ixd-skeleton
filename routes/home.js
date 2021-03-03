var products = require('../products.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('home', products);
};

var score = products;/*$.get('../products.json', callback);require('../products.json');*/

function upScore() {
	score.products[0].voteScore++;
	console.log("voteScore: " + score.products[0].voteScore);
}

function downScore() {
	score.products[0].voteScore--;
	console.log("voteScore: " + score.products[0].voteScore);
}