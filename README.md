# 6-Digit Calculator

A simple web-based calculator that performs basic arithmetic operations. Built with HTML, CSS, and vanilla JavaScript, this lightweight application runs entirely in the browser with no backend dependencies.

## Overview

The 6-Digit Calculator is a client-side web application designed for performing basic arithmetic calculations. It currently supports addition and subtraction operations, with plans to expand to full basic arithmetic including multiplication and division.

### Features

- **Supported Operations**: Addition (+) and subtraction (-), with multiplication and division planned for future releases
- **6-Digit Limit**: Handles integer inputs up to 6 digits (values from -999999 to 999999)
- **Overflow Detection**: Displays an "Overflow" message when results exceed the 6-digit limit
- **Input Validation**: Real-time validation ensures only valid numeric inputs are accepted
- **Responsive Design**: Clean, mobile-friendly interface that works on desktop and mobile browsers
- **Accessible**: Built with semantic HTML and ARIA attributes for screen reader compatibility

### Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Responsive styling with flexbox layout
- **Vanilla JavaScript**: No external libraries or frameworks required

### Deployment

This is a purely client-side application with no server-side dependencies. It can be:

- Opened directly in a web browser from the local filesystem
- Hosted on any static web server
- Deployed to GitHub Pages
- Served via simple HTTP servers (Python, Node.js, etc.)

No build process, compilation, or package installation is required.

## Prerequisites

### Supported Browsers

This application works in any modern web browser. The following minimum versions are officially supported:

- **Google Chrome**: Version 90 or higher
- **Mozilla Firefox**: Version 88 or higher
- **Microsoft Edge**: Version 90 or higher

### Optional Tools

These tools are not required but are helpful for certain installation and running methods:

- **Git**: Required if you want to clone the repository (download the ZIP file as an alternative)
- **Python 3** or **Node.js**: Required only if you want to run a local HTTP server

## Installation

Follow these steps to get a copy of the project on your local machine.

### Option 1: Clone with Git

1. Open your terminal (Command Prompt on Windows, Terminal on macOS/Linux)
2. Navigate to the folder where you want to store the project
3. Run the following command:
   ```
   git clone https://github.com/sahanpinavida/6-digit-calculator.git
   ```
4. Navigate into the project folder:
   ```
   cd 6-digit-calculator
   ```

### Option 2: Download ZIP

1. Visit the repository page on GitHub
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location

## Running the App

There are two ways to run the calculator. Choose the method that works best for you.

### Method 1: Open Directly in Browser (Simplest)

This is the quickest way to start using the calculator:

1. Open your file explorer and navigate to the project folder
2. Find the file named `index.html`
3. Double-click `index.html` to open it in your default browser
4. Alternatively, right-click the file and select "Open with" to choose a specific browser

The calculator should now be running in your browser.

### Method 2: Use a Local HTTP Server

Some browser features work better when served from an HTTP server. Use this method if you encounter any issues with Method 1.

**Using Python (version 3):**

1. Open your terminal and navigate to the project folder
2. Run the following command:
   ```
   python -m http.server 8000
   ```
3. Open your browser and go to: `http://localhost:8000`

**Using Node.js:**

1. Open your terminal and navigate to the project folder
2. Run one of the following commands:
   ```
   npx serve
   ```
   or
   ```
   npx http-server
   ```
3. Open the URL shown in the terminal (usually `http://localhost:3000` or `http://localhost:8080`)

To stop the server, press `Ctrl+C` in the terminal.
