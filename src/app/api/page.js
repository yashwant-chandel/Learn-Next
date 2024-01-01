// pages/index.js
import { connectToDatabase } from '../api/db.js'; 

// const HomePage = ({ data }) => {
//   return (
//     <div>
//       <h1>Home Page</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

export default async function HomePage() {
  // Connect to MongoDB
  const { db } = await connectToDatabase();

//   // Example: Fetch data from a MongoDB collection
  const collection = db.collection('products');
  const data = await collection.find({membership_tier_id:'prod_NjKRrQX7yokhpZ'}).toArray();
  
  return (
    <div>
      <h1>Home Page</h1>
      {data.map((item) => (
          <li key={item._id}>{item.membership_tier_id}</li>
        ))}
    </div>
  );
}

// export default HomePage;
