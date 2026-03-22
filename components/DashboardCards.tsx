export default function DashboardCards() {
  return (
    <div className="grid grid-cols-4 gap-6">

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Students</p>
        <h2 className="text-2xl font-bold">350</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Courses</p>
        <h2 className="text-2xl font-bold">24</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Events</p>
        <h2 className="text-2xl font-bold">8</h2>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <p className="text-gray-500">Certificates</p>
        <h2 className="text-2xl font-bold">120</h2>
      </div>

    </div>
  );
}