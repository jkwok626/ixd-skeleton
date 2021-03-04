'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('button.up').click(addVote);
}

/*
 * Make an AJAX call to upvote
 */
function addVote(e) {
	// Prevent following the link
	e.preventDefault();
    
	// Get the voteNumber ID, e.g., "vote3"
	var voteID = $(this).siblings('p.voteNumber').attr('id');
	// get rid of 'vote' from the front of the id 'vote3'
	var idNumber = voteID.substr('vote'.length);

	console.log("User clicked on vote " + idNumber);
}

function callBackFn(result) {
	console.log(result);
	var voteID = result.id;
	var voteHTML = '<h4>' + result.title + '</h4>' + '<h5>' + result.date +
		'</h5>' + '<img src="' + result.image + '" class="detailsImage">' +
		'<p>' + result.summary + '</p>';
	$('#vote' + voteID + ' .details').html(voteHTML);
}