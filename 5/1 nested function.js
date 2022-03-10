function getFunction(num){

    function square(){
        // console.log(num*num);//25
        return num*num;
    }

    let sqr = square();
    // console.log(sqr);//25
    return sqr;
}

let result = getFunction(7);
console.log(result);//25