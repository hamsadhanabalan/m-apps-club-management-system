export default function RecentInternships() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border">

      <h2 className="text-xl font-semibold mb-4">
        Recent Internships
      </h2>

      <ul className="space-y-3">

        <li className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
          AI Developer Intern – Google
        </li>

        <li className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
          Web Developer Intern – Amazon
        </li>

        <li className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
          Data Analyst Intern – Microsoft
        </li>

      </ul>

    </div>
  )
}