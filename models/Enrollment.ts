import mongoose from "mongoose"

const EnrollmentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  courseId: {
    type: String,
    required: true
  },
  enrolledAt: {
    type: Date,
    default: () => new Date()
  }
}, { timestamps: true })

export default mongoose.models.Enrollment ||
  mongoose.model("Enrollment", EnrollmentSchema)
