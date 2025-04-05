require('dotenv').config();
const connectDB = require('./db/index');


connectDB();


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