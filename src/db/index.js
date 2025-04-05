const mongoose = require('mongoose');
const DB_NAME  = require('../constants');

const connectDB = async() =>{
    try{
        console.log('mongodb: ',process.env.MONGO_URI)
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n Mongo connected !! DB HOST: ${connectionInstance.connection.host}`)
    }catch(err){
        console.log('MONGODB connection error ', err)
        process.exit(1)
    }
}


module.exports = connectDB