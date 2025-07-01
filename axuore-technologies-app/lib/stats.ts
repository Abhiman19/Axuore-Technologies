"use server";
import dbConnect from "@/lib/dbConnect";
import Stats from "@/models/stats";

export async function getStats() {
  try {
    await dbConnect();
    
    // Log the current database to verify we're using the right one
    console.log("Connected to database:", process.env.NODE_ENV === 'development' ? 'axouredb' : 'production database');
    
    const stats = await Stats.find({}).lean();
    
    // Convert to plain objects for Next.js serialization
    return JSON.parse(JSON.stringify(stats));
  } catch (error) {
    console.error("Error fetching stats:", error);
    return [];
  }
}
