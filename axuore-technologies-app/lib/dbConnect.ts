import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined");
    }
    
    // Ensure we're connecting to the correct database
    let connectionUri = mongoUri;
    if (!mongoUri.includes('/axouredb')) {
      // If the URI doesn't specify axouredb, append it
      if (mongoUri.endsWith('/')) {
        connectionUri = mongoUri + 'axouredb';
      } else if (mongoUri.includes('mongodb.net/') && !mongoUri.includes('mongodb.net/axouredb')) {
        connectionUri = mongoUri.replace('mongodb.net/', 'mongodb.net/axouredb');
      } else if (!mongoUri.includes('/') || mongoUri.endsWith('mongodb.net')) {
        connectionUri = mongoUri + '/axouredb';
      }
    }
    
    await mongoose.connect(connectionUri);
    console.log("MongoDB connected to axouredb database");
    console.log("Current database:", mongoose.connection.db?.databaseName);
  } catch (error) {
    console.log("Database connection error:", error);
  }
}

export default dbConnect;