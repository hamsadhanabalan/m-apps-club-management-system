import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import QuizResult from "@/models/QuizResult";
import Certificate from "@/models/Certificate";
import { NextResponse } from "next/server";

export async function POST(req: Request){

 await connectDB()

 const body = await req.json()

 const { studentId, quizId, answers, name } = body

 const quiz = await Quiz.findById(quizId)

 let score = 0

 quiz.questions.forEach((q:any,index:number)=>{
  if(q.answer === answers[index]){
   score++
  }
 })

 const total = quiz.questions.length

 const passed = score / total >= 0.7

 await QuizResult.create({
  studentId,
  quizId,
  score,
  total,
  passed
 })

 if(passed){

  await Certificate.create({

   studentId,
   name,
   type:"quiz",
   title: quiz.title

  })

 }

 return NextResponse.json({
  score,
  total,
  passed
 })

}