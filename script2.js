var canvas = new fabric.Canvas('canvas');
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);
const ctx = document.getElementById('canvas').getContext('2d');
window.addEventListener('resize',resize);
resize();
canvas.freeDrawingBrush.width = 10;
    let colorInput = document.querySelector('#color');
    colorInput.addEventListener('input', () =>{ 
    var brush = colorInput.value;
    canvas.freeDrawingBrush.color = brush;
});
    let slider = document.getElementById("range");
    slider.addEventListener('input',()=>{ 
    var slid = slider.value;
    canvas.freeDrawingBrush.width = slid;
});

function resize(){
    canvas.isDrawingMode = true; 
    let slider = document.getElementById("range");
    slider.addEventListener('input',()=>{ 
    var slid = slider.value;
    canvas.freeDrawingBrush.width = slid;
});
    canvas.clear()
}
function draw1(){
    canvas.isDrawingMode = true; 
    let slider = document.getElementById("range");
    slider.addEventListener('input',()=>{ 
    var slid = slider.value;
    canvas.freeDrawingBrush.width = slid;
});
    let colorInput = document.querySelector('#color');
    colorInput.addEventListener('input', () =>{ 
    var brush = colorInput.value;
    canvas.freeDrawingBrush.color = brush;
});
}
function draw2(){
    canvas.isDrawingMode = false; 
    var rect = new fabric.Rect({ top: 300, left: 800, width: 300, height: 300, fill: '#f55' })
    canvas.add(rect)
}

function draw3(){
    canvas.isDrawingMode = true; 
    var brush = canvas.freeDrawingBrush;
    brush = "#FFFFFF";
    canvas.freeDrawingBrush.width = 100;
    canvas.freeDrawingBrush.color = brush;
}
function draw4(){
    canvas.isDrawingMode = false; 
    var circle = new fabric.Circle({
        radius: 150,
        fill: "#FFFF00",
        left: 800,
        top: 300
        
    });
    canvas.add(circle);
}
    canvas.add(circle);
function draw5(){
    canvas.isDrawingMode = false; 
    var triangle = new fabric.Triangle({
        width: 300,
        height: 300,
        fill: color,
        left: 800,
        top: 300
    });
    canvas.add(triangle);
}
function draw6(){
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 50;
    let colorInput = document.querySelector('#color');
    colorInput.addEventListener('input', () =>{ 
    var brush = colorInput.value;
    canvas.freeDrawingBrush.color = brush+80;

});
}

function draw7(){
    canvas.isDrawingMode = false;
}


    

