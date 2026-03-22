"use client";

import { useState } from "react";

type Props = {
  initialName?: string;
  initialEmail?: string;
};

export default function SuperAdminAdminForm({ initialName = "", initialEmail = "" }: Props) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(`Admin Saved: ${name} - ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 w-full max-w-md">

      <h2 className="text-xl font-bold mb-4">Admin Form</h2>

      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="border w-full p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          className="border w-full p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className="bg-purple-700 text-white px-4 py-2 rounded">
        Save Admin
      </button>
    </form>
  );
}