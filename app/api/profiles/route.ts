import { connectDB } from "@/lib/mongodb"
import Profile from "@/models/Profile"

export async function GET() {

  await connectDB()

  const profiles = await Profile.find()

  return Response.json(profiles)
}