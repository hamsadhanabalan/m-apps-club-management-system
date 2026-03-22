import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function GET() {
  await connectDB();

  await User.deleteMany({});

  const hashedPassword = await bcrypt.hash("123", 10);

  await User.create([
    {
      name: "Student",
      email: "student@gmail.com",
      password: hashedPassword,
      role: "student",
    },
    {
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    },
    {
      name: "Super Admin",
      email: "super@gmail.com",
      password: hashedPassword,
      role: "superadmin",
    },
  ]);

  return NextResponse.json({ message: "Users seeded successfully" });
}