//var c = 300
let a = 300
if (true) {                // inside if is block scope and outside is global scope, global scope value can be available inside if but inside value cannot be available outside scope , scope means {} in  functions also {} means scope 
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// in code environment scope is different from scope in browser environment

function one(){
    const username = "joyboy"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++





console.log(addone(5))        // here you can  access the function if typed first 
function addone(num){            
    return num + 1
}



addTwo(5)                    // here you cannot access the function if typed first 
const addTwo = function(num){
    return num + 2
}
