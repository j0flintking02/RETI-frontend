import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: `${import.meta.env.CLOUD_NAME}`,
  api_key: `${import.meta.env.CLOUD_API_KEY}`,
  api_secret: `${import.meta.env.CLOUD_API_SECRET}`,
});

export default cloudinary;
