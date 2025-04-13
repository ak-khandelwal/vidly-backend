require('dotenv').config();
const connectDB = require('./db/index');
const express = require("express")
const app = express();
const port = process.env.PORT || 5000;
;(async ()=>{
    try{
        await connectDB();
        app.listen(port,function(){
            console.log(`server is running on port localhost:${port}`)
        })
    }
    catch(error){
        console.log("MONGODB connect failed! ",error);
    }
    
})()


/*
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}`/`${DB_NAME}`);
        app.on('error',(error)=>{
            console.log("Error: ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening to localhost:${process.env.PORT}`)
        })
    }
    catch(err){
        console.error("Error: ",err)
        throw err
    }
})()
*/