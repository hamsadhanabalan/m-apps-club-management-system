"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function EventsPage() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch("/api/events")
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <div>

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-bold">
          Events
        </h1>

        <Link
          href="/admin/events/create"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Event
        </Link>

      </div>

      <div className="grid grid-cols-3 gap-6">

        {events.map((event: any) => (

          <Link
            key={event._id}
            href={`/admin/events/${event._id}/edit`}
          >

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">

              <h2 className="font-semibold text-lg">
                {event.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {event.date}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  )
}