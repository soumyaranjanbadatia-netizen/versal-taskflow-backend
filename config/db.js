import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://soumyaranjanbadatia:soumya1234@ranjan.jvgmlhx.mongodb.net/Taskflow"
    )
    .then(() => console.log("db connected"));
};
