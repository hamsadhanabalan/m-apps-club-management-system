import { connectDB } from "@/lib/mongodb"
import Course from "@/models/Course"

export async function GET() {

  await connectDB()

  const courses = await Course.find()

  return Response.json(courses)
}

export async function POST(req: Request) {

  await connectDB()

  const body = await req.json()

  const course = await Course.create({
    title: body.title,
    description: body.description,
    instructor: body.instructor
  })

  return Response.json(course)
}