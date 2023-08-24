// get page elements
const container = document.querySelector('.container');
const resetButton = document.querySelector('.reset-button');
const mode = document.querySelector('.mode');

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let start = false;

// 34 per row
let numberOfGrids = 680


for(let i = 0; i <numberOfGrids; i++) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('grid-panel');
    gridDiv.style.flexBasis = '20px';
    gridDiv.style.flexGrow = '1'
    gridDiv.style.minHeight = '20px';
    // gridDiv.style.border = '1px solid #777777'
    // gridDiv.style.border = 'solid 1px'
    gridDiv.addEventListener('mouseover', ()=> {
        gridDiv.style.backgroundColor = start ? 'white' : `${getRandomHexColor()}`
        gridDiv.style.cursor = 'croshair'
    });
    // gridDiv.addEventListener('mouseleave', ()=> {
    //     gridDiv.style.backgroundColor = 'white'
    // })
    container.appendChild(gridDiv);
}

resetButton.addEventListener('mousedown', ()=> {
    resetButton.textContent = start ? 'Erase' : 'Paint';
    mode.textContent = start ? 'Paint mode' : 'Erase mode';
    start = !start;
})


function resetPad() {
    const sketchPad = document.querySelector('.container');
    sketchPad.style.color = "white";
}







