"use client"

import { useEffect, useState } from "react"

export default function StudentsPage() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("/api/profiles")
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  return (

    <div>

      <h1 className="text-2xl font-bold mb-6">
        Student Profiles
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {students.map((s: any) => (

          <div
            key={s._id}
            className="bg-white p-6 rounded-xl shadow"
          >

            <h2 className="text-lg font-semibold">
              {s.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {s.skills}
            </p>

            <p className="text-sm mt-2">
              {s.education}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}