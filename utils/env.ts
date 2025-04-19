import dotenv from 'dotenv';
dotenv.config();

export const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY || '';
