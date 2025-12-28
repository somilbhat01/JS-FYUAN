const name = "somil"
const repoCount =  50

//console.log(name + repocount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('somil-FY-1')

//console.log(gameName[0]);  s
//console.log(gameName.__proto__);  {}this is object

//console.log(gameName.length); 7
//console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

//const newString = gameName.substring(0,4) 
//console.log(newString);

const anotherString = gameName.slice(-8.4)
console.log (anotherString);

const newStringName = "    somil     "
//console.log(newStringName.trim()); start and end trim

const url = "https://somilfy.com/somilfy%1bhat"

console.log(url.replace('%1' , '-'));
console.log(url.includes('fy'));

console.log(gameName.split('-'));