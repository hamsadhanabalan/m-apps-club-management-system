import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Certificate from "@/models/Certificate";

export async function GET(req: Request) {

  await connectDB();

  const { searchParams } = new URL(req.url);
  const studentId = searchParams.get("studentId");

  const certs = await Certificate.find({ studentId });

  return NextResponse.json(certs);
}