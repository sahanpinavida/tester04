"use strict";

// Select DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

const MAX_DIGITS = 6;

// Validate input: accepts optional leading minus followed by 1-6 digits
function validateInput(value) {
  if (!value) return false;
  // Regex: optional minus, then exactly 1 to 6 digits, nothing else
  if (!/^-?\d{1,6}$/.test(value)) return false;
  return true;
}

// Calculate result and detect overflow
function calculateResult(num1, num2, operator) {
  let result = 0;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (Math.abs(result) > 999999) return 'Overflow';
  return result;
}

// Update display
function updateDisplay(message, type = 'result') {
  if (type === 'result') {
    resultDiv.textContent = message;
    errorDiv.textContent = '';
  } else if (type === 'error') {
    errorDiv.textContent = message;
    resultDiv.textContent = '';
  }
}

// Handle button click
function handleCalculation(operator) {
  // Placeholder for Step 3 implementation
  console.log('Calculation requested with operator:', operator);
}

// Filter input to allow only valid characters (digits and optional leading minus)
function filterInput(input) {
  const cursorPosition = input.selectionStart;
  const originalValue = input.value;

  // Remove any characters that are not digits or minus
  let filteredValue = originalValue.replace(/[^\d-]/g, '');

  // Handle minus sign: only allow at the start, and only one
  const hasLeadingMinus = filteredValue.charAt(0) === '-';
  const digitsOnly = filteredValue.replace(/-/g, '');
  filteredValue = hasLeadingMinus ? '-' + digitsOnly : digitsOnly;

  // Update input value if it changed
  if (filteredValue !== originalValue) {
    input.value = filteredValue;
    // Adjust cursor position to account for removed characters
    const newPosition = Math.max(0, cursorPosition - (originalValue.length - filteredValue.length));
    input.setSelectionRange(newPosition, newPosition);
  }
}

// Update button states based on input validation
function updateButtonStates() {
  const isNum1Valid = validateInput(num1Input.value);
  const isNum2Valid = validateInput(num2Input.value);
  const bothValid = isNum1Valid && isNum2Valid;

  // Enable buttons only when both inputs contain valid integers
  addBtn.disabled = !bothValid;
  subBtn.disabled = !bothValid;
}

// Handle input changes and validate
function handleInputChange(input) {
  filterInput(input);
  updateButtonStates();
}

// Event listeners
addBtn.addEventListener('click', () => handleCalculation('+'));
subBtn.addEventListener('click', () => handleCalculation('-'));

// Input event listeners for real-time validation
num1Input.addEventListener('input', () => handleInputChange(num1Input));
num2Input.addEventListener('input', () => handleInputChange(num2Input));

// Enter key support
[num1Input, num2Input].forEach(input => {
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleCalculation('+');
  });
});

// Initialize button states on page load
updateButtonStates();
