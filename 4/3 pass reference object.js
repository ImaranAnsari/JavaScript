function updateName(student){
    student.name = 'Hi ' + student.name;
    console.log(student); 
}

let objS = {name: "Imran"};
updateName(objS);
console.log("Old Object is  ",objS);
//Pass by reference

