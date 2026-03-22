import mongoose from "mongoose"

const ProfileSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true
  },

  name: String,
  about: String,
  skills: String,
  education: String,
  responsibility: String,
  achievements: String,
  resumeUrl: String

}, { timestamps: true })

export default mongoose.models.Profile ||
  mongoose.model("Profile", ProfileSchema)
