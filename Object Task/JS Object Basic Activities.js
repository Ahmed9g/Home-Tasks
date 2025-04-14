/*1. Create a Basic Object
Create an object named person with the following properties: name, age, and city. Print the object and access the name using dot notation
*/

var person = {
    name:"Ahmed",
    age:"26",
    city:"Giza",

}
console.log(person.name);

/*2. Add New Properties
Using the person object from Activity 1, add a new property called isStudent with a boolean value. Print the updated object.
*/

person.isStudent = true;

console.log(person.isStudent);

/*3. Modify Object Properties
Change the value of the city property in the person object to a different city. Print the updated value.
*/
person.city = "Cairo"
console.log(person.city);

/*4. Delete a Property
Delete the age property from the person object and print the updated object to confirm it's removed.
*/


delete person.age;
console.log(person);

/*5. Use Object.keys() and Object.values()
Create an object called car with properties like brand, model, and year. Use Object.keys() and Object.values() to print all keys and values.
*/

var car = {
    brand: "BMW",
    Year: "2025",
}
console.log(Object.keys(car));
console.log(Object.values(car));

/*6. Loop Through an Object
Create an object named fruit with different fruits as keys and their colors as values. Use a for...in loop to print each fruit and its color.
*/
var fruit ={
    banana: "yellow",
    orange: "orange",
    watermelon:"green",

}
for(var key in fruit){
    console.log(key + " is " + fruit[key]);
}

/* 7.Nested Objects
Create an object called student that contains properties like name, and address. The address itself should be another object with street, city, and zip. Access and print the city value from the nested address.
*/
var student = {
name:"Ahmed",
address:{
    street: "abc street",
    city: "Giza",
    zip:"12211",
}
}
console.log(student.address.city);

/* 8. Array of Objects
Create an array named library that contains three book objects. Each book should have title and author properties. Loop through the array and print the title of each book.
*/
var library = [
    book1={
        title: "b1",
        author: "jack",
    },
    book2={
title:"b2",
author:"john",
    },
    book3={
        title:"b3",
    author:"jess",
    },
]
for(var i=0; i<library.length; i++){
    console.log(library[i].title);
}

/*9. Object with a Method
Create an object named calculator that has two methods: add and subtract. Each method should take two parameters and return the result. Call both methods with some numbers and print the result.
*/
var calculator={
    add:function(a,b){
        return a+b;
    },
    subtract:function(a,b){
        return a-b;
    },
}
console.log(calculator.add(10,15));
console.log(calculator.subtract(20,10));

/*10. Check If Property Exists
Create an object called pet with properties like type, name, and age. Use the in keyword or hasOwnProperty() method to check if the age property exists.

*/
var pet={
    name: "simba",
    type: "cat",
    age: 3
}
// check if age property exits
console.log(pet.hasOwnProperty("age")); //with hasOwnProperty()
console.log("age" in pet); //with in keyword