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
    $('.up').click(upVote);
    $('.down').click(downVote);
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

function sortProducts(e, sortCategory) {
    var numProducts = $('.productCard').length

    if (sortCategory == 'ranking') {
        for (var i = 0; i < numProducts; i++) {
            document.getElementsByClassName("productCard")[i].style.display = "block";
        }
    } else {
        for (var i = 0; i < numProducts; i++) {
            var classes = $('.' + (i + 1)).attr('class');
            var indvClasses = classes.split(" ");
            var category = indvClasses[3].toString();
            console.log(category);

            if (category.localeCompare(sortCategory) == 0) {
                document.getElementsByClassName("productCard")[i].style.display = "block";
            } else {
                document.getElementsByClassName("productCard")[i].style.display = "none";
            }
        }
    }
}