const heroes = ["thor", "ironaman", "spiderman"];
const dc = ["superman", "batman", "flash"];

// heroes.push(dc);
// console.log(heroes);
// console.log(heroes[3][1])
// push update the original array meanwhile concat creates a neww array
all_heroes = heroes.concat(dc);
console.log(all_heroes);

// spread arrays
const all_new_heroes = [...heroes, ...dc];
console.log(all_new_heroes);


const another_array= [1,2,3,[4,5,6],7,[8,9,0,[1,2]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Rahul"));
console.log(Array.from("Rahul"));//convert string into array
console.log(Array.from({
    name:"Rahul"
}));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3))