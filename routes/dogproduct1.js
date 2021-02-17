// By Elise : Added initialize page and render function
/* If you decide to change the name of this file, 
we have to change the file name in views, the require()
in app.js and the path in app.js as well */
/*
 * GET home page.
 */
function initializePage() {
    $("#buy").click(function(e) {
        // line below not working
		$("#buy").text("testing");
	});
    $("#addreview").click(function(e) {
        // line below not working
		$("#addreview").text("testing");
	});
}

exports.view = function(req, res){
    res.render('dogproduct1');
  };