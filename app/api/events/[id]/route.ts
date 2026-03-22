import { connectDB } from "@/lib/mongodb"
import Event from "@/models/Event"
import type { NextRequest } from "next/server"

// use a loose type for context to avoid mismatched "Promise" parameter issue
export async function GET(
  req: NextRequest,
  context: { params: any }
) {
  const { id } = context.params

  await connectDB()

  const event = await Event.findById(id)

  return Response.json(event)
}

export async function PUT(
  req: NextRequest,
  context: { params: any }
) {
  const { id } = context.params

  await connectDB()

  const body = await req.json()

  const updatedEvent = await Event.findByIdAndUpdate(
    id,
    {
      title: body.title,
      description: body.description,
      date: body.date,
      location: body.location
    },
    { new: true }
  )

  return Response.json(updatedEvent)
}

export async function DELETE(
  req: NextRequest,
  context: { params: any }
) {
  const { id } = context.params

  await connectDB()

  await Event.findByIdAndDelete(id)

  return Response.json({
    message: "Event deleted successfully"
  })
}