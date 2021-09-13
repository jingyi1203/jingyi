let btn = document.getElementsByClassName('btn')[0],
    mask = document.getElementsByClassName('mask')[0],
    nav = document.getElementsByClassName('nav')[0];

function showNav(){
    mask.fadeIn();
    nav.animate({'right':0});
}

function hideNav(){
    mask.fadeOut();
    nav.css('right',-nav.width());
    console.log("mask");
}

btn.on('click',showNav);
mask.click(hideNav);
