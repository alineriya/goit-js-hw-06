function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const inputDataEl = document.querySelector('#controls');
const boxesEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', handleCreateBtn);
btnDestroyEl.addEventListener('click', handleDestroyBtn);

function handleDestroyBtn () {
  boxesEl.innerHTML = "";
  inputDataEl.firstElementChild.value = "";
}

function handleCreateBtn () {
  const boxesNumber = inputDataEl.firstElementChild.value;
  const boxArray = [];
  
  let boxWidth = 30;
  let boxHeight = 30;

  for (let i = 0; i < boxesNumber; i += 1) {
    const box = document.createElement(`div`);
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;
    boxWidth += 10;
    boxHeight += 10;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    boxArray.push(box);
  };
  boxesEl.append(...boxArray);
  console.log(boxesEl);
};

