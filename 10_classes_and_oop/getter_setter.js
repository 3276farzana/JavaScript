class user{
    constructor(email,password){
        this.email=email;
        this.password=password;//those are properties
    }
    //you can add getter and settrCase()er in properties
    //by default for all properties have getter and setter method
    get email(){
        return this._email.toLowerCase()
        //in getter we always had to return the value
    }
    set email(value){
        this._email=value
        //in setter we don't return value
    }
    get password(){
        return this.pass.toUpperCase() //it can't be the same name as the properties name or else it maximize the stack start race with constructor
    }
    // if you set getter then you have to add setter it's vise versa
    set password(value){
        this.pass=value
    }
}
const u1=new user('uASER1@gmail.com','hgfh');
console.log(u1.password);
console.log(u1.email);