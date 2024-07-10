class user{
    constructor(email,password){
        this.email=email;
        this.password=password;//those are properties
    }
    //you can add getter and setter in properties
    //by default for all properties have getter and setter method
    get password(){
        return this.password.toUpperCase()
    }
    // if you set getter then you have to add setter it's vise versa
    set password(value){
        this.password=value
    }
}
const u1=new user('u1@gmail.com',34554);
console.log(user.password);