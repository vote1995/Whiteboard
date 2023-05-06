// function canvas ------------------------------------------------------------------
/*
var canvas = new fabric.Canvas('Mcanvas');
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);
canvas.getContext('2d');
const ctx = document.getElementById('Mcanvas').getContext('2d');

$("#color").change(function () {
    var brush = colorInput.value;
    canvas.freeDrawingBrush.color = brush;
});
$("#range").change(function () {
    var slid = slid.value;
    canvas.freeDrawingBrush.width = slid;
});

function Fpen() {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 10;
    canvas.freeDrawingBrush.color = "black";
}
function Feraser() {
    canvas.isDrawingMode = true;
    var brush = canvas.freeDrawingBrush;
    brush = "#FFFFFF";
    canvas.freeDrawingBrush.width = 100;
    canvas.freeDrawingBrush.color = brush;
}
function Fhighlight() {
    canvas.isDrawingMode = true;
    var high = canvas.freeDrawingBrush;
    high = "#FF0000";
    canvas.freeDrawingBrush.width = 50;
    canvas.freeDrawingBrush.color = high + 80;
}
*/
var canvas = new fabric.Canvas('Mcanvas');
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);

$("#color").change(function () {
  var brush = color.value;
  canvas.freeDrawingBrush.color = brush;
});
$("#range").change(function () {
  var slid = range.value;
  canvas.freeDrawingBrush.width = slid;
});

function Fclear() {
    canvas.clear();
}
function Fpen() {
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.width = 10;
  canvas.freeDrawingBrush.color = "black";
}
function Feraser() {
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.width = 100;
  canvas.freeDrawingBrush.color = "#FFFFFF";
}
function Fhighlight() {
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.width = 50;
  canvas.freeDrawingBrush.color = "rgba(255,0,0,0.5)";
}
function Fcircle(){
    canvas.isDrawingMode = false; 
    var circle = new fabric.Circle({
        radius: 150,
        fill: "#FFFF00",
        left: 800,
        top: 300
        
    });
    canvas.add(circle);
}
function Fsquare(){
    canvas.isDrawingMode = false; 
    var rect = new fabric.Rect({ top: 300, left: 800, width: 300, height: 300, fill: '#f55' })
    canvas.add(rect)
}
function Ftriangle(){
    canvas.isDrawingMode = false; 
    var triangle = new fabric.Triangle({
        width: 300,
        height: 300,
        fill: "#444",
        left: 800,
        top: 300
    });
    canvas.add(triangle);
}

// action sidebar----------------------------------------------------------------


const btnshapes = document.querySelector('.btn-shapes');
const box_shapes = document.querySelector('.box-shapes');

btnshapes.addEventListener('click',() => {
    box_shapes.style.display = 'block';
})
document.addEventListener('click', (event) => {
    const isclickbtn_col = box_shapes.contains(event.target);
    const isClickbox_color = btnshapes.contains(event.target);
  
    if (!isclickbtn_col && !isClickbox_color) {
        box_shapes.style.display = 'none';
    }
  });

// box - color ----------------------------------------
const btn_col = document.querySelector('.btn-color');
const box_color = document.querySelector('.box-col');

btn_col.addEventListener('click', () => {
    box_color.style.display = 'block';
})

document.addEventListener('click', (event) => {
    const isclickbtn_col = box_color.contains(event.target);
    const isClickbox_color = btn_col.contains(event.target);
  
    if (!isclickbtn_col && !isClickbox_color) {
        box_color.style.display = 'none';
    }
  });