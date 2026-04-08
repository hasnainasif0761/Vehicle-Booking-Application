import mongoose from "mongoose";

const mongodbUrl = process.env.MONGODB_URL;

if(!mongodbUrl){
    throw new Error('db url not found');
}

let cached = global.mongoosConn;
if(!cached){
    cached=global.mongoosConn={conn:null,promise:null};
}

const connectDb = async () => {
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        cached.promise = mongoose.connect(mongodbUrl).then(c=>c.connection)
    }


    try {
        const conn = await cached.promise
        return conn
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;
