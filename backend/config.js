// config.js

// Using environment variables for sensitive data
export const PORT = process.env.PORT || 5555;  // Default to 5555 if not provided
export const mongodburl = process.env.MONGODB_URL || 'mongodb+srv://root:root@cluster0.ilzae.mongodb.net/genshin?retryWrites=true&w=majority&appName=Cluster0';
