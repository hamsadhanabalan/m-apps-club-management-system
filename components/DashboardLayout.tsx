"use client"

import { Home, Calendar, BookOpen, Trophy, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex h-screen w-full bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex-shrink-0">

        <h2 className="text-2xl font-bold text-blue-900 mb-8">
          MAPPS Club
        </h2>

        <nav className="flex flex-col gap-5">

          <Link
            href="/student/dashboard"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition"
          >
            <Home size={18} />
            Dashboard
          </Link>

          <Link
            href="/student/courses"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition"
          >
            <BookOpen size={18} />
            Courses
          </Link>

          <Link
            href="/student/events"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition"
          >
            <Calendar size={18} />
            Events
          </Link>

          <Link
            href="/student/quizzes"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition"
          >
            <Trophy size={18} />
            Quizzes
          </Link>

          <Link
            href="/student/members"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition"
          >
            <Users size={18} />
            Members
          </Link>
          <Link
  href="/student/certificates"
  className="bg-white/20 px-4 py-2 rounded-lg hover:bg-white/30 transition"
>
  View Certificates
</Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  )
}