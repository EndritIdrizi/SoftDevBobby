// Predefined word to check against
const savedWord = "aplpe";

// Function to handle word checking with colored feedback
function checkWord() {
  const userInput = document.getElementById("wordInput").value.toLowerCase();
  const resultContainer = document.getElementById("results");
  const errorElement = document.getElementById("error-message"); // Error message element

  // Clear previous error message
  errorElement.textContent = "";  // Remove error message before new validation

  // Validate input length and check for non-letter characters
  if (userInput.length != 5 || !/^[A-Za-z]{5}$/.test(userInput)) {
    errorElement.textContent = "Please enter a valid 5-letter word (only letters allowed).";
    errorElement.style.color = "red";
    return;
  }

  // Create a frequency map for letters in the saved word
  const letterCount = {};
  for (const letter of savedWord) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  // Create a result row for the current guess
  const resultRow = document.createElement("div");
  resultRow.style.display = "flex";
  resultRow.style.gap = "10px";
  resultRow.style.marginBottom = "10px";

  // Compare each letter and generate styled output
  for (let i = 0; i < savedWord.length; i++) {
    const letter = userInput[i];
    const span = document.createElement("span");

    // Style each letter depending on its correctness
    span.textContent = letter;
    span.style.padding = "10px";
    span.style.margin = "5px"; // Add margin for spacing
    span.style.fontSize = "50px";
    span.style.display = "inline-block";

    if (letter === savedWord[i]) {
      span.style.backgroundColor = "green"; // Green for correct position
      span.style.color = "black"; // Text color for contrast
      letterCount[letter]--; // Decrease count as it's matched
    } else if (savedWord.includes(letter) && letterCount[letter] > 0) {
      span.style.backgroundColor = "yellow"; // Yellow for wrong position
      span.style.color = "black"; // Darker text for yellow background
      letterCount[letter]--; // Decrease count as it's used
    } else {
      span.style.backgroundColor = "red"; // Red for not in word
      span.style.color = "black"; // Text color for contrast
    }

    resultRow.appendChild(span); // Add styled letter to the result row
  }

  // Append the result row to the result container
  resultContainer.appendChild(resultRow);

  // Clear the input field for the next guess
  document.getElementById("wordInput").value = "";
}

// Add event listener to the button
document.getElementById("checkButton").addEventListener("click", checkWord);
