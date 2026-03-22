"use client"

import { Bell } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function AdminNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">

      <div className="px-8 py-4 flex items-center justify-between">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-3">

          <Image
            src="/logo.png"
            alt="MAPPS Logo"
            width={36}
            height={36}
            className="rounded-md"
          />

          <h1 className="text-xl font-bold text-gray-800">
            MAPPS Admin
          </h1>

        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">

          <Bell className="text-gray-600 cursor-pointer hover:text-blue-600"/>

          {/* ADMIN PROFILE */}
          <div className="relative">

            <div
              onClick={() => setOpen(!open)}
              className="w-10 h-10 bg-blue-500 rounded-full cursor-pointer"
            />

            {open && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-lg border rounded-xl p-3">

                <Link
                  href="/admin/profile"
                  className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                >
                  Admin Profile
                </Link>

                <Link
                  href="/admin/settings"
                  className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                >
                  Settings
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