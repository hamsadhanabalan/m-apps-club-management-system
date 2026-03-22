"use client"

import { useEffect, useState } from "react"

export default function CertificatesPage() {

 const [certs, setCerts] = useState([])

 useEffect(() => {

  fetch("/api/certificates")
   .then(res => res.json())
   .then(data => setCerts(data))

 }, [])

 return (

  <div>

   <h1 className="text-2xl font-bold mb-6">
    My Certificates
   </h1>

   <table className="w-full border">

    <thead>
     <tr className="bg-gray-200">
      <th className="p-2">Type</th>
      <th className="p-2">Title</th>
      <th className="p-2">Download</th>
     </tr>
    </thead>

    <tbody>

     {certs.map((c: any) => (

      <tr key={c._id}>

       <td className="p-2">{c.type}</td>

       <td className="p-2">{c.title}</td>

       <td className="p-2">

        <a
         href={`/api/certificates/${c._id}`}
         className="bg-blue-500 text-white px-3 py-1 rounded"
        >
         Download
        </a>

       </td>

      </tr>

     ))}

    </tbody>

   </table>

  </div>
 )
}