var data = require("../reviews.json");

exports.addReview = function (request, response) {
	// var reviewName = request.query.name;
	var reviewRating = request.query.rate;
	var reviewDescription = request.query.description;

	var newReview = {
		"product_id": 1,
		"user_id": 3,
		"author": "Anonymous Test",
		"stars": reviewRating,
		"text": reviewDescription
	};
	newData = data.reviews.push(newReview);
	response.redirect('/home');
};