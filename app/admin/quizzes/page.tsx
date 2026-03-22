"use client";

import { useEffect, useState } from "react";

export default function AdminQuizzes() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("/api/admin/quizzes")
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        All Quizzes
      </h1>

      <div className="space-y-4">

        {quizzes.map((quiz: any, index) => (
          <div
            key={index}
            className="border p-5 rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">
              {quiz.title}
            </h2>

            <p className="text-gray-500 mt-2">
              Questions: {quiz.questions.length}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}