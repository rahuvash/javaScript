//Immediately Invoked Function Expressions (IIFE)

(function one(){
    // named iife
    console.log(`DB Connected`);
})();

// (function)()

((name)=>{
    console.log(`db connected tw0 ${name}`)
})("rahul");