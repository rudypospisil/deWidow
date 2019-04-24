# deWidowText
Rudy Pospisil, 2019.04.24<br />
Simple function to ensure that a line of text doesn't create a widow (single, dangling word) on the last line by adding a no-breaking space between the last two words.<br />
<br />
Example:<br />
The Quick Brown Fox Jumped over the Lazy<br />
Dogs.<br />
...becomes...<br />
The Quick  Brown Fox Jumped over the<br />
Lazy Dogs.<br />
<br />
This function requires that an id is attributed to the element wrapping the text in question. You will pass this id when calling the function.
