const express = require('express');
const mongoose  = require('mongoose');
const app= express();
const cors=require("cors");
const userRouter = require('./routes/userRoute');
require('dotenv').config()

const port = process.env.NODE_PORT || 4000;



const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("Hello gym app")
})
//user authentication
app.use('/',userRouter)



// console.log(process.env.NODE_DATA_BASE)
mongoose.connect(process.env.NODE_DATA_BASE)
.then(()=>{
        app.listen(port , ()=>{
                console.log("Database Connected");
            console.log("Server started on port no:"+port);
        })
    
    })
    .catch((error)=>{
        console.log(error);
    })