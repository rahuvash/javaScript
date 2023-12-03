// There are two ways to define an array
// 1.Literal
//2.Constructor
// - Object.create

//Singleton

// object literals

const mySym = Symbol("key1");
const js_user = {
  name: "hitesh",
  "full name": "rahul vashisht",
  [mySym]: "myKey1",
  age: 22,
  location: "faridabad",
  email: "rahul@123",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(js_user.email);
console.log(js_user["full name"]);
console.log(typeof js_user[mySym]);

js_user.email = "chatgpt@gmail.com";
// Object.freeze(js_user);
js_user.email = "google@gmail.com";
console.log(js_user);

js_user.greeting = function () {
  console.log("Hello Js User");
};

js_user.greetingTwo=function(){
    console.log(`hello js user ${this.name}`)
}

console.log(js_user.greetingTwo());
