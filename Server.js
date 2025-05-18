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

//Middle บอกว่าเราจะใช้ path ไหนบ้าง / Middleware = จะทํางานก่อนทุกตัว(เหมือน Constructor เลยย)
app.use(express.static('PamaHam'));
app.use('/Our_Big_Project/Image', express.static('Image'));
//parameter คือ path เต็ม 2 คือ ให้หาตัวไหน


app.get('/' ,(req ,res ,next)=>{
    res.sendFile(path.join('PamaHam','index.html'));
});

//Start Server
app.listen(PORT , ()=>{
    console.log("Server running");
});