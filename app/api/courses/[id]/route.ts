import { connectDB } from "@/lib/mongodb"
import Course from "@/models/Course"

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()

  const { id } = await params
  const course = await Course.findById(id)

  return Response.json(course)
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()

  const { id } = await params
  const body = await req.json()

  const updated = await Course.findByIdAndUpdate(
    id,
    body,
    { new: true }
  )

  return Response.json(updated)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectDB()

  const { id } = await params
  await Course.findByIdAndDelete(id)

  return Response.json({ message: "Course deleted" })
}