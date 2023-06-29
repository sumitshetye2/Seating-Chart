// Reference necessary elements
const seatsPerRowInput = document.getElementById('seats-per-row-input');
const addRowBtn = document.getElementById('add-row-btn');
const seatLayout = document.getElementById('seat-layout');

// Handle Add Row button click
addRowBtn.addEventListener('click', () => {
  const seatsPerRow = parseInt(seatsPerRowInput.value);

  // Validate user input
  if (isNaN(seatsPerRow) || seatsPerRow <= 0) {
    alert('Invalid input. Please enter a valid number of seats per row.');
  } else {
    // Append new row to the seat layout
    generateRow(seatsPerRow);
  }
});

// Function to generate a row
function generateRow(seatsPerRow) {
  const rowElement = document.createElement('div');
  rowElement.className = 'seat-row';

  for (let column = 1; column <= seatsPerRow; column++) {
    const seatElement = document.createElement('div');
    seatElement.id = `seat-${seatLayout.childElementCount + 1}-${column}`;
    seatElement.className = 'seat';
    seatElement.innerText = `${seatLayout.childElementCount + 1}-${column}`;
    rowElement.appendChild(seatElement);
  }

  seatLayout.appendChild(rowElement);

  // Handle seat selection
  rowElement.addEventListener('click', (event) => {
    const selectedSeat = event.target;

    // Toggle selected class
    selectedSeat.classList.toggle('selected');

    // Update availability or perform any other necessary actions
  });
}
