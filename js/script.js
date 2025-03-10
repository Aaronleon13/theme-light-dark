const body = document.querySelector('body');
const button = document.querySelector('button');

button.addEventListener('click',() => {
body.classList.toggle('dark-theme');
swapIconTheme();
})

const swapIconTheme = () => {
    if (body.classList.contains('dark-theme')) {
        button.innerText = '🌞';
        localStorage.setItem('theme', 'dark');
    }else {
        button.innerText = '🌕';
        localStorage.removeItem('theme');
    }
}

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');    
}

swapIconTheme();