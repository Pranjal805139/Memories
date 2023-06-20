import mongoose from 'mongoose'



const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-shxecgw-shard-00-00.voevint.mongodb.net:27017,ac-shxecgw-shard-00-01.voevint.mongodb.net:27017,ac-shxecgw-shard-00-02.voevint.mongodb.net:27017/?ssl=true&replicaSet=atlas-c10w1a-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {    
        debugger;
       await mongoose.connect(URL, { useNewUrlParser: true });
       console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the Database', error);
    }
}

export default Connection;