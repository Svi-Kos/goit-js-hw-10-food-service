import menuCardsTpl from './templates/menu-cards.hbs';
import menu from './menu.json';
import './styles.css';

const menuListContainer = document.querySelector('.js-menu');
const makeMenuMarkup = menuCardsTpl(menu);
menuListContainer.insertAdjacentHTML('afterbegin', makeMenuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');

themeSwitchToggle.addEventListener('change', changeTheme);

const currentTheme = localStorage.getItem('currentTheme');

bodyTheme.classList.add(currentTheme || Theme.LIGHT);

if (currentTheme === Theme.DARK) {
  themeSwitchToggle.checked = true;
}

function changeTheme() {
  bodyTheme.classList.toggle(Theme.DARK);
  bodyTheme.classList.toggle(Theme.LIGHT);

  localStorage.setItem('currentTheme', bodyTheme.classList);
}
