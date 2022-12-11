import express from "express";
import cors from 'cors'
import { Connectdb } from "./config/db.js";
import { AuthRouter } from "./routes/Auth.routes.js";
import { TodoRouter } from "./routes/todo.routes.js";
import { UserRouter } from "./routes/user.routes.js";

const app = express();
app.use(express.json())
app.use(cors());
app.use('/auth',AuthRouter);
app.use('/user',UserRouter);
app.use('/todos',TodoRouter)
app.get('/',(req,res)=>{
    try {
        res.status(200).send({
            message : 'welcome to Todos Application'
        })
    } catch (error) {
        res.status(500).send({
            message : 'welcome to Todos Application'
        })
    }

})



app.listen(8080,()=>{
    try {
        Connectdb().then((res)=>{
          console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        console.log("listening to 8080")
    } catch (error) {
        console.log(error)
    }
})