import { connectDB } from "@/lib/mongodb"
import Quiz from "@/models/Quiz"
import { NextResponse } from "next/server"

export async function GET() {
  await connectDB()

  const quizzes = await Quiz.find()

  return NextResponse.json(quizzes)
}