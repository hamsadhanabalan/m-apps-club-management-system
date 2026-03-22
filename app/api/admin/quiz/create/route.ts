import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import { NextResponse } from "next/server";

export async function POST(req: Request){

 await connectDB()

 const body = await req.json()

 const quiz = await Quiz.create({
  title: body.title,
  questions: body.questions
 })

 return NextResponse.json(quiz)

}