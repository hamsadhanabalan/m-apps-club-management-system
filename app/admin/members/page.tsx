"use client"

import { useEffect, useState } from "react"

type Member = {
  _id: string
  name: string
  email: string
  role: string
  approved: boolean
}

export default function MembersPage() {

  const [members, setMembers] = useState<Member[]>([])

  useEffect(() => {
    fetch("/api/members")
      .then(res => res.json())
      .then(data => setMembers(data))
  }, [])

  const approveMember = async (id: string) => {

    await fetch(`/api/members/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved: true })
    })

    setMembers(members.map(m => m._id === id ? { ...m, approved: true } : m))
  }

  const promoteMember = async (id: string) => {

    await fetch(`/api/members/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "admin" })
    })

    setMembers(members.map(m => m._id === id ? { ...m, role: "admin" } : m))
  }

  const deleteMember = async (id: string) => {

    await fetch(`/api/members/${id}`, {
      method: "DELETE"
    })

    setMembers(members.filter(m => m._id !== id))
  }

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Members
      </h1>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>

          {members.map(member => (

            <tr key={member._id}>

              <td className="border p-2">{member.name}</td>
              <td className="border p-2">{member.email}</td>
              <td className="border p-2">{member.role}</td>

              <td className="border p-2">
                {member.approved ? "Approved" : "Pending"}
              </td>

              <td className="border p-2 flex gap-2">

                {!member.approved && (
                  <button
                    onClick={() => approveMember(member._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Approve
                  </button>
                )}

                <button
                  onClick={() => promoteMember(member._id)}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  Promote
                </button>

                <button
                  onClick={() => deleteMember(member._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>
      </table>

    </div>
  )
}