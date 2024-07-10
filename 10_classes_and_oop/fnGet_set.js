function user(name,password) {
    this._name=name;
    this._password=password;

    Object.defineProperty(this,'name',{
        get: function(){
            return this._name.toUpperCase(); //here _name have to be the same as the function variable name
        },
        set: function(value){
            this._name=value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password=value
        }
    })
}

const u2= new user('himy','sdfj43saAd')
console.log(u2.name);