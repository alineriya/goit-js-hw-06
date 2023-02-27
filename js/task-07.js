const inputEl = document.querySelector('input');

const textEl = document.querySelector('#text');

textEl.style.fontSize = inputEl.value + "px";
const handleTextSizeInput = (event) => {
    textEl.style.fontSize = `${event.target.value}px`;
};
inputEl.addEventListener('input', handleTextSizeInput);