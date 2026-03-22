import SuperAdminSidebar from "../../../components/super-admin/SuperAdminSidebar";
import SuperAdminDashboardCards from "../../../components/super-admin/SuperAdminDashboardCards";

export default function DashboardPage() {
  return (
    <div className="flex">
      <SuperAdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Super Admin Dashboard</h1>

        <SuperAdminDashboardCards
          admins={5}
          members={120}
          events={12}
        />
      </div>
    </div>
  );
}