import mongoose from 'mongoose'

const TodoSchema = mongoose.Schema({
   "task" : {required:true,type : String},
   "status" : {required:true,type :Boolean},
   "User_Id" : {required:true,type :String}
},{
    versionKey : false,
    timestamps : true
})


export const TodoModel = mongoose.model('todo',TodoSchema)