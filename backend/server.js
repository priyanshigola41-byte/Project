import app from "./app.js";
import cloudinary from "cloudinary";
import { config } from "dotenv";

// Load environment variables from .env file if it exists (for local development)
// On Render, environment variables are set in the dashboard
config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
