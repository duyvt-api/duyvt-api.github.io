function solveSudoku() {
  const puzzleInput = document.getElementById("inputPuzzle").value;
  const solution = solve(puzzleInput);
  document.getElementById("solution").textContent =
    solution || "No solution found.";
}

function solve(puzzle) {
  // Convert the input puzzle to a 2D array for easier manipulation
  const puzzleArray = [];
  for (let i = 0; i < 9; i++) {
    puzzleArray.push([]);
    for (let j = 0; j < 9; j++) {
      const digit = parseInt(puzzle[i * 9 + j]);
      puzzleArray[i].push(digit);
    }
  }

  // Helper function to check if a number can be placed in a specific cell
  function isValid(num, row, col) {
    // Check if the number is not in the current row or column
    for (let i = 0; i < 9; i++) {
      if (puzzleArray[row][i] === num || puzzleArray[i][col] === num) {
        return false;
      }
    }

    // Check if the number is not in the 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (puzzleArray[i][j] === num) {
          return false;
        }
      }
    }

    return true;
  }

  // Recursive backtracking function
  function solveSudokuRecursive(row, col) {
    if (row === 9) {
      return true; // All cells filled, puzzle solved
    }

    if (col === 9) {
      return solveSudokuRecursive(row + 1, 0); // Move to the next row
    }

    if (puzzleArray[row][col] !== 0) {
      return solveSudokuRecursive(row, col + 1); // Cell already filled, move to the next cell
    }

    for (let num = 1; num <= 9; num++) {
      if (isValid(num, row, col)) {
        puzzleArray[row][col] = num;
        if (solveSudokuRecursive(row, col + 1)) {
          return true; // Found a valid solution
        }
        puzzleArray[row][col] = 0; // Backtrack
      }
    }

    return false; // No valid number found for this cell
  }

  // Start the recursive solving process from the top-left cell (0, 0)
  if (solveSudokuRecursive(0, 0)) {
    // Convert the solved puzzle back to the 81-digit format
    let solution = "";
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        solution += puzzleArray[i][j];
      }
    }
    return solution;
  } else {
    return null; // No solution found
  }
}

// Get the puzzle from the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const puzzleParam = urlParams.get("puzzle");
if (puzzleParam) {
  document.getElementById("inputPuzzle").value = puzzleParam;
  solveSudoku(); // Automatically solve and display the result
}
