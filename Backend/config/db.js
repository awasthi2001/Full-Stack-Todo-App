import mongoose from 'mongoose';
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
let URL = process.env.URL;
export const Connectdb = ()=>{
    try {
        return new Promise((resolve, reject) =>{
            mongoose.connect(URL,(err)=>{
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