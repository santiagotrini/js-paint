let color = 'black';
let shape = 'square';
let size = '10'

function paint(e) {
  if (e.buttons == 0) return;
  
  let div = document.createElement('div');
  div.classList.add('brush');
  div.style.width = size + 'px';
  div.style.height = size + 'px';
  div.style.backgroundColor = color;
  if (shape == 'circle')
    div.style.borderRadius = '50%';
  div.style.left = e.clientX + 'px';
  div.style.top = e.clientY + 'px';
  document.body.append(div);  
}

function setColor(e) {
  color = e.target.classList[1];
}

function setShape(e) {
  shape = e.target.classList[1];
}

function setSize(e) {
  switch (e.target.classList[1]) {
    case 'ten':
      size = 10;
      break;
    case 'twenty':
      size = 20;
      break;
    case 'thirty':
      size = 30;
      break;
    case 'forty':
      size = 40;
      break;  
  }
}

let colorControls = document.querySelectorAll('.color');
for (let control of colorControls)
  control.onclick = setColor;

let sizeControls = document.querySelectorAll('.size')
for (let control of sizeControls)
  control.onclick = setSize;

let shapeControls = document.querySelectorAll('.shape')
for (let control of shapeControls)
  control.onclick = setShape;

document.querySelector('.canvas').onmousemove = paint;

