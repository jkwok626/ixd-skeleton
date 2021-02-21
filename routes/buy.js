
/*
 * GET home page.
 */

var buy = require('../buy.json')

exports.view = function(req, res){
  res.render('buy', buy);
};