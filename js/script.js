const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click',() => {
body.classList.toggle('dark-theme');
swapIconTheme();
})

const swapIconTheme = () => {
    if (body.classList.contains('dark-theme')) {
        button.innerText = '🌞';
    }else {
        button.innerText = '🌕';
    }
}

swapIconTheme();