let grid = [" ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];
let turn = 0;
const players = ["O", "X"];

let player = document.querySelector("p.Turn");
player.textContent = "It is Player 1's turn";

let check = document.querySelector("p.Winner");


//Switch players
function switchPlayer() {

  if (turn == 0) {

    turn = 1;
    player.textContent = "It is Player 2's turn";
    return turn;

  } else {

    turn = 0;
    player.textContent = "It is Player 1's turn";
    return turn;

  }

}

function endGame() {

  box1.removeEventListener("click", position1);
  box2.removeEventListener("click", position2);
  box3.removeEventListener("click", position3);
  box4.removeEventListener("click", position4);
  box5.removeEventListener("click", position5);
  box6.removeEventListener("click", position6);
  box7.removeEventListener("click", position7);
  box8.removeEventListener("click", position8);
  box9.removeEventListener("click", position9);

}

function outcome() {

    //Top Row
    if (grid[0] == players[0] && grid[1] == players[0] && grid[2] == players[0]) {

      check.textContent = "Player 1 is the winner";
      endGame();

    }

    if (grid[0] == players[1] && grid[1] == players[1] && grid[2] == players[1]) {

      check.textContent = "Player 2 is the winner";
      endGame();

    }

    //Middle Row
    if (grid[3] == players[0] && grid[4] == players[0] && grid[5] == players[0]) {

      check.textContent = "Player 1 is the winner";
      endGame();

    }

    if (grid[3] == players[1] && grid[4] == players[1] && grid[5] == players[1]) {

      check.textContent = "Player 2 is the winner";
      endGame();

    }

    //Bottom Row
    if (grid[6] == players[0] && grid[7] == players[0] && grid[8] == players[0]) {

      check.textContent = "Player 1 is the winner";
      endGame();

    }

    if (grid[6] == players[1] && grid[7] == players[1] && grid[8] == players[1]) {

      check.textContent = "Player 2 is the winner";
      endGame();

    }

    //Left Column
    if (grid[0] == players[0] && grid[3] == players[0] && grid[6] == players[0]) {

      check.textContent = "Player 1 is the winner";
      endGame();

    }

    if (grid[0] == players[1] && grid[3] == players[1] && grid[6] == players[1]) {

      check.textContent = "Player 2 is the winner";
      endGame();

    }

    //Middle Column
    if (grid[1] == players[0] && grid[4] == players[0] && grid[7] == players[0]) {

      check.textContent = "Player 1 is the winner";
      endGame();

    }

    if (grid[1] == players[1] && grid[4] == players[1] && grid[7] == players[1]) {

      check.textContent = "Player 2 is the winner";
      endGame();

    }

    //Right Column
    if (grid[2] == players[0] && grid[5] == players[0] && grid[8] == players[0]) {

      check.textContent = "Player 1 is the winner";
      endGame();

    }

    if (grid[2] == players[1] && grid[5] == players[1] && grid[8] == players[1]) {

      check.textContent = "Player 2 is the winner";
      endGame();

    }

    //Left Diagonal
    if (grid[0] == players[0] && grid[4] == players[0] && grid[8] == players[0]) {

      check.textContent = "Player 1 is the winner";
      endGame();

    }

    if (grid[0] == players[1] && grid[4] == players[1] && grid[8] == players[1]) {

      check.textContent = "Player 2 is the winner";
      endGame();

    }

    //Right Diagonal
    if (grid[2] == players[0] && grid[4] == players[0] && grid[6] == players[0]) {

      check.textContent = "Player 1 is the winner";
      endGame();

    }

    if (grid[2] == players[1] && grid[4] == players[1] && grid[6] == players[1]) {

      check.textContent = "Player 2 is the winner";
      endGame();

    }

    //Stalemate
    if(!grid.includes(" ")){

      check.textContent = "Stalemate";
      endGame();

    }

}

//Position 1
let box1 = document.querySelector("th.Position1");
box1.addEventListener("click", position1);

function position1() {
  if (turn == 1) {

    box1.textContent = players[1];
    grid[0] = players[1];

  } else {

    box1.textContent = players[0];
    grid[0] = players[0];

  }

  switchPlayer();
  box1.removeEventListener("click", position1);
  outcome();

}

//Position 2
let box2 = document.querySelector("th.Position2");
box2.addEventListener("click", position2)

function position2() {
  if (turn == 1) {

    box2.textContent = players[1];
    grid[1] = players[1];

  } else {

    box2.textContent = players[0];
    grid[1] = players[0];

  }

  switchPlayer();
  box2.removeEventListener("click", position2);
  outcome();


}

//Position 3
let box3 = document.querySelector("th.Position3");
box3.addEventListener("click", position3);

function position3() {
  if (turn == 1) {

    box3.textContent = players[1];
    grid[2] = players[1];

  } else {

    box3.textContent = players[0];
    grid[2] = players[0];

  }

  switchPlayer();
  box3.removeEventListener("click", position3);
  outcome();


}

//Position 4
let box4 = document.querySelector("th.Position4");
box4.addEventListener("click", position4);

function position4() {
  if (turn == 1) {

    box4.textContent = players[1];
    grid[3] = players[1];

  } else {

    box4.textContent = players[0];
    grid[3] = players[0];

  }

  switchPlayer();
  box4.removeEventListener("click", position4);
  outcome();

}

//Position 5
let box5 = document.querySelector("th.Position5");
box5.addEventListener("click", position5);

function position5() {
  if (turn == 1) {

    box5.textContent = players[1];
    grid[4] = players[1];

  } else {

    box5.textContent = players[0];
    grid[4] = players[0];

  }

  switchPlayer();
  box5.removeEventListener("click", position5);
  outcome();

}

//Position 6
let box6 = document.querySelector("th.Position6");
box6.addEventListener("click", position6);

function position6() {
  if (turn == 1) {

    box6.textContent = players[1];
    grid[5] = players[1];

  } else {

    box6.textContent = players[0];
    grid[5] = players[0];

  }

  switchPlayer();
  box6.removeEventListener("click", position6);
  outcome();

}

//Position 7
let box7 = document.querySelector("th.Position7");
box7.addEventListener("click", position7);

function position7() {
  if (turn == 1) {

    box7.textContent = players[1];
    grid[6] = players[1];

  } else {

    box7.textContent = players[0];
    grid[6] = players[0];

  }

  switchPlayer();
  box7.removeEventListener("click", position7);
  outcome();

}

//Position 8
let box8 = document.querySelector("th.Position8");
box8.addEventListener("click", position8);

function position8() {
  if (turn == 1) {

    box8.textContent = players[1];
    grid[7] = players[1];

  } else {

    box8.textContent = players[0];
    grid[7] = players[0];

  }

  switchPlayer();
  box8.removeEventListener("click", position8);
  outcome();

}

//Position 9
let box9 = document.querySelector("th.Position9");
box9.addEventListener("click", position9);

function position9() {
  if (turn == 1) {

    box9.textContent = players[1];
    grid[8] = players[1];

  } else {

    box9.textContent = players[0];
    grid[8] = players[0];

  }

  switchPlayer();
  box9.removeEventListener("click", position9);
  outcome();

}
