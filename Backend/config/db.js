import mongoose from 'mongoose';
export const Connectdb = async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/todos',()=>{
            try {
                console.log("connected to MongoDB");
            } catch (error) {
                console.log(error)
            }
        })
    } catch (error) {
        console.log(error)
    }
}
//4074131