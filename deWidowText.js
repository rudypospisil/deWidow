// Rudy Pospisil, 2019.04.24
// Simple function to ensure that a line of text doesn't create a widow (single, dangling word) on the last line by adding a no-breaking space between the last two words.
// Example:
// The Quick Brown Fox Jumped over the Lazy
// Dogs.
// ...becomes...
// The Quick  Brown Fox Jumped over the
// Lazy Dogs.
//
// This function requires that an id is attributed to the element wrapping the text in question.

// Pass in the id of the element containing the text that you want to deWidow.
function deWidowText(eID)
  {
   // Break the sentence into an array of the individual words using the spaces as the delimiter. 
    let stringArray = document.getElementById(eID).innerHTML.split(" ");
    // Get the number of array elements.
    let stringArrayLength = stringArray.length;

    // Only do this for sentences with more than one word, otherwise you'll get a leading space.
    if(stringArrayLength > 1)
    {
      // Take the second to last word and combine it with a no-breaking space and the last word.
      // Add indices if you want more than two words to appear on the last line.
      stringArray[stringArrayLength - 2] += "&nbsp;" + stringArray[stringArrayLength - 1];
      // Remove the last word which is now duplicated.
      stringArray.pop();
      // Recreate the string by joining the words with spaces in between. The last "word" will actually be the last two words with a no-breaking space.
      newString = stringArray.join(" ");
      // Update the text of the element with the new text.
      // You could also choose to return the new string, if so desired.
      // return newString;
      document.getElementById(eID).innerHTML = newString;
    }
  }