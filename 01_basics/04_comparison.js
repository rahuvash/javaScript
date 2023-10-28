// console.log("2" > 1);
// console.log("02" > 1);

console.log(null>1)
console.log(null==0)
console.log(null>=0)

/*
    The reason is that an equality check == and comparisons > ,<
    ,>=,<= work differently.
    comaprisons convert null to a number,treating it as 0
    that is why null>=0 is true
*/
