const myObject1 = {
  js: "javascript",
  cpp: "CPP",
  rb: "ruby",
};

console.log(myObject1.js);

for (const key in myObject1) {
  //   console.log(`${key} for shortcut is for ${myObject1[key]}`);
}

const programming = ["js", "ruby", "python"];

for (const key in programming) {
//   console.log(`${programming[key]}`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "America");
map.set("Fr", "France");
// console.log(map);

for (const key in map) {
    console.log(key);
}