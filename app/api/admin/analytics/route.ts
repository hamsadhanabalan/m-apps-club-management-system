import { connectDB } from "@/lib/mongodb"
import Profile from "@/models/Profile"
import Event from "@/models/Event"
import Registration from "@/models/Registration"
import Course from "@/models/Course"


export async function GET() {

  await connectDB()

  const totalStudents = await Profile.countDocuments()
  const totalEvents = await Event.countDocuments()
  const totalRegistrations = await Registration.countDocuments()
  const totalCourses = await Course.countDocuments()

  return Response.json({
    totalStudents,
    totalEvents,
    totalRegistrations,
    totalCourses
  })
}