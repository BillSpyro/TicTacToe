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
let box1 = document.querySelector("th.Position1");
box1.addEventListener("click", event => {
  if (turn == 1) {

    box1.textContent = "X";
    grid[0] = "X";

  } else {

    box1.textContent = "O";
    grid[0] = "O";

  }

  switchPlayer();
});

//Position 2
let box2 = document.querySelector("th.Position2");
box2.addEventListener("click", event => {
  if (turn == 1) {

    box2.textContent = "X";
    grid[1] = "X";

  } else {

    box2.textContent = "O";
    grid[1] = "O";

  }

  switchPlayer();
});
