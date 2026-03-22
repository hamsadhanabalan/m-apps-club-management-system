import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  score: Number,
});

export default mongoose.models.Result ||
  mongoose.model("Result", ResultSchema);