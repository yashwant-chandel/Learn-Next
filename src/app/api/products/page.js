import Image from 'next/image';
import ClientPromise from '../../lib/mongodb.js';

export default async function handler(req, res) {
  const client = await ClientPromise;
  const db = client.db('node-first');

//   switch (req.method) {
//     case "POST":
//       let bodyObject = JSON.parse(req.body);
//       let myPost = await db.collection("products").insertOne(bodyObject);
//       res.json(myPost.ops[0]);
//       break;
//     case "GET":
//       const allPosts = await db.collection("products").find({}).toArray();
//       res.json({ status: 200, data: allPosts });
//       break;
//   }
  // return db;
}