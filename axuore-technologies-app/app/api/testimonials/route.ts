import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Testimonial from "@/models/testimonials";

export async function GET() {
  await dbConnect();
  const testimonials = await Testimonial.find();
  return NextResponse.json({testimonials});
}
