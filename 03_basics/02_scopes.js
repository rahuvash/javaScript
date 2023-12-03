// let a = 10;
// const b = 20;
// var c = 30;

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
}

console.log(a);
// console.log(b);
// console.log(a); not return outside the scope
// console.log(b); not return outside the scope
// console.log(c); return c num

// curly braces are scopes which comes with loops and functions
{
}

// what is closure

function one() {
  const username = "hitesh";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website)
  //   two()
}

one();

// +++++++++++Interesting++++++++++++//
function addone(num) {
  console.log(num+1)
  return num + 1;
}

addone(5)

const addtwo=function(num){
    return num+2
}

addtwo(6)