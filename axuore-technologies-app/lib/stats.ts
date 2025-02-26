"use server";
import dbConnect from "@/lib/dbConnect";
import Stats from "@/models/stats";


export async function getStats() {
  await dbConnect();
  const stats = await Stats.find();
  return stats;
}
