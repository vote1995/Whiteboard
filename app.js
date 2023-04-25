<script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.0.0/fabric.min.js"></script>

var canvas = new fabric.Canvas('canvas');

// create a rectangle object
var rect = new fabric.Rect({
 left: 100,
 top: 100,
 fill: 'red',
 width: 20,
 height: 20
});

// "add" rectangle onto canvas
canvas.add(
    new fabric.Rect({ top: 100, left: 100, width: 50, height: 50, fill: '#f55' }),
    new fabric.Circle({ top: 140, left: 230, radius: 75, fill: 'green' }),
    new fabric.Triangle({ top: 300, left: 210, width: 100, height: 100, fill: 'blue' })
    );
   
   fabric.Image.fromURL('https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg', function(img) {
    img.set({ left: 400, top: 350, angle: 30});
    img.scaleToHeight(100);
    img.scaleToWidth(200);
    canvas.add(img);
    });
   
   canvas.isDrawingMode = true; //For free hand drawing

canvas.on('object:added', function(options) {
    /* sync object add */
});
canvas.on('object:removed', function(options) {
   /* sync object removal*/
});