require('dotenv').config();
const connectDB = require('./db/index');
const app = require('./app');
const port = process.env.PORT || 5000;
const host = '0.0.0.0' || 'localhost';
;(async ()=>{
    try{
        await connectDB();
        app.listen(port,host,function(){
            console.log(`server is running on port http://${host}:${port}`)
        })
    }
    catch(error){
        console.log("MONGODB connect failed! ",error);
    }
    
})()
