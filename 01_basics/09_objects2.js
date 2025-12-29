//const tinderUser = new Object(); // object constructor syntax
const tinderUser = {}; // object literal syntax

tinderUser.id = "123abc";
tinderUser.name = "Joy Boy ";
tinderUser.age = 22;
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser ={
    email: "joyboy@example.com",
    fullname: {
        userFullname:{
firstname: "Joy",
lastname: "Boy",
        }
    }
}

console.log(regularUser.fullname.userFullname.firstname);


const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2}; //ok but you can use Object.assign() method as well
console.log(obj3); // Merging two objects using spread operator

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4); // Merging two objects using Object.assign() method 
//you can also use this method to clone an object


// My fun
// const user = {                  //check this method this is very good
//     firstName: "Joy",            //    like c has & javascript has $
//     age: 22,
//     about: function(){
//         console.log(`User's name is ${this.firstName} and age is ${this.age}`);
//     }
// }

// console.log(user.about());

const users = [
        {
        },
        {
          id:1,
          email:"Joy@example.com",
        } ,
        {
        },
        {
        }
]

 users[1].email                       //first value is object then you can use dot notation to access the key value
// console.log(tinderUser);
console.log(users[1].email); // accessing email of second object in users array 

// console.log(Object.keys(tinderUser)); // to get all the keys of an object
// console.log(Object.values(tinderUser)); // to get all the values of an object
// console.log(Object.entries(tinderUser)); // to get all the entries of an object in form of array of arrays // each array contains key and value pair // i dont like this method much


// console.log(tinderUser.hasOwnProperty("name")); // to check if a key is present in an object or not
// console.log(tinderUser.hasOwnProperty("age")); // to check if a key is present in an object or not



const course ={
  coursename: "JavaScript",
  price: 999,
  courseInstructor: "Joy Boy" 
}
//course.courseInstructor
const {courseInstructor} = course; // destructuring object
console.log(courseInstructor); // accessing courseInstructor using destructuring

//YOU CAN ALSO RENAME THE VARIABLE WHILE DESTRUCTURING
const {courseInstructor: instructor} = course;
console.log(instructor); // accessing courseInstructor using destructuring with renaming



// React JS EXAMPLE
// const navbar = ({company}) => {

// }

// navbar(company = "Joy Boy"); // default parameter in function

// console.log(company); // accessing company variable which is declared in function parameter with default value



// {  "name" : "Joy Boy"
//   "coursename" : "JavaScript",
//   "price" : 999,
// }


[
{}, 
{},
{}
]



