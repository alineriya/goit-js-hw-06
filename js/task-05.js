const inputEl = document.querySelector('#name-input');

const nameLabelEl = document.querySelector('#name-output');


const handleInput = (event) => {
    event.currentTarget.value.trim() === "" 
    ? nameLabelEl.textContent = "Anonymous" 
    : nameLabelEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener('input', handleInput);