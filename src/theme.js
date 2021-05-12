const themeEl = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

themeEl.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};



if (!localStorage.localTheme) {
    localStorage.setItem('localTheme', Theme.LIGHT);
}

body.classList = localStorage.getItem('localTheme');


if (body.classList.contains(Theme.DARK)) {
    themeEl.checked = true;
    // themeEl.prop('checked', true);    
}

function changeTheme() {
    if (localStorage.getItem('localTheme') === Theme.LIGHT) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        return localStorage.setItem('localTheme', Theme.DARK);
    }    
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    return localStorage.setItem('localTheme', Theme.LIGHT);
}