function setUser(username) {
    this.username=username
}

function createuser(username,email,password){
    setUser(username) //to run this function you have to call it. but here it's just reference
    setUser.call(this, username) //to hold it's reference we use cll
    this.email=email
    this.password=password
}
const pai=new createuser('pai','pai32@yahoo.com',9856);
console.log(pai);