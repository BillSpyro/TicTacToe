let grid = [" ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];
let turn = 0;
const players = ["O", "X"];

let player = document.querySelector("p.Turn");
player.textContent = "It is Player 1's turn";

let check = document.querySelector("p.Winner");
check.textContent = "Not finished";


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

function outcome() {

  if (grid[0] == players[0] && grid[1] == players[0] && grid[2] == players[0]) {

    check.textContent = "Player 1 is the winner";

  }

  if (grid[0] == players[1] && grid[1] == players[1] && grid[2] == players[1]) {

    check.textContent = "Player 2 is the winner";
    
  }
}







//Position 1
let box1 = document.querySelector("th.Position1");
box1.addEventListener("click", position1);

function position1() {
  if (turn == 1) {

    box1.textContent = "X";
    grid[0] = "X";

  } else {

    box1.textContent = "O";
    grid[0] = "O";

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

    box2.textContent = "X";
    grid[1] = "X";

  } else {

    box2.textContent = "O";
    grid[1] = "O";

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

    box3.textContent = "X";
    grid[2] = "X";

  } else {

    box3.textContent = "O";
    grid[2] = "O";

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

    box4.textContent = "X";
    grid[3] = "X";

  } else {

    box4.textContent = "O";
    grid[3] = "O";

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

    box5.textContent = "X";
    grid[4] = "X";

  } else {

    box5.textContent = "O";
    grid[4] = "O";

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

    box6.textContent = "X";
    grid[5] = "X";

  } else {

    box6.textContent = "O";
    grid[5] = "O";

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

    box7.textContent = "X";
    grid[6] = "X";

  } else {

    box7.textContent = "O";
    grid[6] = "O";

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

    box8.textContent = "X";
    grid[7] = "X";

  } else {

    box8.textContent = "O";
    grid[7] = "O";

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

    box9.textContent = "X";
    grid[8] = "X";

  } else {

    box9.textContent = "O";
    grid[8] = "O";

  }

  switchPlayer();
  box9.removeEventListener("click", position9);
  outcome();

}
