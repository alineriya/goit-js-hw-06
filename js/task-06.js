const inputTextEl = document.querySelector('input');

const dataLength = Number(inputTextEl.dataset.length);

const handleTextInput = (event) => {
    if (event.currentTarget.value.trim().length === dataLength) {
        event.currentTarget.classList.add("valid");
        event.currentTarget.classList.remove("invalid")
        return;
    } else if (event.currentTarget.value.length === 0) {
        event.currentTarget.classList.remove("invalid");
        event.currentTarget.classList.remove("valid");
        return;
    } else 
        event.currentTarget.classList.add("invalid");
        event.currentTarget.classList.remove("valid");
};
    
inputTextEl.addEventListener('blur', handleTextInput);
