//'use strict';
var products = require('../products.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('home', products);
};