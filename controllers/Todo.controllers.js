import {TodoModel} from '../Models/todo.model.js';
import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
export const getAllTodo = async(req,res)=>{
 try {
    let {token} = req.params;
    let {User_Id} = jwt.verify(token,JWT_SECRET_KEY);
    let data = await  TodoModel.find({User_Id});
    const length = await TodoModel.find({User_Id}).count();
    let page = (req.query.page) -1 || 0 ;
    let filter = req.query.filter
    if(filter==""){
        filter = {}
    }else if(filter=="true"){
        filter = {status:true}
    }else if(filter=="false"){
        filter = {status:false}
    }
    const limit = (req.query.limit) || length;
    data = await TodoModel.find({User_Id,filter}).skip(page*limit).limit(limit).sort({"createdAt":-1})//or skip((page-1)*limit).limit(limit)
    return res.status(200).send({
        data : data,
        count : length
    })
 } catch (error) {
   return res.status(500).send({
    message : 'something went wrong'
   })    
 }
}

export const HandlePatch = async(req,res)=>{
    try {
        let {_id} = req.params;
        let todo = await TodoModel.findByIdAndUpdate(_id,req.body);
        return res.status(200).send({
            message : 'successfully updated'
        })
    } catch (error) {
        return res.status(500).send({
            message : 'something went wrong'
           }) 
    }
}
export const HandleDelete = async(req,res)=>{
    try {
        let {_id} = req.params;
        let todo = await TodoModel.findByIdAndDelete(_id);
        return res.status(200).send({
            message : 'successfully deleted'
        })
    } catch (error) {
        return res.status(500).send({
            message : 'something went wrong'
           }) 
    }
}
export const AddTodo = async(req,res)=>{
    try {
        let todo = req.body;
       
        let createdtodo = await TodoModel.create(todo);
        return res.status(201).send({
            message : 'successfully created',
            todo : createdtodo
        })
    } catch (error) {
        return res.status(500).send({
            message : 'error',
            error : error
        })
    }
}