# 6-Digit Calculator

A simple web-based calculator that performs basic arithmetic operations on numbers up to 6 digits. Built with HTML, CSS, and vanilla JavaScript with no external frameworks or dependencies.

## Features

- Addition and subtraction operations
- Input validation for 6-digit numbers (including negative numbers)
- Overflow detection for results exceeding 6 digits
- Clean, responsive user interface
- Accessible design with ARIA attributes and keyboard support

## Folder Structure

```
├── src/           # Application source code
│   ├── index.html # Main HTML file
│   ├── styles.css # Stylesheet
│   └── script.js  # JavaScript logic
├── docs/          # Documentation (future)
├── tests/         # Test cases (future)
├── .gitignore     # Git ignore rules
├── LICENSE        # MIT License
└── README.md      # This file
```

## Getting Started

### Option 1: Open Directly

Open `src/index.html` in any modern web browser.

### Option 2: Static File Server

Serve the `src/` folder using any static file server:

```bash
# Using Python
python -m http.server 8000 --directory src

# Using Node.js (npx)
npx serve src
```

Then open `http://localhost:8000` in your browser.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
