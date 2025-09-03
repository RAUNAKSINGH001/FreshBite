import { Admin } from "../db/index.js";
import { Router } from "express";
import { adminMiddlewares } from "../middleware/admin.js";
const adminRouter = Router();
adminRouter.post("/register", adminMiddlewares, async (req, res) => {

    const {name , username , password} =req.body;

  await Admin.create({ name, username, password });
  res.json({ message: `${name} registered successfully.` });
});

export default adminRouter;
