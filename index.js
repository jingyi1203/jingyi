let btn = document.getElementsByClassName('btn')[0],
    mask = document.getElementsByClassName('mask')[0],
    nav = document.getElementsByClassName('nav')[0];

window.onload = function(){
    btn.onmouseover = function(){
        startMove(0);
    }
    btn.onmouseover = function(){
        startMove(-30);
    }
}

var timer = null;
function startMove(iTargat){
    clearInterval(timer);

btn.addEventListener('click', function() {
   mask.style.display = 'block';
   nav.style.left = '0';
}, false);

mask.addEventListener('click', function() {
   mask.style.display = 'none';
   nav.style.left = '-30rem';
}, false)
