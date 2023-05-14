
var canvas = new fabric.Canvas('Mcanvas');
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);
var count_fuc = 0;
var count_shapes = 0;
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
function Fpen(color) {
    
  const chpen = canvas.isDrawingMode = true;
  if(count_fuc > 1){
    count_fuc -= 1;
  } else {
    count_fuc += 1;
  }
  console.log('-------> ' + count_fuc);
  canvas.freeDrawingBrush.width = 10;
  if (color) {
    canvas.freeDrawingBrush.color = color;
    console.log('Pen color --> '+color);
  } else {
    canvas.freeDrawingBrush.color = "black";
  }
  return chpen;
}


function Feraser() {
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.width = 100;
  canvas.freeDrawingBrush.color = "#FFFFFF";
}


function Fhighlight(color) {
  const ChHl = canvas.isDrawingMode = true;
  if(count_fuc < 2){
    count_fuc += 1;
  } else {
    count_fuc -= 1;
  }
  canvas.freeDrawingBrush.width = 50;
  if(color) {
    canvas.freeDrawingBrush.color = color;
    console.log('HL color --> '+color);
  } else {
    canvas.freeDrawingBrush.color = "rgba(255,0,0,0.5)";
  }
  return ChHl;
}

// change color function -------------------------------------------------------------------------------

function chRed(){
    const color = 'rgba(255,0,0)';
    const color_hl = 'rgba(255,0,0,0.5)';
    if(count_fuc === 1){
        console.log(count_fuc+"<--------------")
        const penCol = Fpen();
        if(penCol == true){
            Fpen(color);
        }
    } 
    if(count_fuc === 2){
        const HlCol = Fhighlight();
        if(HlCol == true){
            Fhighlight(color_hl)
        }
    }
    if (count_shapes === 1){
        const C_shapes = Fcircle();
        if (C_shapes == true){
            Fcircle(color);
        }
    }
    if (count_shapes === 2){
        const T_shapes = Ftriangle();
        if (T_shapes == true){
            Ftriangle(color);
        }
    }
    if (count_shapes === 3){
        const S_shapes = Fsquare();
        if (S_shapes == true){
            Fsquare(color);
        }
    }
    
}
function chBlack() {
    const color = 'rgba(0,0,0)';
    const color_hl = 'rgba(0,0,0,0.5)';
    const count = 0;
    if(count_fuc === 1){
        console.log(count_fuc+"<--------------")
        const penCol = Fpen();
        if(penCol == true){
            Fpen(color);
        }
    } 
    if(count_fuc === 2){
        const HlCol = Fhighlight();
        if(HlCol == true){
            Fhighlight(color_hl)
        }
    }
}

function chBlue() {
    const color = 'rgba(0, 47, 255)';
    const color_hl = 'rgba(0, 47, 255,0.5)';
    if(count_fuc === 1){
        console.log(count_fuc+"<--------------")
        const penCol = Fpen();
        if(penCol == true){
            Fpen(color);
        }
    } 
    if(count_fuc === 2){
        const HlCol = Fhighlight();
        if(HlCol == true){
            Fhighlight(color_hl)
        }
    }
}
function chGreen() {
    const color = 'rgba(22, 189, 0)';
    const color_hl = 'rgba(22, 189, 0, 0.5)';
    if(count_fuc === 1){
        console.log(count_fuc+"<--------------")
        const penCol = Fpen();
        if(penCol == true){
            Fpen(color);
        }
    } 
    if(count_fuc === 2){
        const HlCol = Fhighlight();
        if(HlCol == true){
            Fhighlight(color_hl)
        }
    }
}

function chWhite() {
    const color = 'rgba(255, 255, 255)';
    const color_hl = 'rgba(255, 255, 255, 0.5)';
    if(count_fuc === 1){
        console.log(count_fuc+"<--------------")
        const penCol = Fpen();
        if(penCol == true){
            Fpen(color);
        }
    } 
    if(count_fuc === 2){
        const HlCol = Fhighlight();
        if(HlCol == true){
            Fhighlight(color_hl)
        }
    }
}

