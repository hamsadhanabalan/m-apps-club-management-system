"use client"

import { useEffect, useState } from "react"
import DashboardLayout from "@/components/DashboardLayout"

export default function EventRegistrationsPage() {

  const [registrations, setRegistrations] = useState([])

  useEffect(() => {
    fetch("/api/register-event")
      .then(res => res.json())
      .then(data => setRegistrations(data))
  }, [])

  const downloadCSV = () => {
    const headers = ["Name", "Email", "Event", "Date"]

    const rows = registrations.map((reg: any) => [
      reg.name,
      reg.email,
      reg.event,
      reg.date,
    ])

    const csvContent =
      headers.join(",") + "\n" +
      rows.map((e: any) => e.join(",")).join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "participants.csv"
    a.click()
  }

  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold mb-6">
        Event Registrations
      </h1>

      <div className="bg-white shadow rounded-xl p-6">
        <button
       onClick={downloadCSV}
  className="mb-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
>
  Download CSV
</button>

        <table className="w-full">

          <thead>
            <tr className="border-b text-left">
              <th className="py-2">Name</th>
              <th>Email</th>
              <th>Event</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            {registrations.map((reg:any, index:number) => (
              <tr key={index} className="border-b">

                <td className="py-2">{reg.name}</td>
                <td>{reg.email}</td>
                <td>{reg.event}</td>
                <td>{reg.date}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </DashboardLayout>
  )
}