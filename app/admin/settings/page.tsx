export default function SettingsPage() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          type="text"
          placeholder="Club Name"
          className="border p-3 rounded-lg w-full"
        />

        <input
          type="email"
          placeholder="Admin Email"
          className="border p-3 rounded-lg w-full"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Save Changes
        </button>

      </div>

    </div>
  )
}