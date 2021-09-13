let btn = document.getElementsByClassName('btn')[0],
    mask = document.getElementsByClassName('mask')[0],
    nav = document.getElementsByClassName('nav')[0];

btn.addEventListener('click', function() {
   mask.style.display = 'block';
   nav.style.right = '0';
}, false);

mask.addEventListener('click', function() {
   mask.style.display = 'none';
   nav.style.right = '-30rem';
}, false)
