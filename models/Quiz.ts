import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({

  title: String,

  questions: [
    {
      question: String,
      options: [String],
      answer: Number
    }
  ],

  courseId: String

});

export default mongoose.models.Quiz ||
mongoose.model("Quiz", QuizSchema);