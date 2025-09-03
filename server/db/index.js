import mongoose from "mongoose";
import { Schema, model } from "mongoose";
const main = async () => {
  await mongoose.connect(
    "mongodb+srv://raunakr386:RaunakSinghDbPassword@raunaksingh.il2dtqb.mongodb.net/freshBite"
  );
};
main();
const adminSchema = new Schema({
  name: String,
  username: String,
  password: String,
});
const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
});

const Admin = model("Admin", adminSchema);
const User = model("User", userSchema);

export { Admin, User };
