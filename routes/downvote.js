var data = require("../products.json")['products'];

exports.downVote = function (request, response) {
    var buttonValue = request.query.id.split(',');

    // home page, else product page
    if (buttonValue[0] == 0) {
        var productID = buttonValue[1] - 1;
        var newScore = data[productID].voteScore - 1;
        data[productID].voteScore = newScore;

        data.sort(function(a, b) {
            return b.voteScore - a.voteScore;
        });

        for(i = 0; i < data.length; i++) {
            data[i].ranking = (i+1);
        }

        response.redirect("/home");
    } else {
        var productID = buttonValue[1] - 1;
        var newScore = data[productID].voteScore - 1;
        data[productID].voteScore = newScore;

        data.sort(function(a, b) {
            return b.voteScore - a.voteScore;
        });

        for(i = 0; i < data.length; i++) {
            data[i].ranking = (i+1);
        }

        response.redirect("/product/" + buttonValue[1]);
    }
};