class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username is: ${this.username}`);
    }
}

class teacher extends user{
    constructor(username,email,password){
        super(username) //take it the the user class
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`${this.username} added a new course`);
    }
}

const tch1=new teacher('dr.farzana','farzana@oi.com',75421)

// console.log(tch1);

console.log(tch1.addCourse());
console.log(tch1.logme());

console.log(tch1===teacher);//false
console.log(tch1 instanceof teacher); //to check if tch1 made of teacher; true
console.log(tch1 instanceof user); //true