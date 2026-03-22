export default function AnnouncementsPage() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Announcements
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <textarea
          placeholder="Write announcement..."
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Publish
        </button>

      </div>

    </div>
  )
}