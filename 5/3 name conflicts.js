function outer(num){
    let x = 5;
    function inner(x){
        // Local got prefence
        let num = 7;
        console.log(x);//
        console.log(num);//
    }
    inner(4);
}

outer(3);