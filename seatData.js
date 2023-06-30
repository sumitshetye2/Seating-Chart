// Reference necessary elements
const seatsPerRowInput = document.getElementById('seats-per-row-input');
const addRowBtn = document.getElementById('add-row-btn');
const seatLayout = document.getElementById('seat-layout');
const price = document.getElementById('price-of-row');
let totalCost = document.getElementById('cost-of-seats-selected'); 
let totalSeats = document.getElementById('num-selected-seats');
let seatsSelected = document.getElementById('seats');
let seats = [];
let charCodeOffset = 1
let row = String.fromCharCode(64 + charCodeOffset);

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
    charCodeOffset = charCodeOffset + 1;
    row = String.fromCharCode(64 + charCodeOffset);
  }

});

// Handle Edit Row button click



// Function to generate a row
function generateRow(seatsPerRow) {
  const rowElement = document.createElement('div');
  rowElement.className = 'seat-row';

  for (let column = 1; column <= seatsPerRow; column++) {
    //const seatLabel = String.fromCharCode(64 + column);
    const seatElement = document.createElement('div');
    seatElement.id = `seat-${row}-${column}`;
    seatElement.className = 'seat seat-custom';
    seatElement.innerText = `${row}-${column}`;
    seatElement.dataset.cost = price.value;
    rowElement.appendChild(seatElement);
  }

  seatLayout.appendChild(rowElement);

    // Handle seat selection
    rowElement.addEventListener('click', (event) => {
    const selectedSeat = event.target;

    // Toggle selected class
    selectedSeat.classList.toggle('selected');



    //update total cost of seats selected
    if(selectedSeat.classList.contains('selected')){
      totalSeats.innerText = parseInt(totalSeats.innerText) + parseInt(1);
      totalCost.innerText = parseInt(totalCost.innerText) + parseInt(selectedSeat.dataset.cost);
      seats.push(selectedSeat.innerText);
      seatsSelected.innerText = seats.join(', ');
      
    } else {
        totalCost.innerText = parseInt(totalCost.innerText) - parseInt(selectedSeat.dataset.cost);
        totalSeats.innerText = parseInt(totalSeats.innerText) - parseInt(1);
        seats.splice(seats.indexOf(selectedSeat.innerText), 1);
        seatsSelected.innerText = seats.join(', ');
    }
    // Update availability or perform any other necessary actions
  });
}


