const mongodbUrl = process.env.MONGODB_URL;

if(!mongodbUrl){
    throw new Error('db url not found');
}

const cached = global.mongoosConn
