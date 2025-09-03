import z from 'zod'
const registerSchema = z.object({
    name: z.string().min(8  ,"name must be atleast 8 characters long "),
username: z.string().min(8, "Username must be at least 8 characters long"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export function adminMiddlewares(req ,res , next)
{
const {name , username , password} =req.body;
 if(!name || !username  || !password)
    {
        res.status(400).json({msg:"All details are required to register."})
    }

try {
     const parsedResult = registerSchema.safeParse(req.body);
    //  console.log(parsedResult);
   if (!parsedResult.success) {
    console.log(parsedResult.error.issues[0].message)
      return res.status(400).json({
        msg: "Validation failed",
        errors: parsedResult.error.issues, // return Zod errors
      });
    }
    next();
}
catch(error)
{
     res.status(500).json({ msg: "Error adding user ", error: error.message });
}
}