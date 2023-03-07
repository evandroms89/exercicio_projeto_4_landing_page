const menuItems = document.querySelectorAll('.header__menu__item');
const buttons = document.querySelectorAll('[data-tab-button]');

const botaoFilme = document.querySelector('[data-tab-button="o_filme"]')
const botaoSinopse = document.querySelector('[data-tab-button="sinopse"]')
const botaoElenco = document.querySelector('[data-tab-button="elenco"]')
const botaoTrilha = document.querySelector('[data-tab-button="trilha"]')

const filmeSection = document.querySelector('#filme');
const alturaFilme = filmeSection.offsetTop - 90;
const sinopseSection = document.querySelector('#sinopse');
const alturaSinopse = sinopseSection.offsetTop - 90;
const elencoSection = document.querySelector('#elenco');
const alturaElenco = elencoSection.offsetTop - 90;
const trilhaSection = document.querySelector('#trilha');
const alturaTrilha = trilhaSection.offsetTop - 90;


window.addEventListener('scroll', function() {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaSinopse) {
        removeBotaoAtivo();
        botaoFilme.classList.add('header__menu__item--is-active');
    } else if(posicaoAtual > alturaSinopse && posicaoAtual < alturaElenco) {
        removeBotaoAtivo();
        botaoSinopse.classList.add('header__menu__item--is-active');
    } else if (posicaoAtual > alturaElenco && posicaoAtual < alturaTrilha) {
        removeBotaoAtivo();
        botaoElenco.classList.add('header__menu__item--is-active');
    } else if (posicaoAtual > alturaTrilha) {
        removeBotaoAtivo();
        botaoTrilha.classList.add('header__menu__item--is-active');
    }
})

menuItems.forEach(function(item){
    item.addEventListener('click', scrollToIdOnClick);
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('header__menu__item--is-active');
    }
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 75;

    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}