import SuperAdminSidebar from "@/components/super-admin/SuperAdminSidebar";
import SuperAdminAdminForm from "@/components/super-admin/SuperAdminAdminForm";

export default function CreateAdminPage() {
  return (
    <div className="flex">

      <SuperAdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">Create Admin</h1>

        <SuperAdminAdminForm />

      </div>
    </div>
  );
}