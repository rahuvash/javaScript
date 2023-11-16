const myArray = [0, 1, 2, 3, 4, 5];
constmyHeroes = ["hitman", "saitama", "goku"];
const arrays = new Array(1, 2, 3, 4, 5);

// javascript are resizable.
//can hold different data types in an array.

console.log(myArray[0]);

//shallow array-copy-operation creates the shallow copies of an array
// Shallow copy- copies the property of the same array as well as their reference.
//Deep Copy- Property do not share the same reference.

// Array Method
// myArray.push(6);
// myArray.push(7);
// myArray.pop();

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.includes(0));
// console.log(myArray.indexOf(4));

// const newArr=myArray.join()

//Slice , Splice
console.log("A ", myArray);
const myn1 = myArray.slice(1, 3);
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3);
console.log("C", myArray);
console.log(myn2)
