document.getElementById('convertButton').addEventListener('click', function() {
  var text = document.getElementById('userinput').value;
  var regex = /^[A-Za-z]+$/;
  if (regex.test(text)){
  var convertedText = convertToPigLatin(text);
  document.getElementById('result').textContent = convertedText;
  }
  else {
    document.getElementById('result').textContent = "Enter a valid string"
    document.getElementById('userinput').value = ''
  }
});
  