"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import DashboardLayout from "@/components/DashboardLayout"

type Quiz = {
  _id: string
  title: string
  description?: string
}

export default function StudentQuizzes() {

  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/quiz")
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data)
        setLoading(false)
      })
  }, [])

  return (
    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-6">
        Available Quizzes
      </h1>

      {loading ? (
        <p>Loading quizzes...</p>
      ) : quizzes.length === 0 ? (
        <p>No quizzes available</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {quizzes.map((quiz) => (

            <div
              key={quiz._id}
              className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition"
            >

              <h2 className="text-xl font-semibold mb-2">
                {quiz.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {quiz.description || "No description available"}
              </p>

              <Link
                href={`/student/quizzes/${quiz._id}`}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg inline-block hover:bg-purple-700 transition"
              >
                Start Quiz
              </Link>

            </div>

          ))}

        </div>
      )}

    </DashboardLayout>
  )
}