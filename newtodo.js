const express = require("express")
const mongoose = require("mongoose")
const app = express()
const path = require('path');
const port = 3000;
const taskroutes = require("./routes/taskroutes")
app.use(express.static(path.join(__dirname, '/routes/newfrontendtodo')));
app.use(express.json())
app.listen(port)

mongoose.connect("mongodb+srv://illibio:owaysmb45@myfirstbdatabase.l915i.mongodb.net/?retryWrites=true&w=majority&appName=myfirstbdatabase")
.then(()=>{
    console.log("connected succesfully");
}).catch((err)=>{
    console.log("error with database", err);
})
app.use(taskroutes)

// app.get("/task",(req,res)=>{
//     try{
//         res.status(200).json({info:"info accepted"})
//     }catch{
//         res.status(400).json({error: err.info})
//     }
//
// })
// NOTE: not using express static
// NOTE: sendeing more than one response
// NOTE: code 5ra
