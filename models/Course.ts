import mongoose from "mongoose"

const CourseSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: String,

  instructor: String,

  materialUrl: String

}, { timestamps: true })

export default mongoose.models.Course ||
mongoose.model("Course", CourseSchema)