//in
let obj = {username:"Imran", mobile:888219};
if('username' in obj){
    console.log(obj.username, obj.mobile);
}

//instanceof

function xyz(){
    this.x = 5;
}

let y = new xyz();
console.log(y);

console.log(y instanceof xyz);//true
console.log(obj instanceof xyz);//false

