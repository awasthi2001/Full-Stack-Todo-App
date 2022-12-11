import mongoose from 'mongoose';
export const Connectdb = ()=>{
    try {
        return new Promise((resolve, reject) =>{
            mongoose.connect('mongodb://127.0.0.1:27017/todos',(err)=>{
                if(err){
                    reject("Something went wrong");
                } else {
                    
                    resolve("Connected to MongoDB")
                }
            })
        })
       
    } catch (error) {
        console.log(error)
    }
}
//4074131