import { connectDB } from "@/lib/mongodb"
import QuizResult from "@/models/QuizResult"
import { NextResponse } from "next/server"

function generateCertificateId() {
  return "CERT-" + Date.now()
}

export async function POST(req: Request) {

  await connectDB()

  const body = await req.json()

  const { studentName, quizId, score, total, percentage } = body

  let certificateId = null

  // Pass condition (70%)
  if (percentage >= 70) {
    certificateId = generateCertificateId()
  }

  const result = await QuizResult.create({
    studentName,
    quizId,
    score,
    total,
    percentage,
    certificateId,
    date: new Date()
  })

  return NextResponse.json({
    success: true,
    result,
    certificateId
  })
}