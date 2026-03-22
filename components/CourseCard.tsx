type CourseCardProps = {
  title: string
  description: string
  level: string
  duration: string
  category: string
}

export default function CourseCard({
  title,
  description,
  level,
  duration,
  category,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300">
      
      <div className="mb-3">
        <span className="text-xs bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-blue-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm">
        {description}
      </p>

      <div className="flex justify-between text-sm text-gray-500 mb-4">
        <span>Level: {level}</span>
        <span>{duration}</span>
      </div>

      <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">
        Enroll Now
      </button>

    </div>
  )
}