const myHeroes = ['MoonKnight', 'Batman', 'Spider-Man'];
const myVillains = ['Joker', 'Green Goblin', 'thanos'];

//myHeroes.push(myVillains);
// console.log(myHeroes);

// console.log(myHeroes[3][0]);  Accessing 'Joker' from the nested array


// const allmyHeroes = myHeroes.concat(myVillains);
//  console.log(allmyHeroes); Merging two arrays using concat() method

const all_new_heroes = [...myHeroes, ...myVillains];
console.log(all_new_heroes); // Merging two arrays using spread operator


const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // Flattening nested arrays using flat() method

console.log(Array.isArray("somil")); // Checking if a variable is an array using Array.isArray() method

console.log(Array.from("Lucky")); // Creating an array from a string using Array.from() method

console.log(Array.from({name: "somil"})); // Intresting use of Array.from() method returns an empty array cause it only works with iterable objects


let score1 = 100 
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Creating an array from individual elements using Array.of() method