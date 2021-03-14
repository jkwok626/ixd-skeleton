var data = require("../products.json")['products'];

exports.upVote = function (request, response) {
    var buttonValue = request.query.id.split(',');

    // home page, else product page
    if (buttonValue[0] == 0) {
        var productID = buttonValue[1] - 1;
        var newScore = data[productID].voteScore + 1;
        data[productID].voteScore = newScore;
        response.redirect("/home");
    } else {
        var productID = buttonValue[1] - 1;
        var newScore = data[productID].voteScore + 1;
        data[productID].voteScore = newScore;
        response.redirect("/product/" + buttonValue[1]);
    }
};