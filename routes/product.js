// By Elise : Added initialize page and render function
/* If you decide to change the name of this file, 
we have to change the file name in views, the require()
in app.js and the path in app.js as well */

var products = require('../products.json')['products'];

// exports.productInfo = function(req, res) {
//     var productID = req.params.id;
//     var product = getProductData(productID);
//     res.json(product);
// }

exports.view = function(req, res) {
    var productID = req.params.id;
    var product = getProductData(productID);
    res.render('product', product);
}

/*
 * GET home page.
 */
function initializePage() {
    $("#buy").click(function(e) {
        // line below not working
		$("#buy").text("testing");
	});
    $("#addreview").click(function(e) {
        // line below not working
		$("#addreview").text("testing");
	});
}

function getProductData(productID) {
    productID = parseInt(productID);
    var product = products[productID-1]; // of by one, our first product has index 0
    return product; 
}