var data = require("../products.json");
var data2 = require("../buy.json");

exports.addProduct = function (request, response) {
	var productName = request.query.name;
	var productDescription = request.query.description;
	var lastId = data.products[data.products.length - 1].id;
	var productId = lastId + 1;
	var newProduct = {
		"id": productId,
		"title": productName,
		"ranking": productId,
		"summary": productDescription,
		"image": "https://loremflickr.com/400/400/puppy",
		"voteScore": 0
	};
	newData = data.products.push(newProduct);
	var empty = {"prodURL": "hi"}
	for (i = 0; i < 5; i++) {
		data2.retailers[i].retailLink.push(empty);
	}
	// response.render('home', data);
	response.redirect('/home');
};