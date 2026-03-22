type EventCardProps = {
  title: string
  description: string
  date: string
  location: string
  status: string
}

export default function EventCard({
  title,
  description,
  date,
  location,
  status,
}: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">

      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold text-blue-900">
          {title}
        </h3>

        <span
          className={`text-xs px-3 py-1 rounded-full ${
            status === "Upcoming"
              ? "bg-green-100 text-green-700"
              : status === "Past"
              ? "bg-gray-200 text-gray-600"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4">
        {description}
      </p>

      <div className="text-sm text-gray-500 space-y-1">
        <p>📅 {date}</p>
        <p>📍 {location}</p>
      </div>

      <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">
        View Details
      </button>

    </div>
  )
}