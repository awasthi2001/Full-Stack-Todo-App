import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
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
        return res.status(500).send({
            message : "Something went wrong"
        })   
    }
   }

   export const handleLogin = async(req,res)=>{
    try {
        // console.log(req.body)
        let user = req.body;
        let check = await User.findOne({Email_Id:user.Email_Id});
        // console.log(check._id);
        if(check){
            let password = user.Password;
            let check2 = bcryptjs.compareSync(password,check.Password);
            if(check2){ 
                let token = jwt.sign({
                    Full_Name : user.Full_Name,
                    Email_Id : user.Email_Id,
                    User_Id : check._id
                },JWT_SECRET_KEY)
                return res.status(200).send({
                    message : 'successfully logged in',
                    token : token,
                    User_Id : check._id
                })
            }else{
                return res.status(400).send({
                    message : 'wrong credentials!'
                })
            }     
        }else{
                return res.status(400).send({
                    message : 'User not found'
                })
        }
    } catch (error) {
        return res.status(500).send({
            message : "Something went wrong"
        })   
    }
   }