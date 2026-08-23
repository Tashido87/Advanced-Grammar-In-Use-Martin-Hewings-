export function normalizeAnswer(str: string): string {
  return str
    .toLowerCase()
    .trim()
    // normalize smart quotes and apostrophes
    .replace(/[‘’`]/g, "'")
    .replace(/[“”]/g, '"')
    // normalize multiple whitespaces
    .replace(/\s+/g, " ")
    // normalize optional trailing periods or commas
    .replace(/[,.?!]+$/, "")
    .trim();
}

export function checkAnswer(
  userInput: string,
  correctAnswer: string | string[],
  alternatives?: string[]
): { isCorrect: boolean; matchedForm?: string } {
  const normalizedUser = normalizeAnswer(userInput);
  if (!normalizedUser) return { isCorrect: false };

  const validTargets: string[] = [];

  if (Array.isArray(correctAnswer)) {
    validTargets.push(...correctAnswer);
  } else if (typeof correctAnswer === "string") {
    // If it contains " / ", split alternatives
    if (correctAnswer.includes(" / ")) {
      validTargets.push(...correctAnswer.split(" / "));
    } else if (correctAnswer.includes("/")) {
      validTargets.push(...correctAnswer.split("/"));
    } else {
      validTargets.push(correctAnswer);
    }
  }

  if (alternatives && alternatives.length > 0) {
    validTargets.push(...alternatives);
  }

  for (const target of validTargets) {
    const normalizedTarget = normalizeAnswer(target);
    if (normalizedUser === normalizedTarget) {
      return { isCorrect: true, matchedForm: target };
    }

    // Check contraction equivalences e.g. "it is" vs "it's", "do not" vs "don't", "have" vs "'ve"
    const targetWithContractions = normalizedTarget
      .replace(/\bi am\b/g, "i'm")
      .replace(/\byou are\b/g, "you're")
      .replace(/\bwe are\b/g, "we're")
      .replace(/\bthey are\b/g, "they're")
      .replace(/\bhe is\b/g, "he's")
      .replace(/\bshe is\b/g, "she's")
      .replace(/\bit is\b/g, "it's")
      .replace(/\bdo not\b/g, "don't")
      .replace(/\bdoes not\b/g, "doesn't")
      .replace(/\bdid not\b/g, "didn't")
      .replace(/\bhave not\b/g, "haven't")
      .replace(/\bhas not\b/g, "hasn't")
      .replace(/\bhad not\b/g, "hadn't")
      .replace(/\bwill not\b/g, "won't")
      .replace(/\bcannot\b/g, "can't")
      .replace(/\bcan not\b/g, "can't")
      .replace(/\bwould not\b/g, "wouldn't")
      .replace(/\bshould not\b/g, "shouldn't")
      .replace(/\bcould not\b/g, "couldn't");

    const userWithContractions = normalizedUser
      .replace(/\bi am\b/g, "i'm")
      .replace(/\byou are\b/g, "you're")
      .replace(/\bwe are\b/g, "we're")
      .replace(/\bthey are\b/g, "they're")
      .replace(/\bhe is\b/g, "he's")
      .replace(/\bshe is\b/g, "she's")
      .replace(/\bit is\b/g, "it's")
      .replace(/\bdo not\b/g, "don't")
      .replace(/\bdoes not\b/g, "doesn't")
      .replace(/\bdid not\b/g, "didn't")
      .replace(/\bhave not\b/g, "haven't")
      .replace(/\bhas not\b/g, "hasn't")
      .replace(/\bhad not\b/g, "hadn't")
      .replace(/\bwill not\b/g, "won't")
      .replace(/\bcannot\b/g, "can't")
      .replace(/\bcan not\b/g, "can't")
      .replace(/\bwould not\b/g, "wouldn't")
      .replace(/\bshould not\b/g, "shouldn't")
      .replace(/\bcould not\b/g, "couldn't");

    if (userWithContractions === targetWithContractions) {
      return { isCorrect: true, matchedForm: target };
    }
  }

  return { isCorrect: false };
}
