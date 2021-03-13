var data = require("../reviews.json");

exports.addReview = function (request, response) {
	// var reviewName = request.query.name;
	var reviewRating = request.query.rate;
	if (request.query.rate == null) {
		reviewRating = 0;
	}
	var reviewDescription = request.query.description;
	var productID = request.query.id;

	var newReview = {
		"product_id": productID,
		"user_id": 0,
		"author": "Anonymous Fox",
		"stars": reviewRating,
		"text": reviewDescription
	};
	newData = data.reviews.push(newReview);
	response.redirect('/home');
};