// import mongoose from "mongoose";

// export const dbConnection = () => {
//   mongoose
//     .connect(process.env.MONGO_URI, {
//       dbName: "MERN_JOB_SEEKING_WEBAPP",
//     })
//     .then(() => {
//       console.log("Connected to database.");
//     })
//     .catch((err) => {
//       console.log(`Some Error occured. ${err}`);
//     });
// };

import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    console.log("Connecting to:", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("MongoDB Error:");
    console.error(err);
  }
};