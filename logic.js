let tileMap = {};
let wordIndex = 0;
let allArrays = [];
let arrayIndex = 0;
let numOfTiles = 4;

$(".start-button").on("click", function() {
  startGame();
});

function fillTiles(numFlip, textArr) {
  makeEverythingDisappear();
  $(".grid-cell").css("background", "#cbf7f4");
  tileMap = {};
  for (var i = 0; i < numFlip; i += 1) {
    var random;
    do {
      random = Math.floor(Math.random() * 9);
    } while (Object.keys(tileMap).includes(random.toString()));
    tileMap[random] = textArr[i];
    $("#" + random).text(textArr[i]);
  }
}

function playRound(arr) {
  numFlip = 4;
  fillTiles(numFlip, arr);
}

function startGame() {
  text = $(".word-container")
    .find("textarea")
    .val();
  arrayIndex = 0;
  wordIndex = 0;
  numOfTiles = 4;

  const textArr = text.replace(/[\n\t]+/g, " ").split(" ");
  var arrCounter = 0;
  allArrays = Array(Math.ceil(textArr.length / 9));
  allArrays[0] = [];

  for (var i = 0; i < textArr.length; i += 1) {
    if (i % 9 == 0 && i != 0) {
      arrCounter += 1;
      allArrays[arrCounter] = [];
    }
    allArrays[arrCounter].push(textArr[i]);
  }

  playRound(allArrays[0]);
}

function makeEverythingDisappear() {
  $(".grid-cell").text("");
}

function showCorrectTile(tileNumber) {
  $("#" + tileNumber).text(tileMap[tileNumber]);
  $("#" + tileNumber).css("background", "green");
}

$(".grid-cell").click(function() {
  if (tileMap[$(this).attr("id")] == allArrays[arrayIndex][wordIndex]) {
    const currentTile = $(this).attr("id");
    if (wordIndex == 0) {
      // makeEverythingDisappear();
      showCorrectTile(currentTile);
    } else if (wordIndex == numOfTiles - 1) {
      console.log(numOfTiles)
      console.log(allArrays[arrayIndex].length)
      if (numOfTiles == allArrays[arrayIndex].length) {
        arrayIndex += 1;
        numOfTiles = 3;
        console.log(allArrays[arrayIndex])
        if (arrayIndex == allArrays.length) {
          // you won
        }
      }
      console.log('before show current')
      console.log('arrayindex', arrayIndex)
      showCorrectTile(currentTile);
      numOfTiles += 1;
      console.log('before fill tiles')
      fillTiles(numOfTiles, allArrays[arrayIndex]);
      wordIndex = -1;
    } else {
      showCorrectTile(currentTile);
    }
    wordIndex += 1;
  }
});


