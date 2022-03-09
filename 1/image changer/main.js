let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    console.log();
    if(mySrc==='image/image.png'){
        myImage.setAttribute('src','image/image1.jpeg');
    }else{
        myImage.setAttribute('src','image/image.png');
    }
    
}