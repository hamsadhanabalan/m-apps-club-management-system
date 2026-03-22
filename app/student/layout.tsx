import "./globals.css"
import Navbar from "@/components/Navbar"

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Content */}
      <main className="w-full mx-auto px-6 py-8">
        {children}
      </main>

    </div>
  )
}