import axios from 'axios';
import { HUGGINGFACE_API_KEY } from './env';

export async function getSentenceEmbedding(sentence: string): Promise<number[]> {
  const response = await axios.post(
    "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2",
    { inputs: sentence },
    {
      headers: {
        Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  const result = response.data;

  // If it's already a 1D array (sentence-level embedding), return it
  if (Array.isArray(result) && typeof result[0] === 'number') {
    return result;
  }

  // If it's a 2D array (token-level embeddings), average them
  const avg = result[0].map((_: any, i: number) =>
    result.reduce((sum: number, vec: number[]) => sum + vec[i], 0) / result.length
  );
  return avg;
}
