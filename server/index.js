import express from 'express'
import adminRouter from './routes/admin.js'
import userRouter from './routes/user.js'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
app.use("/admin" , adminRouter);
app.use("/user" , userRouter);
const PORT = 3000;
app.listen(PORT , ()=>
{
    console.log(`App listen at PORT : ${PORT}`)
})