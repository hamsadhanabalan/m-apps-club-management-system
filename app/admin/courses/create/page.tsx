"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateCoursePage() {

  const router = useRouter()

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [instructor,setInstructor] = useState("")

  const createCourse = async () => {

    await fetch("/api/courses",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        title,
        description,
        instructor
      })
    })

    router.push("/admin/courses")
  }

  return (
    <div className="max-w-2xl">

      <h1 className="text-2xl font-bold mb-6">
        Create Course
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          type="text"
          placeholder="Course Title"
          className="w-full border p-3 rounded-lg"
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          placeholder="Course Description"
          className="w-full border p-3 rounded-lg"
          onChange={(e)=>setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Instructor Name"
          className="w-full border p-3 rounded-lg"
          onChange={(e)=>setInstructor(e.target.value)}
        />

        <button
          onClick={createCourse}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Create Course
        </button>

      </div>

    </div>
  )
}