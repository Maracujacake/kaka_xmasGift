
// configurações da exibição do carrossel
var slickOptions = {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev">&#9665;</div>',
    nextArrow: '<div class="slick-next">&#9655;</div>',
    dots: false,
    infinite: true
};

var prevArrowElement = document.createElement('div');
prevArrowElement.className = 'slick-prev';

var nextArrowElement = document.createElement('div');
nextArrowElement.className = 'slick-next';


// configura o carrossel em determinados tamanhos de tela
function updateSlickOptions() {
    if (window.innerWidth <= 500) {
        slickOptions.slidesToShow = 1;
        slickOptions.prevArrow = null;
        slickOptions.nextArrow = null;
    }
    else if(window.innerWidth <= 700){
        slickOptions.slidesToShow = 2;
        slickOptions.prevArrow = null;
        slickOptions.nextArrow = null;
    }

    else {
        slickOptions.slidesToShow = 3;
    }
}

updateSlickOptions();

// valida a senha
function checkPassword() {
    var password = document.getElementById('password').value;

    if (password === '0403') { // Que dia mais seria? hehe.
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('new-background').style.display = 'flex';
        playBackgroundMusic();
        initSlick();

        document.body.classList.add('logged-in');
    } else {
        alert('Senha incorreta. Tente novamente. :)');
    }
}

// tratamento de casos das músicas
let isDonutesBlzPlaying = true; // Inicialmente, "donutesBlz" está tocando

let audioDonutesBlz = new Audio('audios/donutesBlz.mp3');
let audioCadeOCapuccino = new Audio('audios/CadeOCapuccino.mp3');

function playBackgroundMusic() {
    audioDonutesBlz.play();
    
    // Gradualmente aumenta o volume
    var volume = 0;
    var interval = setInterval(function () {
        volume += 0.1;
        audio.volume = volume;

        if (volume >= 1) {
            clearInterval(interval);
        }
    }, 1000);
}

// /*Música a ser adicionada na tela pré-login*/
// function playBackgroundMusic2() {
//     var audio = new Audio('audios/CadeOCapuccino.mp3');
//     audio.play();
// }

document.querySelector('.coffee').addEventListener('click', function () {
// Verificar qual música está tocando no momento
if (isDonutesBlzPlaying) {
    // Se "donutesBlz" estiver tocando, pausar e iniciar "CadeOCapuccino"
    audioDonutesBlz.pause();
    audioDonutesBlz.currentTime = 0;
    audioCadeOCapuccino.play();
    isDonutesBlzPlaying = false;
}
});

function initSlick() {
    $('.carousel').slick(slickOptions);
}