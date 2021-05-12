import menu from './menu.json';
import cards from './templates/cards.hbs';

const menuRef = document.querySelector('.js-menu');

const menuMarckup = createMenuCards(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarckup)

function createMenuCards(menu) {
    return cards(menu);
}