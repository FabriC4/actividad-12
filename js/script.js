// script.js

// Variables
const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = 'X';  // Jugador actual
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];  // Tablero vacío

// Combinaciones ganadoras
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Función para manejar el clic en una celda
function handleCellClick(e) {
  const clickedCell = e.target;
  const clickedIndex = clickedCell.getAttribute('data-index');

  if (board[clickedIndex] !== "" || !gameActive) {
    return;  // Si la casilla ya está ocupada o el juego terminó, no hace nada.
  }

  // Actualizamos el tablero y la interfaz
  board[clickedIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  // Verificamos si hay ganador
  checkForWinner();

  // Cambiamos de jugador
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Función para verificar si hay un ganador
function checkForWinner() {
  let roundWon = false;

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] === '' || board[b] === '' || board[c] === '') {
      continue;
    }

    if (board[a] === board[b] && board[b] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    message.textContent = `Jugador ${currentPlayer} ha ganado!`;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    message.textContent = "¡Es un empate!";
    gameActive = false;
    return;
  }
}

// Función para reiniciar el juego
function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  board = ["", "", "", "", "", "", "", "", ""];
  message.textContent = "";
  cells.forEach(cell => (cell.textContent = ""));
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
