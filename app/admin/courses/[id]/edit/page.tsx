export default function EditCoursePage() {
  return (
    <div className="max-w-2xl">

      <h1 className="text-2xl font-bold mb-6">
        Edit Course
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <input
          type="text"
          defaultValue="React Fundamentals"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          defaultValue="Learn React from basics"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          defaultValue="John Doe"
          className="w-full border p-3 rounded-lg"
        />

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Update Course
        </button>

      </div>

    </div>
  )
}