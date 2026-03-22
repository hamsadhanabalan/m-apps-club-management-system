import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  type: String, // event | course | quiz
  title: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Certificate ||
  mongoose.model("Certificate", CertificateSchema);