import mongoose from "mongoose"

const QuizResultSchema = new mongoose.Schema({
  studentName: String,
  quizId: String,
  score: Number,
  total: Number,
  percentage: Number,
  certificateId: String,
  date: Date
})

export default mongoose.models.QuizResult ||
mongoose.model("QuizResult", QuizResultSchema)