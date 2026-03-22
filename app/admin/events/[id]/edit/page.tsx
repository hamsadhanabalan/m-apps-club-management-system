"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"

export default function EditEventPage() {

  const { id } = useParams()
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [location, setLocation] = useState("")

  // Fetch event data
  useEffect(() => {

    fetch(`/api/events/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title)
        setDescription(data.description)
        setDate(data.date)
        setLocation(data.location)
      })

  }, [id])
//delete event
const handleDelete = async () => {

  const confirmDelete = confirm("Are you sure you want to delete this event?")

  if (!confirmDelete) return

  const res = await fetch(`/api/events/${id}`, {
    method: "DELETE"
  })

  if (res.ok) {
    alert("Event deleted")
    router.push("/admin/events")
  }

}
  // Update event
  const handleUpdate = async () => {

    const res = await fetch(`/api/events/${id}`, {
      method: "PUT",
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
      alert("Event updated successfully")
      router.push("/admin/events")
    }

  }

  return (
    <div className="max-w-2xl">

      <h1 className="text-2xl font-bold mb-6">
        Edit Event
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleUpdate}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Update Event
        </button>
<button
  onClick={handleDelete}
  className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
>
  Delete Event
</button>
      </div>

    </div>
  )
}