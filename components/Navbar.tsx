"use client"

import Link from "next/link"
import { useState } from "react"
import { Bell } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT SECTION (LOGO + NAME) */}
        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="MAPPS Logo"
            width={40}
            height={40}
            className="rounded-md"
          />

          <h1 className="text-xl font-bold text-gray-800 tracking-wide">
            MAPPS Club
          </h1>

        </div>

        {/* CENTER NAVIGATION */}
        <div className="flex items-center gap-8 text-gray-600 font-medium">

          <Link
            href="/student/dashboard"
            className="hover:text-blue-600 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/student/courses"
            className="hover:text-blue-600 transition"
          >
            Courses
          </Link>

          <Link
            href="/student/events"
            className="hover:text-blue-600 transition"
          >
            Events
          </Link>

          <Link
            href="/student/quizzes"
            className="hover:text-blue-600 transition"
          >
            Quizzes
          </Link>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">

          {/* Notification */}
          <Bell
            size={22}
            className="text-gray-600 cursor-pointer hover:text-blue-600 transition"
          />

          {/* PROFILE */}
          <div className="relative">

            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-10 bg-gray-200 rounded-full cursor-pointer"
            />

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg border rounded-xl p-3">

                <Link
                  href="/profile"
                  className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                >
                  My Profile
                </Link>

                <Link
                  href="/certificates"
                  className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                >
                  Certificates
                </Link>

                <Link
                  href="/my-activity"
                  className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                >
                  My Activity
                </Link>

                <hr className="my-2" />

                <button className="text-red-500 px-3 py-2 w-full text-left hover:bg-gray-100 rounded-md">
                  Logout
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

    </nav>
  )
}