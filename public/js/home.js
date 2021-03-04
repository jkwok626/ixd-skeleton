'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    $('body').css('padding-top', $('#navbar').height() + 10);
    initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $(window).resize(function () {
        $('body').css('padding-top', $('#navbar').height() + 10);
    });
    $('.up').unbind('click').click(upVote);
    $('.down').unbind('click').click(downVote);
}

/*
 * Make an AJAX call to upvote
 */
function upVote(e) {
    // Prevent following the link
    e.preventDefault();

    // Get the voteNumber ID, e.g., "vote3"
    var voteID = $(this).siblings('p.voteNumber').attr('id');
    // get rid of 'vote' from the front of the id 'vote3'
    var idNumber = voteID.substr('vote'.length);

    var voteScore = $('#vote' + idNumber).html();
    var newVoteScore = parseInt(voteScore) + 1;
    $('#vote' + idNumber).html(newVoteScore);

    console.log("User clicked on vote " + idNumber);
}

/*
 * Make an AJAX call to downvote
 */
function downVote(e) {
    // Prevent following the link
    e.preventDefault();

    // Get the voteNumber ID, e.g., "vote3"
    var voteID = $(this).siblings('p.voteNumber').attr('id');
    // get rid of 'vote' from the front of the id 'vote3'
    var idNumber = voteID.substr('vote'.length);

    var voteScore = $('#vote' + idNumber).html();
    var newVoteScore = parseInt(voteScore) - 1;
    $('#vote' + idNumber).html(newVoteScore);

    console.log("User clicked on vote " + idNumber);
}