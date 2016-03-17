$(document).ready(function() {
	// console.log("working from test file");

	$("html").css("cursor: url('../img/cable-car-clipart.gif'), auto");

	// $(".results").hide();
	// $(".subheader-info").hide();

	$(".subheader-image").click(function() {
		$(".results").show();
		$(".subheader-info").show();
		console.log("image click worked");
	});
});
