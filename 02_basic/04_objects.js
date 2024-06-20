// const tinderuser=new Object //non singleton

const tinderuser={
}
tinderuser.id='123rwe';
tinderuser.name='dam';
tinderuser.isLoggedin=false;
// console.log(tinderuser);
const regularuser={
    email:'name@gmail.com',
    fullname:{
        userFullname:{
            firstName:"farzana",
            lastName:'kamal'
        }
    }
}
// console.log(regularuser.fullname.userFullname.lastName);

const obj1={
    1:'a',
    2:'b'
}
const obj2={
    10:'a',
    20:'b'
}

// const obj3={obj1,obj2}//that's not good akta obj er bitor onno r akta asbe

// const obj3=Object.assign({},obj1,obj2);
// const obj3=Object.assign(obj1,obj2);//2 taai same but uporer ta best practice er thke best spread r ta
const obj3=Object.assign(...obj1,...obj2);
console.log(obj3);

//aray of objects
const users=[
    {
        id:1,
        name:'a'
    },
    {
        id:2,
        name:'b'
    }
]
users[0].email;

console.log(Object.keys(tinderuser));// it will return the value in array
console.log(Object.entries(tinderuser));// every key value k akta kore array banay r seta array te return kore

console.log(tinderuser.hasOwnProperty('isLogged'));

//destructuring
const course={
    coursename:'js',
    courseInstructor:'jade',
    price:369
}
const{courseInstructor}=course;
console.log(courseInstructor);
//or
const{courseInstructor:instructor}=course;
console.log(instructor);

//json, json doesn't have any name, in json keys and values will be string
// {
//    "name":'js',
//    "courseinstructor":'jade',
//    "price":'free'
// }