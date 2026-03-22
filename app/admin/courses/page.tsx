"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function CoursesPage() {

  const [courses, setCourses] = useState<any[]>([])

  useEffect(() => {
    fetch("/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  const deleteCourse = async (id:string) => {

    await fetch(`/api/courses/${id}`, {
      method: "DELETE"
    })

    setCourses(courses.filter(c => c._id !== id))
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Courses</h1>

      <table className="border w-full">

        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Course</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map(course => (

            <tr key={course._id}>
              <td className="border p-2">{course.title}</td>

              <td className="border p-2 space-x-2">

                <Link
                  href={`/admin/courses/${course._id}/edit`}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </Link>

                <Link
                  href={`/admin/courses/${course._id}/students`}
                  className="bg-green-600 text-white px-2 py-1 rounded"
                >
                  Students
                </Link>

                <button
                  onClick={() => deleteCourse(course._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>

              </td>
            </tr>

          ))}
        </tbody>

      </table>

    </div>
  )
}