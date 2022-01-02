// var str = "hello world"

// console.log(str.charAt(0));

// console.log(str.substring(0,6));

// console.log("h" < "j");  /////// aaaa differant than AAAA

// console.log(str.indexOf('world'))

// console.log(str.indexOf("1"))

/// HOMEWORK 12-30-2021////////////////////////////////////////////
///Page 3-8 of Strings

var str = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// /*
// loop through the string and save each word into an array skip spaces
// ex ["lorem","ipsum""."]
// */
 
// var re = " ";                 ////////Regular Expression Separator " "  === quote each word in quote //////1st attempt missing grammer/punctuation!!!!!!!!
var arr = str.split(/\s|\b/);    ////////Split string using expression declared above/FIXED with commands?!
console.log(arr);


// var text = "I like grumpy cats. Do you?"
// var arr = text.split(/\s|\b/);
// console.log(arr);
/*
https://stackoverflow.com/questions/40881365/split-a-string-into-an-array-of-words-punctuation-and-spaces-in-javascript
*/