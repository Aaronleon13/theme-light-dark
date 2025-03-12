const body = document.querySelector('body');
const button = document.querySelector('button');

const THEME_DARK = 'dark-theme';
const KEY_LOCALSTORAGE = 'theme';
const VALUE_LOCALSTORAGE = 'dark';
const ICON_DARK = '🌞';
const ICON_LIGHT = '🌕';

button.addEventListener('click',() => {
body.classList.toggle(THEME_DARK);
swapIconTheme();
})

const swapIconTheme = () => {
    if (body.classList.contains(THEME_DARK)) {
        button.innerText = ICON_DARK;
        localStorage.setItem(KEY_LOCALSTORAGE, VALUE_LOCALSTORAGE);
    }else {
        button.innerText = ICON_LIGHT;
        localStorage.removeItem(KEY_LOCALSTORAGE);
    }
}

const initialTheme = () => {
    if (localStorage.getItem(KEY_LOCALSTORAGE) === VALUE_LOCALSTORAGE) {
        body.classList.add(THEME_DARK);    
    }
    swapIconTheme();
}

initialTheme();

