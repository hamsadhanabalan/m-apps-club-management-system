// components/super-admin/Sidebar.tsx
import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Super Admin</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/super-admin/dashboard" className="hover:text-yellow-400">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/super-admin/admins" className="hover:text-yellow-400">
            Manage Admins
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;