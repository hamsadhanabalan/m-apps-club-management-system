import Link from "next/link";

export default function SuperAdminSidebar() {
  return (
    <div className="w-64 h-screen bg-purple-700 text-white fixed">
      <div className="p-6 text-xl font-bold border-b border-purple-400">
        Super Admin
      </div>

      <nav className="flex flex-col p-4 gap-4">
        <Link href="/super-admin/dashboard" className="hover:bg-purple-600 p-2 rounded">
          Dashboard
        </Link>

        <Link href="/super-admin/admins" className="hover:bg-purple-600 p-2 rounded">
          Manage Admins
        </Link>
      </nav>
    </div>
  );
}