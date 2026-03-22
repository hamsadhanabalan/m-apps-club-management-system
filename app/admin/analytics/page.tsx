"use client"

import { useEffect, useState } from "react"

export default function AdminAnalytics() {

  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    fetch("/api/admin/analytics")
      .then(res => res.json())
      .then(data => setStats(data))
  }, [])

  if (!stats) return <p className="p-6">Loading analytics...</p>

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-8">
        Admin Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold">
            Total Students
          </h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">
            {stats.totalStudents}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold">
            Total Events
          </h2>
          <p className="text-4xl font-bold text-green-600 mt-2">
            {stats.totalEvents}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold">
            Total Registrations
          </h2>
          <p className="text-4xl font-bold text-purple-600 mt-2">
            {stats.totalRegistrations}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold">
            Total Courses
          </h2>
          <p className="text-4xl font-bold text-orange-600 mt-2">
            {stats.totalCourses}
          </p>
        </div>

      </div>

    </div>

  )
}