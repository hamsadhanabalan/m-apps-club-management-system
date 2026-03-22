import { connectDB } from "@/lib/mongodb";
import Result from "@/models/Result";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const data = await Result.find().sort({ score: -1 });

  return NextResponse.json(data);
}