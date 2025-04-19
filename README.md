# 🧪 QA Sentence Similarity Automation

This project is a **Playwright + TypeScript automation suite** that tests whether a sentence transformer model (hosted on **Hugging Face**) can correctly determine if two sentences are semantically similar.

It generates **100 sentence pairs**, feeds them to the model, and calculates **cosine similarity** between their embeddings. The test passes if the similarity is above a configurable threshold (default: `0.75`).

---

## 🚀 Features

- ✅ Automated testing with [Playwright](https://playwright.dev/)
- 🤖 Sentence embeddings from Hugging Face (MiniLM-L6-v2)
- 🧠 Cosine similarity calculation
- 🔁 Synthetic sentence generation
- 📊 Configurable similarity threshold

---

## 🛠 Requirements

- Node.js (v18+)
- A free [Hugging Face account](https://huggingface.co)
- A Hugging Face **API Token**

---

## 🔧 Setup

1. Clone or unzip this repo:
   ```bash
   cd qa-sentence-similarity-playwright

## 🔧 Install Dependencies 

npm install
npx playwright install

## Create a .env file in the root:
HUGGINGFACE_API_KEY=your_huggingface_token_here

## Run the Tests
npm test

Each test logs the sentence pair and their cosine similarity:
🔍 Pair #1
   👉 Sentence 1: The quick brown fox jumps over the lazy dog
   👉 Sentence 2: A speedy brown fox hopped over a lazy dog
   📏 Similarity: 0.8325

## Powered by

Hugging Face Inference API

sentence-transformers/all-MiniLM-L6-v2

