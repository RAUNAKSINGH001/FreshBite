import { Admin } from "../db/index.js";
import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { adminMiddlewares } from "../middleware/admin.js";
import {validateSignin} from "../middleware/validateSignin.js"
const secretKey = "Raunak@1";
const adminRouter = Router();
adminRouter.post("/register", adminMiddlewares, async (req, res) => {

    const {name , username , password} =req.body;
const existingAdmin = await Admin.findOne({username})
if(existingAdmin)
{
     return res.status(400).json({msg:"Username already taken."}) 
  
}
  const hashedPassword = await bcrypt.hash(password, 10);

  await Admin.create({ name, username, password:hashedPassword });
  res.status(201).json({ message: `${name} registered successfully.` });
});


adminRouter.post("/signin", validateSignin , async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  const isMatch =  bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid username or password" });
  }

  // ✅ Create JWT
  const token = jwt.sign({ id: admin._id, username: admin.username }, secretKey, {
    expiresIn: "1h", // token expires in 1 hour
  });

  res.json({ message: "Welcome to FreshBite.", token });
});
export default adminRouter;
