import express from "express";
import { Connectdb } from "./config/db.js";
import { AuthRouter } from "./routes/Auth.routes.js";
import { UserRouter } from "./routes/user.routes.js";

const app = express();
app.use(express.json())
app.use('/auth',AuthRouter);
// app.use('/user',UserRouter);

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



app.listen(8080,async()=>{
    try {
        await Connectdb();
        console.log("listening to 8080")
    } catch (error) {
        console.log(error)
    }
})