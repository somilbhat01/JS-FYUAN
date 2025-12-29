// singleton 
// literal does not create a singleton object; it creates a new object each time it is evaluated.
// Constructor functions can be used to create singleton objects by ensuring that only one instance of the object is created and returned.
// ( Object.create ) can also be used to create singleton objects by creating a new object that inherits from a prototype object.
//object literal

const mySym = Symbol("key1");


const JsUser = {

    name: "Alice",
    "full name": "Alice Marrie",
    [mySym]: "myKey1",
    age: 25,
    email: "alice@example.com",
    isLoggedIn: false,
    lastLoginDays : [ "Monday", "Wednesday", "Friday" ]
}

// console.log(JsUser.email); //does not work here
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // you have to use bracket notation to access properties with spaces you cannot use dot notation

// console.log(JsUser.mySym); // undefined
// console.log(typeof JsUser.mySym); // undefined

 //To use a symbol as a key, you need to use bracket notation
// console.log(JsUser[mySym]); // symbol key accessed using bracket notation
//  console.log(typeof JsUser[mySym]); // string


//  JsUser.age = "29"; //updating existing property
//  console.log(JsUser.age); //you can change the data type of the property value by = assigning a new value of a different type.

//  Object.freeze(JsUser); // Freezing the object to prevent further modifications

//  JsUser.age = 30; // This will not change the age property as the object is frozen
//  console.log(JsUser.age); // still 29


 JsUser.greeting = function(){
    console.log("Hello Lucky what's up?");

 }
 
 JsUser.greeting2 = function(){
     console.log(`Hello Js User,${this.name}`);
    }
    
    console.log(JsUser.greeting());
    console.log(JsUser.greeting2());
    

