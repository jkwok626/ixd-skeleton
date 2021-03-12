// By Elise : Added initialize page and render function
/* If you decide to change the name of this file, 
we have to change the file name in views, the require()
in app.js and the path in app.js as well */

var products = require('../products.json')['products'];
var reviews = require('../reviews.json')['reviews'];

// exports.productInfo = function(req, res) {
//     var productID = req.params.id;
//     var product = getProductData(productID);
//     res.json(product);
// }

exports.view = function (req, res) {
    var productID = req.params.id;
    var product = getProductData(productID);
    var reviewID = req.params.id;
    var review = getReviewData(reviewID);
    res.render('product', {
        product: product,
        review: review
      });
}

function getProductData(productID) {
    productID = parseInt(productID);
    var product = products[productID - 1]; // of by one, our first product has index 0
    return product;
}

function getReviewData(reviewID) {
    reviewID = parseInt(reviewID);
    productReviews = reviews.filter(el => el.product_id == reviewID);
    return productReviews;
}