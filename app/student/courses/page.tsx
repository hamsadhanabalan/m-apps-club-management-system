"use client"

import DashboardLayout from "@/components/DashboardLayout"

export default function CoursesPage() {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="font-semibold text-lg">React Development</h2>
          <p className="text-gray-500 mt-2">
            Learn modern frontend development with React.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="font-semibold text-lg">AI Fundamentals</h2>
          <p className="text-gray-500 mt-2">
            Understand the basics of Artificial Intelligence.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border">
          <h2 className="font-semibold text-lg">Cloud Computing</h2>
          <p className="text-gray-500 mt-2">
            Learn AWS, Azure, and cloud infrastructure.
          </p>
        </div>

      </div>

    </DashboardLayout>
  )
}