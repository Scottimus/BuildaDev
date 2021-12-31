/*  

you go to the store to buy treats for your dog to take him for a walk on xmas night.
He likes apples: $2, oranges: 3$, carrots: $1.00 and icecream: $10

You need to create a program to behave like a cashier.

when you scan items in they scan in at the price depending on amount

you need to create a function that can caculate any quantity of these items and return the receipt (final cost)

Data Structures that I need you to use:
1. Array (optional)
2. Object

*/
// let obj = {

// };

// Const food_items{
//     "apples": 2,
//     "oranges": 3,
//     "carrots": 1.00,
//     "icecream": 10
// }

// function foo () {
//     var cost = 0
//     //write code here

//     return cost;
// }

//Remove first element in an array by moving everything from original array to new array

    //[1,4,7,9,"hello"]
    //[4,7,9,"hello"]


// var array = [1,4,7,9,"hello"];

// for (var i = 0; i < 1; ++i)
//     array[i] = array[i + i];

// console.log(array)


// const array = [1,4,7,9,"hello"];
// console.log(array);

// const shift = array.shift();
// console.log(array)

// function removefirst (arr){
//     let newArr = [] ;

//     for (let i = 1; i < arr.lenth - 1; i++){
//         newArr[i-1] = arr[i]
//     }
//     newArr[arr.length - 2] = arr[arr.length - 1];

//     return newArr;
// }

// var arrs = ["hello",99,34,67,91,102]

// console.log(removefirst(arrs))

// let arr = ["hello",1,8,34,20,19];

// // console.log(arr.splice(0));
// console.log(arr.splice(1,3));
// // console.log(arr.splice(0,2,1000,2000,3000));

// let arr = [//0  1  2  3
//             [1,56,77,"43"],  // row 0
//             [89,1,"yo",43],  // row 1
//             [44,true,6,"1000"],  // row 2
//             ["hello",56,77,99]   // row 3
//                         ];
// console.table(arr)

// *Output*
// [1,56,77,"43"],
// [89,1,"yo",43], 
// [44,true,6,"1000"], 
// ["hello",56,77,99]

/* 
    iterate through arr and console log the array and keep its shape
*/

// for (index = 0; index < arr.length; index++){
//     console.log(arr[index])
// }

// for (let i = 0; i < arr.length; i++){
//     let row = "";
//     for (let j = 0; j < arr[i].length; j++){
//         row = row + arr[i][j] + " ";
//     } 
//     console.log(row)
// }

//pg 24 of arrays HW







////////////12-30-2021 - HOMEORK///////////////////

const items = [
    {name: "guitar",     price: 1000},
    {name: "laptop",     price: 3000},
    {name: "cellphone",  price: 1200},
    {name: "surface",    price: 2000},
    {name: "watch",      price: 250}
]

const favnumbers = [1,5,7,4,87,54,43,2000,0]

const bands = [
    {artist: "KoRn",           album:"issues"},
    {artist: "Royksopp",       album:"junior"},
    {artist: "Run the jewels", album:"rtj3"}
]

const favcolor = ["green", "red", "blue","purple", "red"];

//concat///////////////////////////////////////////

// const owneditems = items.concat(bands);
// console.log(owneditems);


//every////////////////////////////////////////////

// const cheapitems = items.every((item) => {
//     return item.price <= 50
// })
// console.log(cheapitems)


//filter////////////////////////////////////////////

// const filtereditems = items.filter((item) => {
//     return item.price <= 1500
// })
// console.log(filtereditems)


//forEach///////////////////////////////////////////

// items.forEach((item) => {
//     console.log(item.name)
// })


//join//////////////////////////////////////////////

// console.log(favcolor.join("-"));


//indexof///////////////////////////////////////////

// console.log(favcolor.indexOf("blue"));


//lastindexof///////////////////////////////////////

// console.log(favcolor.lastIndexOf("red"));


//map///////////////////////////////////////////////

// const itemNames = items.map((item) => {
//     return (item.price,item.name) //or price////FIX  for both to display key and value!
// })
// console.log(itemNames)


//reverse///////////////////////////////////////////

// console.log(favcolor.reverse());


//slice/////////////////////////////////////////////

// console.log(favcolor.slice(2, 4));  ////// doesint include second index


//some//////////////////////////////////////////////

// const cheapitems = items.some((item) => {
//     return item.price <= 500
// })
// console.log(cheapitems)


//sort//////////////////////////////////////////////

// console.log(favnumbers.sort());  //////// modify sort to sort numbers X default is for ALPHA


//tostring//////////////////////////////////////////

// console.log(typeof(favcolor.toString()));   /////typeof to show type object ec string int etc


//valueof///////////////////////////////////////////

// console.log(favcolor.valueOf());     ///////// iterate through prices using funtion etc...