type QuizCardProps = {
  title: string
  questions: number
  duration: string
  status: string
}

export default function QuizCard({
  title,
  questions,
  duration,
  status,
}: QuizCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">

      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-blue-900">
          {title}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="text-sm text-gray-600 space-y-1">
        <p>📝 Questions: {questions}</p>
        <p>⏳ Duration: {duration}</p>
      </div>

      <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">
        Start Quiz
      </button>

    </div>
  )
}