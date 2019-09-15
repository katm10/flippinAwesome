let tileMap = {};
let wordIndex = 0;
let allArrays = [];
let arrayIndex = 0;
let numOfTiles = 4;
let startTime;
let endTime;
let points = 0;
let strikes = 3;


$(".start-button").on("click", function() {
  if (hiddenText || $("textarea").val()) {
    startGame();
  }  
});

function resetEverything() {
  tileMap = {};
  wordIndex = 0;
  allArrays = [];
  arrayIndex = 0;
  numOfTiles = 4;
  startTime;
  endTime;
  points = 0;
  strikes = 3;

  makeEverythingDisappear();
  $('.flip-card-inner').removeClass("flipped")
  $(".point-total").text("Points: 0");

}

function fillTiles(numFlip, textArr) {
  makeEverythingDisappear();
  $('.flip-card-inner').removeClass("flipped")
  tileMap = {};
  for (var i = 0; i < numFlip; i += 1) {
    var random;
    do {
      random = Math.floor(Math.random() * 9);
    } while (Object.keys(tileMap).includes(random.toString()));
    tileMap[random] = textArr[i];
    $("#" + random + " .flip-card-front").html("<div>" + textArr[i] + "</div>");
    startTime = Date.now();
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
  if (!text) {
    text = hiddenText;
  }
  arrayIndex = 0;
  wordIndex = 0;
  numOfTiles = 4;

  const textArr = text.trim().replace(/[\n\t\s]+/g, " ").split(" ");
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
  $(".flip-card-front").html("");
}

function flipAllExcept(tileNumber) {
  for (var i = 0; i < 9; i++) {
    if (i != tileNumber) {
      $("#" + i + " .flip-card-inner").addClass("flipped")
    }
  }

}


function showCorrectTile(tileNumber) {
//  $("#" + tileNumber + " .flip-card-front").html(tileMap[tileNumber]);
  $("#" + tileNumber + " .flip-card-inner").removeClass("flipped")
}



$(".grid-cell").click(function() {
  const currentTile = $(this).attr("id");
  if (tileMap[$(this).attr("id")] == allArrays[arrayIndex][wordIndex]) {
    if (wordIndex == 0) {
      flipAllExcept(currentTile);
      endTime = Date.now();
    } else if (wordIndex == numOfTiles - 1) {
      const timeDifference = endTime - startTime;
      points += Math.round((100 * numOfTiles) / Math.log10(timeDifference));
      $(".point-total").text("Points: " + points);
      if (numOfTiles == allArrays[arrayIndex].length) {
        arrayIndex += 1;
        showCorrectTile(currentTile);
        if (arrayIndex == allArrays.length) {
          points += 500;
          $(".modal-text").html(
            "<p>You won with a grand total of <b>" + points + "</b> points!</p>"
          );
          $(".modal").css("display", "block");
          resetEverything();
          return;
        }
        numOfTiles = 3;
      }
      numOfTiles += 1;
      fillTiles(numOfTiles, allArrays[arrayIndex]);
      wordIndex = -1;
    } else {
      showCorrectTile(currentTile);
    }
    wordIndex += 1;
  } else {
    showCorrectTile(currentTile);
    strikes -= 1;
    const display =
      strikes != 0
        ? "<p>Oh no! You lost a strike. You have <b>" +
          strikes +
          "</b> strikes left.</p>"
        : "<p>Oh no! You are out of strikes. Game over. You ended with <b>" +
          points +
          "</b>!</p>";
    $(".modal-text").html(display);
    $(".modal").css("display", "block");
    if (strikes == 0) {
      resetEverything();
    } else {
      fillTiles(numOfTiles, allArrays[arrayIndex]);
      wordIndex = 0;
    }
  }
});
