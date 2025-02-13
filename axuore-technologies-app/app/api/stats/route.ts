import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Stats from "@/models/stats";


export async function GET() {
  await dbConnect();
  const stats = await Stats.find();
  return NextResponse.json({stats});
}
