// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// The stuff above means ()() first is function and another is execute


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// iffe is used cuz global scope causes pollution and to not get affected by that pollution effe is used 