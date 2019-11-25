let grid = [" ", " ", " ",
  " ", " ", " ",
  " ", " ", " "
];
let turn = 0;
const players = ["O", "X"];

//Switch players
function switchPlayer() {

  if (turn == 0) {

    turn = 1;
    return turn;

  } else {

    turn = 0;
    return turn;

  }

}

//Position 1
let square = document.querySelector("th.Position1");
square.addEventListener("click", event => {
  if (turn == 1) {

    square.textContent = "X";
    grid[0] = "X";

  } else {

    square.textContent = "O";
    grid[0] = "O";

  }

  switchPlayer;
});
