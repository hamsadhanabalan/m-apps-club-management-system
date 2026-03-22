import Link from "next/link";

type Admin = {
  id: number;
  name: string;
  email: string;
};

export default function SuperAdminAdminTable({ admins }: { admins: Admin[] }) {
  return (
    <table className="w-full bg-white shadow rounded-xl">
      <thead className="bg-purple-700 text-white">
        <tr>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Actions</th>
        </tr>
      </thead>

      <tbody>
        {admins.map((admin) => (
          <tr key={admin.id} className="border-b">
            <td className="p-3">{admin.name}</td>
            <td className="p-3">{admin.email}</td>
            <td className="p-3 flex gap-2">
              <Link
                href={`/super-admin/admins/${admin.id}/edit`}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Edit
              </Link>

              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}