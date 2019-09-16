
var height = 3;
var width = 3;

var hiddenText = "";

console.log("Founded in 2019, Flippin Awesome's mission is to advance the state of the art by building tools that will help people solve problems, make discoveries, and create new breakthroughs. For information on USA state energy profiles, visit https://www.eia.gov/state/.");


for (var i = 0; i < height; i++) {
	$(".grid-container").append("<div class='grid-row'></div>");
	for (var j = 0; j < width; j++) {
		$(".grid-container .grid-row:last-child").append("<div class='grid-cell' id='"+(i*height + j)+"'></div>")
		$(".grid-cell#" + (i*height + j)).append("<div class='flip-card-inner'><div class='flip-card-front'></div><div class='flip-card-back'></div></div>")
	}
}

$(".hide-show").click(function() {
	var textarea = $("textarea");

	if (textarea.attr('disabled')) {
		textarea.attr('disabled', false);
		textarea.val(hiddenText);
		textarea.attr("placeholder", "Type the words you want to memorize in here...");
	} else {
		textarea.attr('disabled', "disabled");
		hiddenText = textarea.val();
		textarea.attr("placeholder", "(text currently being hidden - click the button below to see again)");
		textarea.val("");
	}



});
