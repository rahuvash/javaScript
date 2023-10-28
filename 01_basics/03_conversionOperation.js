let score = null;

// console.log(typeof score);

// const {score} = req.body;

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//typeof(NaN)==> number
// console.log(typeof valueInNumber);

/*
Notes after type conversion to number
"33"=> 33
"33abc"=>NaN
null=>0
true=>1
*/

let isLoggedIn = 1;
let boolenaLoggedIn = Boolean(isLoggedIn);
// console.log(boolenaLoggedIn);
// output true

// 1=>true; 0=>false
// ""=> false
// "rahul"=>true

/***************Operation**********/

let value = 3;
let negVal = -value;
console.log(negVal);

// console.table([2+2,2-2,2*2,2**2,2/3,2%3])

let str1 = "1 ";
let str2 = "Rahul";
let str3 = str1 + str2;
console.log(str3);

/*the auotmatic type conversion in javascript is called coercion */
let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter=100;

/*prefix and postfix mdn*/
gameCounter++;
++gameCounter;

console.log(gameCounter);


