//Express module
import express from 'express';
//path module
import path from 'path';


//create an instance of express
const app = express();
//set the port
const PORT = process.env.PORT || 3000;

//Database simulator
   const team = [
        { name: "Ronin", image: "Ronin.jpg" },
        { name: "Knight", image: "Knight.jpg" },
        { name: "General", image: "General.jpg" },
        { name: "Gamer", image:  "Gamer.jpg" },
    ];

app.use(express.static('Public'));


app.get('/' ,(req ,res ,next)=>{
    res.sendFile(path.join('Public','index.html'));
});

//Start Server
app.listen(PORT , ()=>{
    console.log("Server running");
});