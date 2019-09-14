$(".start-button").on("click", function() {
  startGame();
});

function fillTiles(numFlip, textArr) {
  const tileMap = {};
  for (var i = 0; i < numFlip; i += 1) {
    var random;
    do {
      random = Math.floor(Math.random() * 16);
    } while (Object.keys(tileMap).includes(random));
    tileMap[random] = textArr[i];
    $("#button-" + random).text(textArr[i]);
  }
  console.log(tileMap);
}

function playRound(arr) {
  numFlip = 4;
  fillTiles(numFlip, arr);

  $(".grid-cell").css("background", "#cbf7f4");
}

function startGame() {
  text = $(".word-container")
    .find("textarea")
    .val();
  const textArr = text.split(" ");
  var arrCounter = 0;
  var arrOfArrs = Array(Math.ceil(textArr.length / 16));
  arrOfArrs[0] = [];

  for (var i = 0; i < textArr.length; i += 1) {
    if (i % 16 == 0 && i != 0) {
      arrCounter += 1;
      arrOfArrs[arrCounter] = [];
    }
    arrOfArrs[arrCounter].push(textArr[i]);
  }

  for (var i = 0; i < arrOfArrs.length; i++) {
    playRound(arrOfArrs[i]);
  }
}
