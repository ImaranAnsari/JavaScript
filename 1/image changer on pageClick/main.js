let myImage = document.querySelector('img');
pageClick.onclick = function(){
    let mySrc = pageClick.getAttribute('src');
    console.log();
    if(mySrc==='image/image.png'){
        pageClick.setAttribute('src','image/image1.jpeg');
    }else{
        pageClick.setAttribute('src','image/image.png');
    }
    
}