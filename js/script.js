const body = document.querySelector('body');
const button = document.querySelector('button');


button.addEventListener('click',() => {
body.classList.toggle('dark-theme');
addText();
})


const addText = ()  => {
    button.innerText = 'Light Mode';
}