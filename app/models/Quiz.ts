import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  title: String,

  questions: [
    {
      question: String,
      options: [String],   // ✅ FIXED
      answer: Number
    }
  ],

  courseId: String
});

export default mongoose.models.Quiz ||
  mongoose.model("Quiz", QuizSchema);