import bcryptjs from 'bcryptjs'
import * as dotenv from 'dotenv'
import { User } from '../Models/user.model.js'
dotenv.config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY




export const CreateUser = async(req,res)=>{
    try {
       let user = req.body;
        let check = await User.findOne({Email_Id:user.Email_Id});
        if(check){
            return res.status(400).send({
                message : "User already exists"
            })
        }else{
            user.Password = bcryptjs.hashSync(user.Password);
            let Userdata = await User.create(user)
            Userdata = Userdata.toJSON();
            delete Userdata.Password;
            return res.status(201).send({
                user : Userdata,
              message  :"Successfully created"
            })
        }
    } catch (error) {
       
    }
   }