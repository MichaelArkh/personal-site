import mongoose from 'mongoose';

export async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGO_URI

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}