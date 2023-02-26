const inputEl = document.querySelector('input');

const textEl = document.querySelector('#text');

const handleTextSizeInput = (event) => {
    textEl.style.fontSize = `${event.target.value}px`;
};
inputEl.addEventListener('input', handleTextSizeInput)