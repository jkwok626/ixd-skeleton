var data = require("../products.json");

exports.addProduct = function(request, response) {   
    console.log("hi");
	var productName = request.query.name;
	var productDescription = request.query.description;
	var newProduct = {
		"title": productName,
		"summary": productDescription,
		"image": "https://loremflickr.com/400/400"	
	};
	newData = data.products.push(newProduct);
	response.render('index', newData);
};