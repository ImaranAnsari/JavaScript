//using loop
function printNumSeries(num){
    for(let i = num; i>0; i--){
        console.log(i);
    }
}
printNumSeries(10);


//without loop print 7,6,5,4,3,2,1 --> recursion
console.log("Using Rec");
function printNumSeriesRecursion(num){
 
    if(num == 0){
        return 0;
    }
    console.log(num);
    num--;
    printNumSeriesRecursion(num);

}
printNumSeriesRecursion(7);
