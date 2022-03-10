function square(num){

    //let n2;
   
    function getSquare(n1){
        
        function getSquareFromInside(n2){
            console.log(n2*n2);
        }
        
        getSquareFromInside(n1);
    }
    getSquare(num)
}

square(5);