import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
import { User } from '../Models/user.model.js'
dotenv.config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export const getUser = async(req,res)=>{
 try {
      let {token} = req.params;
      let {User_Id} = jwt.verify(token,JWT_SECRET_KEY);
     let user = await User.findById(User_Id)
     user = user.toJSON();
     delete user.Password;
    //  console.log(user+"line no.16");
     return res.send(user);
 } catch (error) {
    return res.status(500).send({
        message : error.message
    })
 }
}

