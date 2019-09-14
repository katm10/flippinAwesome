
var height = 4;
var width = 4;


for (var i = 0; i < height; i++) {
	$(".grid-container").append("<div class='grid-row'></div>");
	for (var j = 0; j < width; j++) {
		$(".grid-container .grid-row:last-child").append("<div class='grid-cell'></div>")
	}
}
