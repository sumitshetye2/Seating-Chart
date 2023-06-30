// Reference necessary elements
const seatsPerRowInput = document.getElementById('seats-per-row-input');
const addRowBtn = document.getElementById('add-row-btn');
const seatLayout = document.getElementById('seat-layout');
const price = document.getElementById('price-of-row');
let totalCost = 0; 

// Handle Add Row button click
addRowBtn.addEventListener('click', () => {
  const seatsPerRow = parseInt(seatsPerRowInput.value);

  // Validate user input
  if (isNaN(seatsPerRow) || seatsPerRow <= 0) {
    alert('Invalid input. Please enter a valid number of seats per row.');
  } else if (isNaN(price.value) || price.value <= 0){
    alert('Invalid input. Please enter a valid price for the row.');
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
    const seatLabel = String.fromCharCode(64 + column);
    const seatElement = document.createElement('div');
    seatElement.id = `seat-${seatLabel}-${column}`;
    seatElement.className = 'seat';
    seatElement.innerText = `${seatLabel}-${column}`;
    seatElement.dataset.cost = price.value;
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
