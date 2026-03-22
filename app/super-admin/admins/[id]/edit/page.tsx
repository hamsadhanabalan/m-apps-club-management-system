import SuperAdminSidebar from "@/components/super-admin/SuperAdminSidebar";
import SuperAdminAdminForm from "@/components/super-admin/SuperAdminAdminForm";

interface Props {
  params: {
    id: string;
  };
}

export default function EditAdminPage({ params }: Props) {

  const { id } = params;

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