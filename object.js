/*
    Create and object with values that as follows

    1- Number
    2- String
    3 - array
    4 - function

*/

var obj = 
{
    "first": 1,
    "second": "hello",
    "third": ["hi", 2, "why"],
    "fourth": function (){console.log(1)}
}
var x = obj.fourth;
console.log (x);