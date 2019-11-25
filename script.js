let grid = [" ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];
let turn = 0;
const players = ["O", "X"];

let player = document.querySelector("p.Turn");
player.textContent = "It is Player 1's turn";


//Switch players
function switchPlayer() {

  if (turn == 0) {

    turn = 1;
    player.textContent = "It is Player 1's turn";
    return turn;

  } else {

    turn = 0;
    player.textContent = "It is Player 2's turn";
    return turn;

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
  box2.removeEventListener("click", position2);

  switchPlayer();
}
