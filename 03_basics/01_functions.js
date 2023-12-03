const myName = () => {
  console.log("R");
  console.log("A");
  console.log("H");
  console.log("U");
  console.log("L");
};

// myName();
//  my name is reference and () is executioner;

// whenever we create a function we give it parameters and the same function we call and pass the parameters it calls arguments
// const addTwoNumbers = (a, b) => {
//   console.log(a + b);
// };

const addTwoNumbers = (a, b) => {
  let result = a + b;
  return result;
};

//whenever a code is written after the return the code wouldn't be reachable

addTwoNumbers(3, 1);

function loginUserMessage(username = "Sam") {
  if (username) {
    return `${username} just logged in`;
  }
   return console.log('please enter a username')

}

console.log(loginUserMessage());
