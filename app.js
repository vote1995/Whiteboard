const express = require('express');
const socketio = require('socket.io');
const app = express();

app.set("view engine",'ejs');
app.use(express.static('css'));
app.use("/css", express.static(__dirname + "css"));
app.use(express.static('js'));
app.use("/js",express.static(__dirname + "js"));
app.use(express.static('views'));
app.use("/views",express.static(__dirname + "views"));



app.get("/",(req,res) =>{
    res.render('main.ejs');
});

const sever = app.listen(process.env.PORT || 3000, () =>{
    console.log('sever is runing....');
});

//
const io = socketio(sever);

io.on("connection",socket=>{
    console.log("New user connected");
    
    socket.username="Unknow"

    socket.on("change_username",data =>{
        socket.username = data.username
    })
});
