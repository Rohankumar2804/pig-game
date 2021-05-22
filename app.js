var scores, roundScores, activePlayer, gamePlaying;
init();
document.querySelector(".btn--roll").addEventListener("click", function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    //console.log(dice);
    document.querySelector(".dice").style.display = "inline-block";
    document.querySelector(".dice").src = "dice-" + dice + ".png";
    if (dice !== 1) {
      roundScores += dice;
      document.querySelector(
        ".box" + activePlayer + "-p"
      ).textContent = roundScores;
    } else {
      nextPlayer();
    }
  }
});
document.querySelector(".btn--hold").addEventListener("click", function () {
  if (gamePlaying) {
    scores[activePlayer - 1] += roundScores;
    document.querySelector(".para_design" + activePlayer).textContent =
      scores[activePlayer - 1];
    if (scores[activePlayer - 1] >= 100) {
      document.querySelector(".para_design" + activePlayer).textContent =
        "WINNER";
      gamePlaying = false;
    } else nextPlayer();
  }
});
function nextPlayer() {
  roundScores = 0;
  if (activePlayer === 1) activePlayer = 2;
  else activePlayer = 1;
  document.querySelector(".box1-p").textContent = 0;
  document.querySelector(".box2-p").textContent = 0;
  if (activePlayer === 1) {
    document.querySelector(".dot").classList.remove("active", ".colr");
    document.querySelector(".dotactive").classList.remove("dot1");
    document.querySelector(".dotactive").classList.add("active", ".colr");
    document.querySelector(".dot").classList.add("dot1");
  } else {
    document.querySelector(".dotactive").classList.remove("active", ".colr");
    document.querySelector(".dot").classList.remove("dot1");
    document.querySelector(".dot").classList.add("active", ".colr");
    document.querySelector(".dotactive").classList.add("dot1");
  }
  document.querySelector(".dice").style.display = "none";
}
document.querySelector(".btn--new").addEventListener("click", function () {
  init();
});
function init() {
  document.querySelector(".dotactive").classList.add("active", ".colr");
  document.querySelector(".dot").classList.add("dot1");

  scores = [0, 0];
  roundScores = 0;
  activePlayer = 1;
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".box1-p").textContent = 0;
  document.querySelector(".box2-p").textContent = 0;
  document.querySelector(".para_design1").textContent = 0;
  document.querySelector(".para_design2").textContent = 0;
  gamePlaying = true;
  //   document.querySelector('.para_design1').textContent
}
