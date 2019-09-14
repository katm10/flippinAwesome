
var height = 4;
var width = 4;

var hiddenText = "";


for (var i = 0; i < height; i++) {
	$(".grid-container").append("<div class='grid-row'></div>");
	for (var j = 0; j < width; j++) {
		$(".grid-container .grid-row:last-child").append("<div class='grid-cell'></div>")
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