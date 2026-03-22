import { useRouter } from "next/router";
import SuperAdminSidebar from "@/components/super-admin/SuperAdminSidebar";
import SuperAdminAdminForm from "@/components/super-admin/SuperAdminAdminForm";

export default function EditAdmin() {

  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="flex">

      <SuperAdminSidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">
          Edit Admin {id}
        </h1>

        <SuperAdminAdminForm
          initialName="Admin Name"
          initialEmail="admin@mail.com"
        />

      </div>
    </div>
  );
}