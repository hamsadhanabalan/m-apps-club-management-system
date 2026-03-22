import { connectDB } from "@/lib/mongodb"
import QuizResult from "@/models/QuizResult"
import Quiz from "@/models/Quiz"
import Event from "@/models/Event"
import Course from "@/models/Course"
import { NextResponse } from "next/server"

export async function GET(){

 await connectDB()

 // Example student name (later we will use login session)
 const studentName = "Hamsa"

 const courses = await Course.countDocuments()

 const events = await Event.countDocuments()

 const quizzes = await QuizResult.countDocuments({
  studentName
 })

 const certificates = await QuizResult.countDocuments({
  studentName,
  certificateId: { $ne: null }
 })

 return NextResponse.json({
  courses,
  events,
  quizzes,
  certificates
 })

}