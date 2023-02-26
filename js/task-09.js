function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('button');

const bodyEl = document.querySelector('body');

const colorValueEl = document.querySelector('.color');

btnEl.addEventListener('click', handleChangeColorBtn);

function handleChangeColorBtn () {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorValueEl.textContent = bodyEl.style.backgroundColor;
}