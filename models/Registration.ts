import mongoose from "mongoose"

const RegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.models.Registration ||
  mongoose.model("Registration", RegistrationSchema)
