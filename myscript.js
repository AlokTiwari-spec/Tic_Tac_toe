// Restart Game button
var restart =  document.querySelector("#b");

//Grab all the squares
var squares = document.querySelectorAll("td");

//Clear all squares
function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}
restart.addEventListener('click',clearBoard);

//Check the square the marker
function changeMarker() {
  if(this.textContent === ''){
    this.textContent = 'X';
  } else if (this.textContent === 'X') {
    this.textContent = 'O';
  } else {
    this.textContent = '';
  }
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker);
}
