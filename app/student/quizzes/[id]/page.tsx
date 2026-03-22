"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import DashboardLayout from "@/components/DashboardLayout"

type Question = {
  question: string
  options: string[]
  correctAnswer: number
}

type Quiz = {
  _id: string
  title: string
  questions: Question[]
}

export default function QuizPage() {

  const { id } = useParams()
  const router = useRouter()

  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/quiz/${id}`)
      .then(res => res.json())
      .then(data => {
        setQuiz(data)
        setAnswers(new Array(data.questions.length).fill(-1))
        setLoading(false)
      })
  }, [id])

  const handleSelect = (qIndex: number, optionIndex: number) => {
    const updated = [...answers]
    updated[qIndex] = optionIndex
    setAnswers(updated)
  }

  const handleSubmit = async () => {

  let score = 0

  quiz?.questions.forEach((q, i) => {
    if (answers[i] === q.correctAnswer) {
      score++
    }
  })

  const percentage = (score / quiz!.questions.length) * 100

  const res = await fetch("/api/quiz/result", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      studentName: "Hamsa", // later from login
      quizId: quiz?._id,
      score,
      total: quiz?.questions.length,
      percentage
    })
  })

  const data = await res.json()

  alert(`Score: ${score}/${quiz?.questions.length}`)

  if (data.certificateId) {
    alert("🎉 Certificate Generated!")
  }

  router.push("/student/dashboard")
}

  if (loading) return <p>Loading...</p>

  if (!quiz) return <p>Quiz not found</p>

  return (
    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-6">
        {quiz.title}
      </h1>

      <div className="space-y-6">

        {quiz.questions.map((q, qIndex) => (

          <div key={qIndex} className="bg-white p-5 rounded-lg shadow border">

            <p className="font-medium mb-3">
              {qIndex + 1}. {q.question}
            </p>

            <div className="space-y-2">

              {q.options.map((opt, optIndex) => (

                <button
                  key={optIndex}
                  onClick={() => handleSelect(qIndex, optIndex)}
                  className={`block w-full text-left px-4 py-2 rounded border 
                  ${answers[qIndex] === optIndex ? "bg-purple-200" : "bg-white"}`}
                >
                  {opt}
                </button>

              ))}

            </div>

          </div>

        ))}

      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Submit Quiz
      </button>

    </DashboardLayout>
  )
}