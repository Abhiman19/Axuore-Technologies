"use server";

import dbConnect from "@/lib/dbConnect";
import Testimonial from "@/models/testimonials";

export async function getTestimonials() {
  await dbConnect();
  const testimonials = await Testimonial.find();
  return testimonials;
}
