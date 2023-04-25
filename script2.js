var canvas = new fabric.Canvas('canvas');
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);
const ctx = document.getElementById('canvas').getContext('2d');
window.addEventListener('resize',resize);
resize();

function resize(){
    canvas.clear()
}
function draw1(){
    canvas.isDrawingMode = true; 
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
var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };




