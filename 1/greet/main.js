var h1Tag = document.querySelector('h1');
var btnTag = document.querySelector('button');

btnTag.onclick = function(){
    var contant = h1Tag.textContent;
    if(contant=='hi'){
        h1Tag.textContent="hello"
    }
    else{
        h1Tag.textContent= 'hi'
    }
}