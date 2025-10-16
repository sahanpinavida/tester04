"use strict";

// Select DOM elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addBtn = document.getElementById('addBtn');
const subBtn = document.getElementById('subBtn');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

const MAX_DIGITS = 6;

// Validate input
function validateInput(value) {
  if (!value) return false;
  // Optional leading minus, followed by 1 to MAX_DIGITS digits
  const regex = new RegExp(`^[-]?\\d{1,${MAX_DIGITS}}$`);
  if (!regex.test(value)) return false;
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

// Update button states based on input validation
function updateButtonStates() {
  const isNum1Valid = validateInput(num1Input.value);
  const isNum2Valid = validateInput(num2Input.value);
  const bothValid = isNum1Valid && isNum2Valid;

  // Enable buttons only when both inputs are valid
  addBtn.disabled = !bothValid;
  subBtn.disabled = !bothValid;
  addBtn.setAttribute('aria-disabled', !bothValid);
  subBtn.setAttribute('aria-disabled', !bothValid);
}

// Handle button click

// Input event listeners for validation and button state updates
num1Input.addEventListener('input', () => {
  const isValid = validateInput(num1Input.value);
  if (!isValid && num1Input.value) {
    updateDisplay('Invalid input', 'error');
  } else {
    updateDisplay('', 'error');
  }
  updateButtonStates();
});

num2Input.addEventListener('input', () => {
  const isValid = validateInput(num2Input.value);
  if (!isValid && num2Input.value) {
    updateDisplay('Invalid input', 'error');
  } else {
    updateDisplay('', 'error');
  }
  updateButtonStates();
});

// Event listeners
addBtn.addEventListener('click', () => handleCalculation('+'));
subBtn.addEventListener('click', () => handleCalculation('-'));

// Enter key support
[num1Input, num2Input].forEach(input => {
  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') handleCalculation('+');
  });
});
