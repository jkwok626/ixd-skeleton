var data = require("../products.json");

exports.addProduct = function(request, response) {   
	var productName = request.query.name;
	var productDescription = request.query.description;
	var lastId = data.products[data.products.length-1].id;
	var productId = lastId + 1;
	var newProduct = {
		"id": productId,
		"title": productName,
		"summary": productDescription,
		"image": "https://loremflickr.com/400/400/puppy"	
	};
	newData = data.products.push(newProduct);
	response.render('home', data);
};