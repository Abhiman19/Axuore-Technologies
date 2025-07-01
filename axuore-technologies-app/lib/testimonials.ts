"use server";

import dbConnect from "@/lib/dbConnect";
import Testimonial from "@/models/testimonials";

export async function getTestimonials() {
  try {
    await dbConnect();
    
    // Log the current database to verify we're using the right one
    console.log("Connected to database:", process.env.NODE_ENV === 'development' ? 'axouredb' : 'production database');
    
    const testimonials = await Testimonial.find({}).lean();
    
    // Convert to plain objects for Next.js serialization
    return JSON.parse(JSON.stringify(testimonials));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}
