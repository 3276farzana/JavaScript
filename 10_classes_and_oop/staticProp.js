class user{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username is: ${this.username}`);
    }
    //static doesn't give acess to all object which is instancies with this class
    static createId(){
        return `123`;
    }
}

let cham=new user('chimp');
console.log(cham.createId());

class teacher extends user{
    constructor(username,email){
        super(username) //take it the the user class
        this.email=email

    }
}

const bhom= new teacher('bhem','behm@gmail');
console.log(bhom.logme());
console.log(bhom.createId());