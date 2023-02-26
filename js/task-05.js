const inputEl = document.querySelector('#name-input');

const nameLabelEl = document.querySelector('#name-output');


const handleInput = (event) => {
    event.currentTarget.value === "" 
    ? nameLabelEl.textContent = "Anonymous" 
    : nameLabelEl.textContent = event.currentTarget.value.trim();
};

inputEl.addEventListener('input', handleInput);