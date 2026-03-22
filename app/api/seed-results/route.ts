import { connectDB } from "@/lib/mongodb";
import Result from "@/models/Result";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  await Result.deleteMany({});

  await Result.create([
    { name: "Arjun", score: 920 },
    { name: "Priya", score: 870 },
    { name: "Rahul", score: 800 },
  ]);

  return NextResponse.json({ message: "Results seeded" });
}