// Node installer -
//  - Node Package Manage - NPM
//  - Node Runtime Environment - NRE
//  - Node Core Module - eg. path, http, os, events etc

console.log("Hello Angular");

// Arrow function - Lambda Expression ()=> one liner functions

//Vanilla JS
var numbers = [1, 2, 3, 4, 5];
var newArr = numbers.map(function(value){
    return value * 2;
})
console.log(newArr);  //[2,4,6,8,10]

// Arrow
var newArr = numbers.map(value => value * 2);
console.log(newArr); //[2,4,6,8,10]

// Template String - Embed variables within string; Multiline string without (+)
// " " | ' ' | ` `

 var username = "Foo";
 var age = 32;

 var str = `Hello ${username}, You are ${age} years old!`

 console.log(str);  //Hello Foo, You are 32 years old!

// Constants and block scope - restricts the scope of variables to the nearest curly braces - { }
// - let
// - const

// function display(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING";
//         //console.log(FLASH);             // Reference Error
//     }else{
//         let FLASH = "FALSHING"
//     }
// }

//  display([1,2,3,4]);


// const USERNAME = "Foo";

// const user = {
//     firstName : "Foo"
// }

// user = {
//     firstName : "Bar"
// }

// user.firstName = "Bar";
//console.log(user.firstName);            // ?


// Destructuring - split the collection into individual elements - Object | Array

 let friends = ["Foo", "Bar", "Bas", "Baz"];

 let [arr1, arr2, arr3, arr4] = friends;

 console.log(arr3);   //Bas

let obj = {
    firstName : "Foo",
    lastName : "Bar",
    age1 : 32
}

let {firstName, lastName, age1} = obj;
console.log(lastName, firstName, age1);   //Bar,Foo,32

let user = {
    firstName2 : "Foo",
    age2 : 32,
    address : {
        city : "Bengaluru",
        street : "201, Main Road"
    },
    friends : ["Bar", "Bam", "Bas"]
}

let {
    firstName2, age2,
    address : { city , street },
    friends : [f1, f2, f3]
} = user;

console.log(firstName2, age2, city, street, f1, f2, f3 ); //Foo 32 Bengaluru 201, Main Road Bar Bam Bas

let users = [
    { email: "test1@test.com", age: 32 },
    { email: "test2@test.com", age: 33 },
    { email: "test3@test.com", age: 34 },
    { email: "test4@test.com", age: 35 },
]

let [
    { email : e1, age : a1 },
    { email : e2, age : a2 },
    { email : e3, age : a3},
    { email : e4, age : a4},
] = users;

 console.log(e3, a2);    //test3@test.com, 33

// Spread & Rest operator ( ... )
// - Rest : creates the collection from inidividual elements; parameter list;

function display(username, ...args){
    console.log(args[0]);                   // ?
}

display("Foo")
display("Foo", 32)
display("Foo", 32, true)

// - Spread : splits the collection
let numbers1 = [3,4,5];

let newNumber = [1,2, ...numbers1, 6,7,8];

console.log(newNumber);         // [1,2,3,4,5,6,7,8]

console.log(newNumber);         // [1,2,[3,4,5],6,7,8]


// Classes & Inheritance
class Student{
    constructor(email , age){
        this.email = email;
        this.age = age;
    }
    getDetails(){
        return this.email + " " + this.age;
    }
}

 let foo = new Student("foo@test.com", 34);
 console.log(foo.getDetails());   // foo@test.com 34


 // Module system


// Decorator - Annotations - Simple Functions with some configuration object
//  - Class
//  @Component({}) | @Directive({}) | @Pipe({}) | @Injectable({}) | @NgModule({}) 

//  - Property
// @Input() | @Output()

//  - Parameters
// @Inject | @Optional

//  - Methods
// @HostListener()

// Angular Building Blocks - Component | Directives | PIpes | Service | Modules






// Additional types - string, number, boolean, function, object, date, arrays etc
//  - void
//  - any
//  - enum






