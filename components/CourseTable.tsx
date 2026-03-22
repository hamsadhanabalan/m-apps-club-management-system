
import Link from "next/link"
export default function CourseTable() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-4">
        Courses
      </h2>

      <table className="w-full">

        <thead>
          <tr className="text-left border-b">
            <th className="p-2">Course</th>
            <th className="p-2">Instructor</th>
            <th className="p-2">Students</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">
            <td className="p-2">React Basics</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">120</td>
            <td className="p-2 text-green-600">Active</td>
          </tr>
<td className="p-3">
  <Link
    href="/admin/courses/1/edit"
    className="text-blue-600 hover:underline"
  >
    Edit
  </Link>
</td>
        </tbody>

      </table>

    </div>
  );
}