// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    // Resizes padding between navbar and content
    $('body').css('padding-top', $('#navbar').height()+10);  
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    // Resizes padding between navbar and content
	$(window).resize(function () { 
        $('body').css('padding-top', $('#navbar').height()+10);
    });
}