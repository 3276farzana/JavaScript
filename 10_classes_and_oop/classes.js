class user{
    constructor(username,email,password){
        this.name=username
        this.email=email
        this.password=password
    }
    encryptPassword(){//method
        return `${this.password}abrc`
    }
    changeCase(){
        return `${this.name.toUpperCase()}`
    }
}

const pam=new user('berry','berry@io.com',265416)
console.log(pam.encryptPassword());
console.log(pam.changeCase());

//Behind the scene
function user(username,email,password) {
    this.name=username
    this.email=email
    this.password=password
}

user.prototype.encryptPassword=function(){
    return `${this.password}dfd`
}

const jam=new user('berry','berry@io.com',265416)
console.log(pam.encryptPassword());