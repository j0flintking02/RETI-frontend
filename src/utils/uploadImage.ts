import cloudinary from './cloudinaryConfig';

export const uploadImage = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "reti_frontend"); // Use the new preset name

    const response = await cloudinary.uploader.upload(formData, {
      folder: 'uploads',
    });
    return response.secure_url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
