exports.view = function (req, res) {
  var productID = req.params.id;
  res.render('addReview', {productID: productID});
};