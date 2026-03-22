export default function ActivityPage() {
  const activities = [
    {
      type: "Course Completed",
      name: "Full Stack Development",
      date: "Jan 20, 2026",
    },
    {
      type: "Event Participated",
      name: "Hackathon 2026",
      date: "Feb 5, 2026",
    },
    {
      type: "Quiz Attempted",
      name: "React Basics Quiz",
      date: "Feb 10, 2026",
    },
  ]

  return (
    <div className="space-y-10">

      <h2 className="text-3xl font-bold text-blue-900">
        My Activity
      </h2>

      <div className="bg-white shadow-md rounded-xl p-6 space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="border-b pb-4 last:border-none"
          >
            <p className="font-semibold text-blue-900">
              {activity.type}
            </p>
            <p className="text-gray-700">
              {activity.name}
            </p>
            <p className="text-gray-500 text-sm">
              {activity.date}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}