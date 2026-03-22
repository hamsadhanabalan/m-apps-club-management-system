"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateEventPage() {

  const router = useRouter()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")

  const handleCreate = async () => {

    const res = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        date,
        location
      })
    })

    if (res.ok) {
      alert("Event created successfully")
      router.push("/admin/events")
    }
  }

  return (
    <div className="max-w-2xl">

      <h1 className="text-2xl font-bold mb-6">
        Create Event
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          type="text"
          placeholder="Event Title"
          className="w-full border p-3 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Event Description"
          className="w-full border p-3 rounded-lg"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          className="w-full border p-3 rounded-lg"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="w-full border p-3 rounded-lg"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Event
        </button>

      </div>

    </div>
  )
}