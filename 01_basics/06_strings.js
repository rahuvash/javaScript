const name="rahul"
const repoCount=50

console.log(name +repoCount+" value")

// use backticks
console.log(`hello my name is 4 ${name} and my repo count is ${repoCount}`)

// with the help of this  we can get the method of strings and their indexes
const gameName= new String("rahul-vashisth")

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('z'));

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString= gameName.slice(0,4)

const aString="   aaa  "
console.log(aString.trim())

const url="https://rahul.com/hitesh%20vashisth";

console.log(url.replace("%20",'-'))

console.log(url.includes('r'))
let split= "my name is rahul"
console.log(split.split(' '));