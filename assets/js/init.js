const shareArrow = document.querySelector('.share__arrow');
const arrow = document.querySelector('.arrow');
const hidden = document.querySelector('.hidden');

shareArrow.addEventListener('click', function(){

    shareArrow.classList.toggle('bkg-share');
    arrow.classList.toggle('color-arrow');
    hidden.classList.toggle('visible');

});