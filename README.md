# Sudoku Solver

This is a simple web-based Sudoku solver that allows you to input a Sudoku puzzle and automatically displays the solution. The solver uses a backtracking algorithm to find a solution for the provided puzzle.

## Usage

You can use the Sudoku solver by visiting the website and providing the puzzle as a URL parameter. The puzzle should be a string of 81 digits, where empty cells are represented by '0'. For example:

[https://example.com/?puzzle=000000000000000000000000000000000000000000000000000000000000000000000000000000000](https://example.com/?puzzle=000000000000000000000000000000000000000000000000000000000000000000000000000000000)

The solver will automatically display the solution on the page.

## How it Works

The solver is implemented using HTML, JavaScript, and GitHub Pages. It extracts the puzzle from the URL parameter and uses a backtracking algorithm to find a solution. The solver does not require manual input; the solution is displayed automatically when you provide the puzzle in the URL.

## Folder Structure

- `index.html`: The main HTML file that displays the Sudoku solver interface.
- `script.js`: The JavaScript file that handles the puzzle solving based on the URL parameter.
- `README.md`: This README file.
- `MIT-LICENSE.md`: The license file.

## How to Use

1. Clone or download the repository.
2. Host the contents of the repository on GitHub Pages or any web server.
3. To solve a puzzle, use the URL parameter as described above.

## Author

Vo The Duy

## License

This project is licensed under the MIT License - see the [LICENSE](./MIT-LICENSE.txt) file for details.
