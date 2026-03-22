import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm">

      <div className="p-6 text-xl font-bold text-blue-600">
        MAPPS Club
      </div>

      <nav className="px-4 space-y-2">

        <Link href="/admin/dashboard" className="block p-3 rounded-lg hover:bg-gray-100">
          Dashboard
        </Link>

        <Link href="/admin/courses" className="block p-3 rounded-lg hover:bg-gray-100">
          Courses
        </Link>

        <Link href="/admin/events" className="block p-3 rounded-lg hover:bg-gray-100">
          Events
        </Link>

        <Link href="/admin/quizzes" className="block p-3 rounded-lg hover:bg-gray-100">
          Quizzes
        </Link>

        <Link href="/admin/members" className="block p-3 rounded-lg hover:bg-gray-100">
          Members
        </Link>

        <Link href="/admin/certificates" className="block p-3 rounded-lg hover:bg-gray-100">
          Certificates
        </Link>

        <Link href="/admin/announcements" className="block p-3 rounded-lg hover:bg-gray-100">
          Announcements
        </Link>

        <Link href="/admin/analytics" className="block p-3 rounded-lg hover:bg-gray-100">
          Analytics
        </Link>

        <Link href="/admin/settings" className="block p-3 rounded-lg hover:bg-gray-100">
          Settings
        </Link>

      </nav>

    </aside>
  );
}