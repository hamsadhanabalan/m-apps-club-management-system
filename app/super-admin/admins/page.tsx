import Link from "next/link";
import SuperAdminSidebar from "@/components/super-admin/SuperAdminSidebar";
import SuperAdminAdminTable from "@/components/super-admin/SuperAdminAdminTable";

export default function AdminsPage() {

  const admins = [
    { id: 1, name: "Admin One", email: "admin1@mail.com" },
    { id: 2, name: "Admin Two", email: "admin2@mail.com" },
  ];

  return (
    <div className="flex">

      <SuperAdminSidebar />

      <div className="ml-64 p-8 w-full">

        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">Manage Admins</h1>

          <Link
            href="/super-admin/admins/create"
            className="bg-purple-700 text-white px-4 py-2 rounded"
          >
            Create Admin
          </Link>
        </div>

        <SuperAdminAdminTable admins={admins} />

      </div>
    </div>
  );
}