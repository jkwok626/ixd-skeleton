var data = require("../products.json")['products'];

exports.downVote = function (request, response) {
    var productID = request.query.id - 1;
    var score = data[productID].voteScore;
    var newScore = data[productID].voteScore - 1;
    data[productID].voteScore = newScore;
    response.redirect('/home');
};