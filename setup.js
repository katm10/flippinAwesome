
var height = 3;
var width = 3;

var hiddenText = "";


for (var i = 0; i < height; i++) {
	$(".grid-container").append("<div class='grid-row'></div>");
	for (var j = 0; j < width; j++) {
		$(".grid-container .grid-row:last-child").append("<div class='grid-cell' id='"+(i*height + j)+"'></div>")
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