$('.start-button').on("click", function() {
  startGame();
})

function fillTiles(numFlip, textArr) {
  var usedTiles = [];
  for (var i = 0; i < numFlip; i += 1) {
    var random;
    do {
      random = Math.floor(Math.random() * 16);
    } while (usedTiles.includes(random));
    usedTiles.push(random);
    $("#button-" + random).text(textArr[i]);
  }
}

function playRound(arr) {
  numFlip = 4;
  fillTiles(numFlip, textArr);
  $(".grid-cell").css("background", "#cbf7f4");

  var currentTile = 0;
  while (currentTile < arr.length) {
    $(".grid-cell").on("click", function() {
      if ($(this.textarea).val() == arr[currentTile]) {
        $(this).css("background", "#cdf7dc");
        currentTile += 1;
        // TODO: points
      }
      else{
        // TODO: punish
      }
    });
  }

}

function startGame() {
  text = $(".word-container")
    .find("textarea")
    .val();
  console.log(text);
  const textArr = text.split(" ");
  var arrCounter = -1;
  var arrOfArrs = Array(Math.ceil(textArr.length / 16));
  for (var i = 0; i < textArr.length; i += 1) {
    if (i % 16 == 0) {
      arrCounter += 1;
    }
    arrOfArrs[arrCounter].push(textArr[i]);
  }
  
  for(var i = 0; i < arrOfArrs.length; i++){
      playRound(arrOfArrs[i])
  }

}
