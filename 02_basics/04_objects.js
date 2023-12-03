// const tinderUser = new Object();
const tinderUser ={};

tinderUser.id="123abc";
tinderUser.name="sammy";
tinderUser.isLoggedIn=false;

console.log(tinderUser);


const regularUser={
    email:"raul2gmail.com",
    fullname:{
        userfullname:{
            firstname:"rahul",
            lastname:"vashisth"
        }
    }
}

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"a",
    4:"b"
}

// const obj3= Object.assign({},obj1,obj2);
const obj3 ={...obj1,...obj2};

const users = [
    {
        id:1,
        email:"hello@gmail.com"
    },
    {
        id:2,
        email:"hello@gmail.com"
    },
    {
        id:3,
        email:"hello@gmail.com"
    }
]

users[1].email;
console.log(tinderUser);

//extract keys from the object and create a new arrays
console.log(Object.keys(tinderUser ));
console.log(Object.values(tinderUser ));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
