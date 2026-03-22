import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import { NextResponse } from "next/server";


// GET QUIZ BY ID
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const { id } = await context.params;

  // Validate ID
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { error: "Invalid quiz id" },
      { status: 400 }
    );
  }

  const quiz = await Quiz.findById(id);

  if (!quiz) {
    return NextResponse.json(
      { error: "Quiz not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(quiz);
}


// CREATE QUIZ (ADMIN)
export async function POST(req: Request) {

  await connectDB()

  try {

    const body = await req.json()

    const { title, questions } = body

    if (!title || !questions) {
      return NextResponse.json(
        { error: "Title and questions required" },
        { status: 400 }
      )
    }

    const newQuiz = await Quiz.create({
      title,
      questions
    })

    return NextResponse.json(
      {
        message: "Quiz created successfully",
        quiz: newQuiz
      },
      { status: 201 }
    )

  } catch (error) {

    return NextResponse.json(
      { error: "Failed to create quiz" },
      { status: 500 }
    )

  }
}