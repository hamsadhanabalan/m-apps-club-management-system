"use client"

import { useParams } from "next/navigation"

export default function CourseStudentsPage(){

  const { id } = useParams()

  const students = [
    { id:1, name:"Rahul", email:"rahul@test.com" },
    { id:2, name:"Priya", email:"priya@test.com" }
  ]

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Enrolled Students
      </h1>

      <p className="mb-4">
        Course ID: {id}
      </p>

      <table className="border w-full">

        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          {students.map(student => (

            <tr key={student.id}>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.email}</td>
            </tr>

          ))}
        </tbody>

      </table>

    </div>
  )
}