function validateUser(name, password){
    if(name==""){
        console.log("Invalid user name");
        return;
    }
    
    
    if(password== "" || password.length < 8){
        console.log("Invalid password");
        return;

    }
    console.log("Yes validate successfully")

}
let username = "Imaran";
let password = "abcd3";
validateUser(username, password);