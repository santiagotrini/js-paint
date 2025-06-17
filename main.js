// variables globales para forma, color y tamaño
let color = 'black';
let shape = 'square';
let size = '10'

function paint(e) {
  if (e.buttons == 0) return; // pintá solo si estás haciendo click
  let div = document.createElement('div'); 
  div.classList.add('brush');
  // setear tamaño
  div.style.width = size + 'px';
  div.style.height = size + 'px';
  // setear color
  div.style.backgroundColor = color;
  // setear forma
  if (shape == 'circle')
    div.style.borderRadius = '50%';
  // coordenadas
  div.style.left = e.clientX + 'px';
  div.style.top = e.clientY + 'px';
  // agregar al body
  document.body.append(div);  
}

function setColor(e) {
  color = e.target.classList[1];  // la segunda clase del div en el HTML
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

// seleccionar los controls y agregar los handlers
// primero los de colores
let colorControls = document.querySelectorAll('.color');
for (let control of colorControls)
  control.onclick = setColor;
// despues los de tamaño
let sizeControls = document.querySelectorAll('.size')
for (let control of sizeControls)
  control.onclick = setSize;
// por ultimo los de forma
let shapeControls = document.querySelectorAll('.shape')
for (let control of shapeControls)
  control.onclick = setShape;
// agregar la funcion paint al evento mousemove del div.canvas
document.querySelector('.canvas').onmousemove = paint;

