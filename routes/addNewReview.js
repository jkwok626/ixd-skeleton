var data = require("../reviews.json");

exports.addReview = function (request, response) {
	// var reviewName = request.query.name;
	var reviewRating = request.query.rate;
	console.log(reviewRating);
	var reviewDescription = request.query.description;
	var productID = request.query.id;
	var ratings = "";
	for(i = 0; i < reviewRating; i++) {
		ratings+= "★";
	}

	var newReview = {
		"product_id": productID,
		"user_id": 3,
		"author": "Anonymous Test",
		"stars": ratings,
		"text": reviewDescription
	};
	newData = data.reviews.push(newReview);
	response.redirect('/home');
};