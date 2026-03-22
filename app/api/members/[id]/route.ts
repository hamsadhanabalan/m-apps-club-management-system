import { connectDB } from "@/lib/mongodb"
import Member from "@/models/Member"
import type { NextRequest } from "next/server"

// use a loose type for context to avoid mismatched "Promise" parameter issue
export async function PUT(
  req: NextRequest,
  context: { params: any }
) {
  const { id } = context.params

  await connectDB()

  const body = await req.json()

  const updatedMember = await Member.findByIdAndUpdate(
    id,
    body,
    { new: true }
  )

  return Response.json(updatedMember)
}

export async function DELETE(
  req: NextRequest,
  context: { params: any }
) {
  const { id } = context.params

  await connectDB()

  await Member.findByIdAndDelete(id)

  return Response.json({ message: "Member deleted" })
}