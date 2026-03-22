import mongoose from "mongoose"

const EnrollmentSchema = new mongoose.Schema({

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  },

  studentId: String,
  name: String,
  email: String

})

export default mongoose.models.Enrollment ||
mongoose.model("Enrollment", EnrollmentSchema)