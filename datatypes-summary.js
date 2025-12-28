// Primitive 

// 7 Types : string , Number , Boolean ,null , undefined ,Symbol -> (to make a thing unique), BigInt 

const score = 100 
const scoreVaue =100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol(123)
const anotheId = Symbol('123')
//console.log(id === anotherId);
//const bigNumber = 858984947897832090n
// Reference ( Non primitive )

// Array, Objects , Functions 

//const heros = ["tony stark","peter parker","miles morales"];
let myObj = {
    name: "somil",
    age: 19,
}

//const myFunction = function(){
    //console.log("Hello world");    
//}

console.log(typeof bigNumber);

//type of val      result
//undefined   =   undefined
//null        =   Object
//boolean     =   boolean 
//number      =   number 
//string      =   string 
//function      = it's actually returns Function but you can also say it object function


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//stack (primitive), Heap(Non-Primitive)
let myYoutubename = "somilbhatcom"
let anothername = myyoutubename
anothername = "luckywithcode"

console.log(myYoutubename);
console.log(anothername);

let user = { 
    email: "user@googlr.com",
    upi: x"user@ybl",
}
