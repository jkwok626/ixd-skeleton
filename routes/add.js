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
	var walmart = request.query.walmartLink;
	var target = request.query.targetLink;
	var petco = request.query.petcoLink;
	var petsmart = request.query.petsmartLink;
	var amazon = request.query.amazonLink;
	var retailList = [{"prodURL": walmart}, {"prodURL": target}, {"prodURL": petco}, {"prodURL": petsmart}, {"prodURL": amazon}]

	for (i = 0; i < 5; i++) {
		data2.retailers[i].retailLink.push(retailList[i]);
	}
	// response.render('home', data);
	response.redirect('/home');
};