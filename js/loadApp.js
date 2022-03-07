//CSS Animate sendo aplicado na logo
const myAnimation = document.querySelector('.imgLogo')
myAnimation.classList.add('animate__animated', 'animate__bounceInDown', 'animate__delay-1s');

//Simulando uma tela de loading
let i = setInterval(function () {
    
    clearInterval(i);

    $('.loading').css('display','none');
    $('.content').css('display','block');

}, 5000);