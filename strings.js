// var str = "hello world"

// console.log(str.charAt(0));

// console.log(str.substring(0,6));

// console.log("h" < "j");  /////// aaaa differant than AAAA

// console.log(str.indexOf('world'))

// console.log(str.indexOf("1"))

/// HOMEWORK 12-30-2021////////////////////////////////////////////
///Page 3-8 of Strings

// var st = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// /*
// loop through the string and save each word into an array skip spaces
// ex ["lorem","ipsum""."]
// */
 
// var re = " ";                 ////////Regular Expression Separator " "  === quote each word in quote //////1st attempt missing grammer/punctuation!!!!!!!!
// var arr = str.split(/\s|\b/);    ////////Split string using expression declared above/FIXED with commands?!
// console.log(arr);


// var text = "I like grumpy cats. Do you?"
// var arr = text.split(/\s|\b/);
// console.log(arr);
/*
https://stackoverflow.com/questions/40881365/split-a-string-into-an-array-of-words-punctuation-and-spaces-in-javascript
*/

// function stringToArray (str){
//     let arr = [];
//     let s = "";
//     for(let i =0; i < str.length; i++){
//         if(str.charAt(i) != ' ' && str.charAt(i) != ',' && str.charAt(i) != '.' ){
//             s = s + str.charAt(i);
//         }
//         else if (s.length > 0){
//             arr.push(s);
//             s = "";
//         }
//     }
//     return arr;
// }

// console.log(stringToArray(st));

/////////////////////////////////////////Problem/////////////////////////////////////////////////

/*
reverse a string:

input; "its a cold, chilly day outside."
output: outside. day chilly cold, a its

*/

// s = "its a cold, chilly day outside."

// function reverseString (str){
//     let reversed = "";
//     for (let i = str.length -1 ; i >= 0 ; i--){
//         reversed += str.charAt(i);
//     }
//     return reversed;
// }

// console.log(reverseString(str)); //Output: "".edistuo yad yllihc ,dloc a sti"

// function reverseString (s){
//     let reversed = ''
//     for (let i = s.length-1; i >=0; i--){
//         reversed += s[i];
//     }
//     // return reversed;
//     let wordReversed = '';
//     let arr = []
//     for (let i = 0; i< reversed.length; i++){
//         if (reversed[i] != ' '){
//             wordReversed += reversed[i]
//         }
//         else{
//             arr.push(wordReversed);
//             wordReversed = ''
//         }
//     }
//     arr.push(wordReversed);

//     let returnString = '';
//     for (let i = 0; i < arr.length; i++){
//         let str = arr[i] + ' ';
//         for (let j = str.length-1; j >=0; j--){
//             returnString += str[j];
//         }
//     }
//     return returnString;
// }

// let s = "its a cold, chilly day outside."
// console.log(reverseString(s));

////////////////////////////////////////////HW ABOVE/////////////////////////////////////////////

