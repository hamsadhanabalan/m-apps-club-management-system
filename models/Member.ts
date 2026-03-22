import mongoose from "mongoose"

const MemberSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  role: {
    type: String,
    default: "student"
  },

  approved: {
    type: Boolean,
    default: false
  }

}, { timestamps: true })

export default mongoose.models.Member ||
mongoose.model("Member", MemberSchema)