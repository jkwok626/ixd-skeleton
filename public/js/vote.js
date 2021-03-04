//var $ = require("jquery");

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    // Resizes padding between navbar and content
    //$('body').css('padding-top', $('#navbar').height()+10);  
	initializePage();
	/*$(".up").click(function() {
    	$.getJSON("../../products.json", function() {
    		score.products[0].voteScore++;
			console.log("voteScore: " + score.products[0].voteScore);
    	});
    });

    $(".down").click(function() {
    	$.getJSON("../../products.json", function() {
    		score.products[0].voteScore--;
			console.log("voteScore: " + score.products[0].voteScore);
    	});
    });*/
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // Resizes padding between navbar and content
	/*$(window).resize(function () { 
        $('body').css('padding-top', $('#navbar').height()+10);
    });*/
}

/*var score = JSON.parse(products);

function upScore() {
	score.products[0].voteScore++;
	console.log("voteScore: " + score.products[0].voteScore);
}

function downScore() {
	score.products[0].voteScore--;
	console.log("voteScore: " + score.products[0].voteScore);
}*/

//--------------------------------------------------------------------------------

/*$.get("../products.json", function(data) {
	var score = JSON.parse(data);

	function upScore() {
		score[0].voteScore++;
		console.log("voteScore: " + score[0].voteScore);
	}

	function downScore() {
		score[0].voteScore--;
		console.log("voteScore: " + score[0].voteScore);
	}
});*/