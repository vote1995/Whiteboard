const ctx = document.getElementById('canvas').getContext('2d');
window.addEventListener('resize',resize);
resize();

let mousePos ={
    x:0,
    y:0
}


window.addEventListener('mousedown',mousePosition);
window.addEventListener('mouseenter',mousePosition);

function mousePosition(e){
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
}
function resize(){
    window.removeEventListener('mousemove',draw1);
    window.removeEventListener('mousemove',draw2);
    window.removeEventListener('mousemove',draw4);
    window.removeEventListener('mousemove',draw3);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
function draw1(e){
    window.removeEventListener('mousemove',draw3);
    window.removeEventListener('mousemove',draw2);
    window.removeEventListener('mousemove',draw4);
    window.addEventListener('mousemove',draw1);
    if(e.buttons !== 1)
        return;
    ctx.beginPath(); 
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 5;
    ctx.moveTo(mousePos.x,mousePos.y);
    mousePosition(e);
    ctx.lineTo(mousePos.x,mousePos.y);
    ctx.stroke();
}
function draw2(e){
    window.removeEventListener('mousemove',draw1);
    window.removeEventListener('mousemove',draw3);
    window.removeEventListener('mousemove',draw4);
    window.addEventListener('mousemove',draw2);
    if(e.buttons !== 1)
        return;
    ctx.beginPath(); 
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 100;
    ctx.moveTo(mousePos.x,mousePos.y);
    mousePosition(e);
    ctx.lineTo(mousePos.x,mousePos.y);
    ctx.stroke();
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
function draw3(e){
    window.removeEventListener('mousemove',draw1);
    window.removeEventListener('mousemove',draw2);
    window.removeEventListener('mousemove',draw4);
    window.addEventListener('mousemove',draw3);
    if(e.buttons !== 1)
        return;
    ctx.beginPath(); 
    ctx.lineCap = 'round';
    ctx.strokeStyle ="#FF0000";
    ctx.lineWidth = 5;
    ctx.moveTo(mousePos.x,mousePos.y);
    mousePosition(e);
    ctx.lineTo(mousePos.x,mousePos.y);
    ctx.stroke();
}
function draw4(e){
    window.removeEventListener('mousemove',draw1);
    window.removeEventListener('mousemove',draw2);
    window.removeEventListener('mousemove',draw3);
    window.addEventListener('mousemove',draw4);
    if(e.buttons !== 1)
        return;
    ctx.beginPath(); 
    ctx.lineCap = 'round';
    ctx.strokeStyle ="#FFFF00";
    ctx.lineWidth = 5;
    ctx.moveTo(mousePos.x,mousePos.y);
    mousePosition(e);
    ctx.lineTo(mousePos.x,mousePos.y);
    ctx.stroke();
}

