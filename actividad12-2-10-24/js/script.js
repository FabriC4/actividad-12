let turno = 'X'; // Empieza el jugador 'X'
const celdas = document.querySelectorAll('.celda');

celdas.forEach(celda => {
    celda.addEventListener('click', () => {
        if (celda.textContent === '') { // Si la celda está vacía
            celda.textContent = turno; // Coloca el valor del turno ('X' o 'O')
            turno = turno === 'X' ? 'O' : 'X'; // Cambia el turno
        }
    });
});