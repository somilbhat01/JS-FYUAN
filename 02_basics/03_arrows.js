const user = {
    username: "hitesh",
    price: 999,                 //this means current context 

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
                      
}
//browser has global object that is known as window 

user.welcomeMessage()    
 user.username = "sam"      
 user.welcomeMessage()    
 
// console.log(this);     if we use it here {} will come 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);        function cannot use this  
// }                           here cause value will be undefined
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
    let username = "hitesh"      
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2   imp.

// const addTwo = (num1, num2) => ( num1 + num2 ) imp.

const addTwo = (num1, num2) => ({username: "hitesh"})   
                    //parentheses is imp here ()

console.log(addTwo(3, 4))      


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(funciton () {})   just see this syntax we coould use stuff ike this 
//myArray.forEach(() => {})
//                      ()




//within curly braces {} and then inside function is possible if you want to  define "this" and then we can execute at last 
// const man = {
//     Name : "lucky",
//     age : 19 ,
//      Joyboy : function(){

// console.log(this)

//       }
    
// }
// //console.log(this)
// man.Joyboy()
