// let decideFun = 'add';//configuration
let decideFun = 'add';

let getResult;
if(decideFun == 'add'){
    getResult = function(num1, num2){
        console.log(num1+num2);
    }
}else if(decideFun == 'subtract'){
    getResult = function(num1, num2){
        console.log(num1-num2);
    }
}


//call
getResult(5,4);