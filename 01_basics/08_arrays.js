 const myArr = [10, 20, 30, 40, 50];
 //const myHeroes = ['MoonKnight', 'Batman', 'Spider-Man', 'Batmann'];

// const myArr2 = new Array(10,20,30,40)
//console.log(myArr[3]); // 40
// console.log(myHeroes[2]); // Spider-Man


// Array Methods
// myArr.push(51); // adds 60 at the end
//console.log(myArr);
// myArr.pop(); // removes last element

//console.log(myArr);
//myArr.unshift(10);

//myArr.shift();

// console.log(myArr.includes(30)); // true
// console.log(myArr.includes(100)); // false
// console.log(myArr);

// console.log(myArr.indexOf(40));  3
// console.log(myArr.indexOf(100));  -1 meaning not found


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);


//slice and splice
console.log("A",myArr);
const myna1 = myArr.slice(1,3); // does not modify the original array

console.log(myna1);
console.log("B",myArr);

const myna2 = myArr.splice(1,3); // modifies the original array
console.log("c",myArr);
console.log(myna2);

