"use client"

import { useState, useEffect } from "react"

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: "Hamsa Dhanabalan",
    about: "",
    skills: "",
    education: "",
    responsibility: "",
    achievements: "",
  })

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = async () => {

  await fetch("/api/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userId: "student123",
      ...formData
    })
  })

  alert("Profile saved")
}

useEffect(() => {

  const fetchProfile = async () => {

    const res = await fetch("/api/profile?userId=student123")

    const data = await res.json()

    if (data) {
      setFormData({
        name: data.name || "",
        about: data.about || "",
        skills: data.skills || "",
        education: data.education || "",
        responsibility: data.responsibility || "",
        achievements: data.achievements || "",
      })
    }

  }

  fetchProfile()

}, [])

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-blue-900">
        My Profile
      </h2>

      <div className="bg-white rounded-xl shadow-md p-8 space-y-6">

        {/* Profile Picture */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
          <div>
            <p className="text-lg font-semibold">{formData.name}</p>
            <button className="text-blue-900 text-sm mt-1 hover:underline">
              Change Profile Picture
            </button>
          </div>
        </div>

        {/* About */}
        <div>
          <label className="block font-medium mb-2">About</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block font-medium mb-2">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g., React, Node.js, AI, Cloud"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Education */}
        <div>
          <label className="block font-medium mb-2">Education</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Responsibility */}
        <div>
          <label className="block font-medium mb-2">Responsibility</label>
          <textarea
            name="responsibility"
            value={formData.responsibility}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Achievements */}
        <div>
          <label className="block font-medium mb-2">Achievements</label>
          <textarea
            name="achievements"
            value={formData.achievements}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block font-medium mb-2">
            Upload Resume (PDF)
          </label>
          <input
            type="file"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
  onClick={handleSave}
  className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
>
  Save Changes
</button>
        </div>

      </div>
    </div>
  )
}