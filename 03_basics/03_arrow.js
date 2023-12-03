const user={
    username:"hitesh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username}  welcome to website`);
        // console.log(this)
    }
}

//this keyword is for refering current context
user.welcomemessage();

// user.username="sam";
// console.log(user)
// user.welcomemessage();

// console.log(this)  in node env it gives {} context
// function chai(){
//     console.log(this)
// }
// chai();


// const chai = () =>{
//     let username="hitesh"
//     console.log(this)
// }
// chai();