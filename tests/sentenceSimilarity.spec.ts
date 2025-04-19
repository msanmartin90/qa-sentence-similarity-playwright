import { test, expect } from '@playwright/test';
import { generateSentencePairs } from '../utils/sentenceGenerator';
import { getSentenceEmbedding } from '../utils/llmClient';
import { cosineSimilarity } from '../utils/similarityCalculator';

const sentencePairs = generateSentencePairs(10);
const SIMILARITY_THRESHOLD = 0.75;

test.describe('Sentence similarity check using Hugging Face embeddings', () => {
  for (let i = 0; i < sentencePairs.length; i++) {
    const [s1, s2] = sentencePairs[i];
    test(`Pair #${i + 1}`, async () => {
      const embedding1 = await getSentenceEmbedding(s1);
      const embedding2 = await getSentenceEmbedding(s2);
      const similarity = cosineSimilarity(embedding1, embedding2);

      console.log(`🔍 Pair #${i + 1}`);
      console.log(`   👉 Sentence 1: ${s1}`);
      console.log(`   👉 Sentence 2: ${s2}`);
      console.log(`   📏 Similarity: ${similarity.toFixed(4)}\n`);

      expect(similarity).toBeGreaterThan(SIMILARITY_THRESHOLD);
    });
  }
});