function chOrange() {
    const color = 'rgba(255, 136, 0)';
    const color_hl = 'rgba(255, 136, 0, 0.5)';
    if(count_fuc === 1){
        console.log(count_fuc+"<--------------")
        const penCol = Fpen();
        if(penCol == true){
            Fpen(color);
        }
    } 
    if(count_fuc === 2){
        const HlCol = Fhighlight();
        if(HlCol == true){
            Fhighlight(color_hl)
        }
    }
}

function chYellow() {
    const color = 'rgba(255, 230, 5)';
    const color_hl = 'rgba(255, 230, 5, 0.5)';
    if(count_fuc === 1){
        console.log(count_fuc+"<--------------")
        const penCol = Fpen();
        if(penCol == true){
            Fpen(color);
        }
    } 
    if(count_fuc === 2){
        const HlCol = Fhighlight();
        if(HlCol == true){
            Fhighlight(color_hl)
        }
    }
}

function chPink() {
    const color = 'rgba(226, 155, 220)';
    const color_hl = 'rgba(226, 155, 220, 0.5)';
    if(count_fuc === 1){
        console.log(count_fuc+"<--------------")
        const penCol = Fpen();
        if(penCol == true){
            Fpen(color);
        }
    } 
    if(count_fuc === 2){
        const HlCol = Fhighlight();
        if(HlCol == true){
            Fhighlight(color_hl)
        }
    }
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

  function Fcircle(color){
    canvas.isDrawingMode = false; 
    if(count_shapes > 1){
        count_shapes = 1;
    } else if (count_shapes === 0){
        count_shapes = 1;
    }
    const resCircle = window.matchMedia("(max-width: 1024px)");
    if (resCircle.matches) {
        console.log('math 1024px')
        if(color){
            var circle = new fabric.Circle({
                radius: 150,
                fill: color,
                left: 150,
                top: 150
            }); 
        } else {
            var circle = new fabric.Circle({
                radius: 150,
                fill: '#333',
                left: 150,
                top: 150
            }); 
        }
        
    } else {
        if(color){
            var circle = new fabric.Circle({
                radius: 150,
                fill: color,
                left: 150,
                top: 150
            }); 
        } else {
            var circle = new fabric.Circle({
                radius: 150,
                fill: '#333',
                left: 150,
                top: 150
            }); 
        }
    }
    // const stlyeC = getComputedStyle(box_color)
    // const Wcircle = stlyeC.width
    
    
    canvas.add(circle);
}
function Fsquare(color){
    canvas.isDrawingMode = false; 
    if(count_shapes > 2){
        count_shapes = 2;
    } else if (count_shapes < 2){
        count_shapes = 2;
    } else if(count_shapes === 0) {
        count_shapes = 2;
    }

    const ressquare = window.matchMedia("(max-width: 1024px)");
    if (ressquare.matches) {
        var rect = new fabric.Rect({ top: 240, left: 400, width: 300, height: 300, fill: '#333' })
    } else {
        var rect = new fabric.Rect({ top: 300, left: 800, width: 300, height: 300, fill: '#333' })
    }
    canvas.add(rect)
}
function Ftriangle(color){
    canvas.isDrawingMode = false; 
    if(count_shapes < 3){
        count_shapes = 3;
    } else if (count_shapes === 0){
        count_shapes = 3;
    }
    const restriangle = window.matchMedia("(max-width: 1024px)");
    if (restriangle.matches) {
        var triangle = new fabric.Triangle({
            width: 300,
            height: 300,
            fill: '#333',
            left: 350,
            top: 300
        });
    } else {
        var triangle = new fabric.Triangle({
            width: 300,
            height: 300,
            fill: '#333',
            left: 400,
            top: 300
        });
    }
    
    canvas.add(triangle);
}
(function connect(){
    let socket = io.connect("http://localhost:3000")

    let username = document.querySelector('#username')
    let usernameBtn = document.querySelector('#usernameBtn')
    let curUsename = document.querySelector(".card-header")

    usernameBtn.addEventListener('click', e  =>{
        console.log(username.value);
        socket.emit('change_username',{username: username.value})
        curUsename.textContent = username.value
        username.value = ''
        })
})(); 

