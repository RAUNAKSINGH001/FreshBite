// schemas/loginSchema.js
import { z } from "zod";

const signinSchema = z.object({
  username: z.string().min(3, "Username must be at least 8 characters long"),
  password: z.string().min(6, "Password must be at least 8 characters long"),
});
// middlewares/validateLogin.js

export function validateSignin(req, res, next) {

try {
     const parsedResult = signinSchema.safeParse(req.body);
    //  console.log(parsedResult);
   if (!parsedResult.success) {
    console.log(parsedResult.error.issues)
      return res.status(400).json({
        msg: "Validation failed",
        errors: parsedResult.error.issues, // return Zod errors

      });
    }
    next();
}
catch(error)
{
     res.status(500).json({ msg: "Error login user ", error: error.message });
}
}
