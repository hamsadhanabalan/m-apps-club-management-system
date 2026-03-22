"use client"

import { useEffect, useState } from "react"
import DashboardLayout from "@/components/DashboardLayout"

export default function EventsPage() {

  const [events, setEvents] = useState([])

  const studentName = "Hamsa"
  const studentEmail = "hamsa@email.com"

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  const registerEvent = async (eventName:any) => {
    try {
      const res = await fetch("/api/register-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: studentName,
          email: studentEmail,
          event: eventName
        })
      })

      let data: any = null
      try {
        data = await res.json()
      } catch (parseErr) {
        console.error("Failed to parse response", parseErr)
      }

      if (!res.ok) {
        alert(data?.message || "Registration failed")
      } else {
        alert(data?.message || "Registered")
      }
    } catch (fetchErr) {
      console.error("Network error registering event", fetchErr)
      alert("Could not register event. Please try again later.")
    }
  }

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Events
      </h1>

      <div className="space-y-4">

        {events.map((event:any, index:number) => (

          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow border flex justify-between items-center"
          >

            <div>
              <h2 className="font-semibold">
                {event.title}
              </h2>

              <p className="text-gray-500">
                {event.date} • {event.mode}
              </p>
            </div>

            <button
              onClick={() => registerEvent(event.title)}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
            >
              Register
            </button>

          </div>

        ))}

      </div>

    </DashboardLayout>
  )
}