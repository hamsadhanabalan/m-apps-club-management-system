"use client"

import { useParams } from "next/navigation"

export default function EventRegistrationsPage() {
  const params = useParams()
  const id = params.id

  const registrations = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@test.com",
      date: "2026-03-08",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@test.com",
      date: "2026-03-09",
    },
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Event Registrations
      </h1>

      <p className="mb-4">Event ID: {id}</p>

      <table className="border w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {registrations.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}