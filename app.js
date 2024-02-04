// Add a click event listener to the button with the ID 'convertButton'
document.getElementById('convertButton').addEventListener('click', function() {
  
  // Retrieve the value from the input element with the ID 'userinput'
  var text = document.getElementById('userinput').value;

  // Define a regular expression to check if the input contains only letters
  var regex = /^[A-Za-z]+$/;

  if (text.length > 20) {
    alert("The word to translate is too large. The limit of characters is 20.");
    document.getElementById('result').textContent = "Enter a valid string";
    document.getElementById('userinput').value = '';
  }
  // Test if the input text matches the regex (contains only letters)
  else if (regex.test(text)){
    // Convert the text to Pig Latin (assuming 'convertToPigLatin' is a defined function)
    var convertedText = convertToPigLatin(text);

    // Display the converted text in an element with the ID 'result'
    document.getElementById('result').value = convertedText;

    // Create a new div element to represent a row in the history of conversions
    var newRow = document.createElement('div');
    newRow.className = 'row';

    // Create the first column for the original text and add it to the row
    var firstCol = document.createElement('div');
    firstCol.className = 'col';
    firstCol.textContent = text;

    // Create the second column for the converted text and add it to the row
    var secondCol = document.createElement('div');
    secondCol.className = 'col';
    secondCol.textContent = convertedText;

    // Append the two columns to the new row
    newRow.appendChild(firstCol);
    newRow.appendChild(secondCol);

    // Select the history section's container and the first header within it
    var targetDiv = document.querySelector('#history');
    var targetElement = targetDiv.querySelector('h5');
    
    // Insert the new row after the header in the history section
    targetElement.insertAdjacentElement('afterend', newRow);

    // Clear the input field after conversion
    document.getElementById('userinput').value = '';
  }
  else {
    // Alert the user if the input is not valid and clear the input and result fields
    alert("Your input is not correct.\n Make sure there is only 1 word that contains only letters.");
    document.getElementById('result').textContent = "Enter a valid string";
    document.getElementById('userinput').value = '';
  }
});
  
// Add a keydown event listener to the input field with the ID 'userinput'
document.getElementById('userinput').addEventListener('keydown', function(event){
  // Check if the key pressed is the Enter key
  if (event.key == 'Enter') {
    // Prevent the default action of the Enter key
    event.preventDefault();
    // Trigger a click event on the 'convertButton'
    document.getElementById('convertButton').click();
  }
});
