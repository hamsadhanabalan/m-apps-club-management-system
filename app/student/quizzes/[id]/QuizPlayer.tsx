"use client"

import { useMemo, useState } from "react"

type QuizQuestion = {
  question: string
  options: string[]
  answer: number
}

type Quiz = {
  _id: string
  title: string
  questions: QuizQuestion[]
}

type Props = {
  quiz: Quiz
}

export default function QuizPlayer({ quiz }: Props) {
  const [answers, setAnswers] = useState<number[]>(
    new Array(quiz.questions.length).fill(-1)
  )
  const [submitting, setSubmitting] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const isReadyToSubmit = useMemo(() => {
    return answers.every((a) => a >= 0)
  }, [answers])

  const handleAnswer = (questionIndex: number, optionIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[questionIndex] = optionIndex
      return next
    })
  }

  const submitQuiz = async () => {
    setSubmitting(true)
    setError(null)

    const correct = quiz.questions.reduce((count, q, idx) => {
      return count + (answers[idx] === q.answer ? 1 : 0)
    }, 0)

    const finalScore = Math.round((correct / quiz.questions.length) * 100)
    setScore(finalScore)

    let certificateId: string | null = null

    if (finalScore >= 70) {
      try {
        const res = await fetch("/api/certificate/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "Student",
            course: quiz.title,
          }),
        })
        const data = await res.json()
        certificateId = data?.certificateId ?? null
      } catch (err) {
        console.error("Failed to generate certificate", err)
      }
    }

    try {
      await fetch("/api/quiz/result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentName: "Student",
          quizId: quiz._id,
          score: finalScore,
          certificateId,
        }),
      })
    } catch (err) {
      console.error("Failed to save quiz result", err)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{quiz.title}</h1>

      <div className="space-y-6">
        {quiz.questions.map((q, qi) => (
          <div key={qi} className="bg-white p-5 rounded-xl shadow border">
            <p className="font-semibold mb-3">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, oi) => (
                <label
                  key={oi}
                  className={`flex items-center gap-3 rounded-lg p-3 border transition hover:bg-gray-50 ${
                    answers[qi] === oi
                      ? "border-purple-500 bg-purple-50"
                      : "border-gray-200"
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${qi}`}
                    value={oi}
                    checked={answers[qi] === oi}
                    onChange={() => handleAnswer(qi, oi)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          disabled={!isReadyToSubmit || submitting}
          onClick={submitQuiz}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting…" : "Submit Quiz"}
        </button>

        {score !== null && (
          <div className="text-lg">
            Your score: <span className="font-semibold">{score}%</span>
          </div>
        )}

        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  )
}
