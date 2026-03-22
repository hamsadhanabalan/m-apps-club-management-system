import { connectDB } from "@/lib/mongodb"
import Enrollment from "@/models/Enrollment"

export async function POST(req: Request) {

  await connectDB()

  const body = await req.json()

  const enrollment = await Enrollment.create(body)

  return Response.json(enrollment)
}