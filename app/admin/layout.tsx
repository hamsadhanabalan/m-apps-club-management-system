import AdminSidebar from "@/components/AdminSidebar";
import AdminNavbar from "@/components/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">

      <AdminSidebar />

      <div className="flex flex-col flex-1">

        <AdminNavbar />

        <main className="p-8 overflow-y-auto bg-gray-50">
          {children}
        </main>

      </div>

    </div>
  );
}