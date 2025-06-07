require('dotenv').config();
const connectDB = require('./db/index');
const app = require('./app');
const port = process.env.PORT || 5000;

;(async ()=>{
    try{
        await connectDB();
        app.listen(port,function(){
            console.log(`server is running on port http://localhost:${port}`)
        })
    }
    catch(error){
        console.log("MONGODB connect failed! ",error);
    }
    
})()
