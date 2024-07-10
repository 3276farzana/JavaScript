const user={
    _name:'fairy',
    _email:'fairy23@gmail.com',

    get name(){
        return this._name.toUpperCase();
    },
    set name(value){
        this._name=value;
    },
    get email(){
        return this._email.toUpperCase();
    },
    set name(value){
        this._email=value;
    }
    
}

// Object.create(); it's a factory function. by default it's null

const berry=Object.create(user)
console.log(berry.email);

