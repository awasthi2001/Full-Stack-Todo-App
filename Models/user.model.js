import mongoose from 'mongoose';

 const UserSchema =  mongoose.Schema({
    "Full_Name" : {required : true, type: String},
    "Email_Id" : {required : true, type: String},
    "Password" : {required : true, type: String},
 },
 {
    versionKey : false,
    timestamps : true
 } 
 )

 export const User = mongoose.model('User',UserSchema)