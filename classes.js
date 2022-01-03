/*
Classroom -> (class)

teachers : names, ages, classes, speak(), run(), learn(),
students : names, ages, classes, speak(), teach(), 
chairs : quantity, setup()
desk : quantity, clean()
computers : quantity, type, boot(),


getter: functions -> get data
setter: funcetion -> set data

*/

// function student (name,age){
//     // this.name = name;
//     // this.ages = age;
//     let name = name;
//     let age = age;

//     function getName (){
//         return this.name
//     }
//     function setName (x){
//         this.name = x
//     }
    // let sayName = function () {console.log("My name is " + this.name)}
    // let sayAge = function () {console.log("My age is " + this.ages)}
// }



// student.prototype.speak = function (){ ////Function outside of function using prototype (used for dynamic)
//     console.log("I am speaking")
// }

// let Adam = new student("Adam", 100);
// Adam.sayAge();
// Adam.sayName();
// Adam.speak();

// let Steve = new student("Steve", 250)
// Steve.sayAge();
// Steve.speak();

// let arr = new Array(10);
// arr.push();

// console.log(Adam)
// console.log(Steve)

///////////////////////////////////////////////Round TWO///////////////////////////////////////////////////////////

// function Car (model, year){
//     this.model = model;
//     this.year = year;

//     this.drive = function(){
//         console.log("I am Driving a " + this.model + "with the year " +this.year)
//     }
// }

// Car.prototype.fuel =alert("half emtpy") ////Function outside of function using prototype (used for dynamic)

// let honda = new Car ("honda", 2020);

// honda.drive();
// honda.fuel();

// console.log(honda)


function Car (model, year){
    let pModel = model;
    let pYear = year;

    this.getModel = function (){
        return pModel;
    }
    this.setModel = function (x){
        pModel = x;
    }
}


let car = new Car ("honda", 2022);

console.log(car.getModel());

