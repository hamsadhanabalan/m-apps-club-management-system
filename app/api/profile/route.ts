import { connectDB } from "@/lib/mongodb"
import Profile from "@/models/Profile"

export async function GET(req: Request) {

  await connectDB()

  const { searchParams } = new URL(req.url)
  const userId = searchParams.get("userId")

  const profile = await Profile.findOne({ userId })

  return Response.json(profile)
}

export async function POST(req: Request) {

  await connectDB()

  const body = await req.json()

  const profile = await Profile.findOneAndUpdate(
    { userId: body.userId },
    body,
    { upsert: true, new: true }
  )

  return Response.json(profile)
}