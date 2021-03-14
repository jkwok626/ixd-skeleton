var data = require("../products.json")['products'];

exports.upVote = function (request, response) {
    var buttonValue = request.query.id.split(',');
    var productID = buttonValue[1] - 1;

    if (!data[productID].voteState) {
        // home page, else product page
        if (buttonValue[0] == 0) {
            var newScore = data[productID].voteScore + 1;
            data[productID].voteScore = newScore;
            data[productID].voteState = true;
            data[productID].upvoteState = true;
            data[productID].downvoteState = false;

            data.sort(function (a, b) {
                return b.voteScore - a.voteScore;
            });

            for (i = 0; i < data.length; i++) {
                data[i].ranking = (i + 1);
            }

            response.redirect("/home");
        } else {
            var newScore = data[productID].voteScore + 1;
            data[productID].voteScore = newScore;
            data[productID].voteState = true;
            data[productID].upvoteState = true;
            data[productID].downvoteState = false;

            data.sort(function (a, b) {
                return b.voteScore - a.voteScore;
            });

            for (i = 0; i < data.length; i++) {
                data[i].ranking = (i + 1);
            }

            response.redirect("/product/" + buttonValue[1]);
        }
    } else {
        // home page, else product page
        if (buttonValue[0] == 0) {
            var newScore = data[productID].voteScore + 2;
            data[productID].voteScore = newScore;
            data[productID].upvoteState = true; // disable
            data[productID].downvoteState = false; // enable

            data.sort(function (a, b) {
                return b.voteScore - a.voteScore;
            });

            for (i = 0; i < data.length; i++) {
                data[i].ranking = (i + 1);
            }

            response.redirect("/home");
        } else {
            var newScore = data[productID].voteScore + 2;
            data[productID].voteScore = newScore;
            data[productID].upvoteState = true;
            data[productID].downvoteState = false;

            data.sort(function (a, b) {
                return b.voteScore - a.voteScore;
            });

            for (i = 0; i < data.length; i++) {
                data[i].ranking = (i + 1);
            }

            response.redirect("/product/" + buttonValue[1]);
        }
    }
};