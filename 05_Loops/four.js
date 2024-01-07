const coding = ["js", "ruby", "java", "python", "cpp"];

// higher order function
// coding.forEach(function (item) {
//     console.log(`${item}`);
// })

// coding.forEach((item)=>{
//     console.log(`${item}`);
// })

// function printme(item,index,arr){
//     console.log(`language is => ${item}`);
//     console.log(`index is ${index}`);
//     console.log(`arr is ${arr}`);
// }

// coding.forEach(printme)

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})
