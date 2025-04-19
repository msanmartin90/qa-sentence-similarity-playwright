export function generateSentencePairs(count: number): [string, string][] {
    const base = "The quick brown fox jumps over the lazy dog";
    const variants = [
      "A fast dark-colored fox leaps above a sleepy canine",
      "A speedy brown fox hopped over a lazy dog",
      "The quick brown animal jumped past the sluggish pet",
      "A nimble fox skipped across the dozing hound"
    ];
  
    const pairs: [string, string][] = [];
    for (let i = 0; i < count; i++) {
      const variant = variants[i % variants.length];
      pairs.push([base, variant]);
    }
    return pairs;
  }
  