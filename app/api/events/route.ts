import { connectDB } from "@/lib/mongodb"
import Event from "@/models/Event"

export async function GET() {

  await connectDB()

  const events = await Event.find()

  return Response.json(events)
}

export async function POST(req: Request) {

  await connectDB()

  const body = await req.json()

  const newEvent = await Event.create({
    title: body.title,
    description: body.description,
    date: body.date,
    location: body.location
  })

  return Response.json({
    message: "Event created successfully",
    data: newEvent
  })
}