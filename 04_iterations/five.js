const coding = ["js", "ruby", "java", "python", "cpp"]


//This is a callback function so no name is there for the function and () they are parameter they hold the value for array that's the reason (val) is present below


// coding.forEach( function (val){ 
//     console.log(val);
// } )

// coding.forEach( (item) => { callback function use with arrow met.
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) 

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )