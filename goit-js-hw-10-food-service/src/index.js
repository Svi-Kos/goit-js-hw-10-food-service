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

bodyTheme.classList.add(currentTheme);

if (currentTheme === Theme.DARK) {
  themeSwitchToggle.checked = true;
}

function changeTheme(evt) {
  // themeSwitchToggle.checked = true;
  const theme = evt.currentTarget.checked
    ? (bodyTheme.classList.add(Theme.DARK),
      bodyTheme.classList.remove(Theme.LIGHT))
    : (bodyTheme.classList.add(Theme.LIGHT),
      bodyTheme.classList.remove(Theme.DARK));

  localStorage.setItem('currentTheme', bodyTheme.classList);
}
