
/*
 * GET buy page.
 */

var buy = require('../buy.json');

exports.view = function (req, res) {
  var productID = req.params.id;
  var product = getProductData(productID);
  console.log(productID);
  res.render('buy', {
    retailers: buy,
    index: productID
  });
}

function getProductData(productID) {
  productID = parseInt(productID);
  var product = buy[productID - 1]; // of by one, our first product has index 0
  return product;
}