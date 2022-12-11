import {TodoModel} from '../Models/todo.model.js';


export const getAllTodo = async(req,res)=>{
 try {
    let {User_id} = req.params;
    console.log(User_id)
    let data = await  TodoModel.find();
    
    const length = await TodoModel.find().count();
   
    let page = (req.query.page) -1 || 0 ;
    const limit = (req.query.limit) || length;
    data = await TodoModel.find({User_id}).skip(page*limit).limit(limit)

    return res.status(200).send({
        data : data
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
        // let todo1 = await TodoModel.findById(_id);
        // let statusp = todo1.status
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
        console.log(createdtodo)
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