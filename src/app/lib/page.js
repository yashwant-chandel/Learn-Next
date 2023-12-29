// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export default async function connectToDatabase() {
  try {
      await client.connect();

    // Log or perform other actions to confirm the connection

    return client.db('node-first');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
