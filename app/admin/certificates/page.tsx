export default function CertificatesPage() {
  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Certificates
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <p className="text-gray-500">
          Generate certificates for completed courses.
        </p>

        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Generate Certificate
        </button>

      </div>

    </div>
  )
}