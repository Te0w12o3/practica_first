// Official Cambridge English Scale Conversion for B2 First (FCE)
// Reading & Use of English Paper

/**
 * Calculates raw marks:
 * Reading: Parts 1 (8), 5 (12), 6 (12), 7 (10) -> Max 42 marks
 * Use of English: Parts 2 (8), 3 (8), 4 (12) -> Max 28 marks
 */

// Piecewise linear interpolation for Reading (out of 42)
// Official benchmark points:
// 42 -> 190
// 37 -> 180 (C1 / Grade A threshold)
// 24 -> 160 (B2 Pass / Grade C threshold)
// 16 -> 140 (B1 threshold)
// 10 -> 122 (Minimum reported score)
export function convertReadingRawToScale(rawScore) {
  const raw = Math.max(0, Math.min(42, rawScore));

  if (raw >= 37) {
    // 37..42 -> 180..190
    return Math.round(180 + ((raw - 37) / (42 - 37)) * (190 - 180));
  } else if (raw >= 24) {
    // 24..37 -> 160..180
    return Math.round(160 + ((raw - 24) / (37 - 24)) * (180 - 160));
  } else if (raw >= 16) {
    // 16..24 -> 140..160
    return Math.round(140 + ((raw - 16) / (24 - 16)) * (160 - 140));
  } else if (raw >= 10) {
    // 10..16 -> 122..140
    return Math.round(122 + ((raw - 10) / (16 - 10)) * (140 - 122));
  } else {
    // Below 10 -> 100..122
    return Math.max(100, Math.round(100 + (raw / 10) * 22));
  }
}

// Piecewise linear interpolation for Use of English (out of 28)
// Official benchmark points:
// 28 -> 190
// 24 -> 180 (C1 / Grade A threshold)
// 18 -> 160 (B2 Pass / Grade C threshold)
// 11 -> 140 (B1 threshold)
// 7  -> 122 (Minimum reported score)
export function convertUseOfEnglishRawToScale(rawScore) {
  const raw = Math.max(0, Math.min(28, rawScore));

  if (raw >= 24) {
    // 24..28 -> 180..190
    return Math.round(180 + ((raw - 24) / (28 - 24)) * (190 - 180));
  } else if (raw >= 18) {
    // 18..24 -> 160..180
    return Math.round(160 + ((raw - 18) / (24 - 18)) * (180 - 160));
  } else if (raw >= 11) {
    // 11..18 -> 140..160
    return Math.round(140 + ((raw - 11) / (18 - 11)) * (160 - 140));
  } else if (raw >= 7) {
    // 7..11 -> 122..140
    return Math.round(122 + ((raw - 7) / (11 - 7)) * (140 - 122));
  } else {
    // Below 7 -> 100..122
    return Math.max(100, Math.round(100 + (raw / 7) * 22));
  }
}

/**
 * Normalizes an answer string for fair comparison:
 * lowercase, trimmed, collapsed spaces, punctuation cleaned
 */
export function normalizeAnswer(str) {
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, ' ');
}

/**
 * Evaluates Part 4 (Key Word Transformation) according to Cambridge rules:
 * Official answers have two split halves separated by '|'.
 * Example: "a good IDEA | to go"
 * Candidate gets:
 * - 2 marks if both halves match
 * - 1 mark if either half matches
 * - 0 marks if neither matches
 */
export function evaluatePart4Item(userAnswer, officialPattern, alternateAnswers = []) {
  const cleanUser = normalizeAnswer(userAnswer);
  if (!cleanUser) return { score: 0, maxScore: 2, matchedPart1: false, matchedPart2: false };

  // Check against main pattern and any accepted alternatives
  const allPatterns = [officialPattern, ...alternateAnswers];

  for (const pattern of allPatterns) {
    if (pattern.includes('|')) {
      const parts = pattern.split('|').map(p => p.trim());
      const part1Variants = parts[0].split('/').map(v => normalizeAnswer(v));
      const part2Variants = parts[1].split('/').map(v => normalizeAnswer(v));

      let matchedPart1 = false;
      let matchedPart2 = false;

      // Check if user answer contains or matches both parts in order
      for (const p1 of part1Variants) {
        if (cleanUser.includes(p1)) {
          matchedPart1 = true;
          break;
        }
      }

      for (const p2 of part2Variants) {
        if (cleanUser.includes(p2)) {
          matchedPart2 = true;
          break;
        }
      }

      // Check strict full match first
      const fullNormalizedVariants = [];
      for (const p1 of part1Variants) {
        for (const p2 of part2Variants) {
          fullNormalizedVariants.push(`${p1} ${p2}`.trim());
        }
      }

      if (fullNormalizedVariants.includes(cleanUser)) {
        return { score: 2, maxScore: 2, matchedPart1: true, matchedPart2: true };
      }

      if (matchedPart1 && matchedPart2) {
        return { score: 2, maxScore: 2, matchedPart1: true, matchedPart2: true };
      }

      if (matchedPart1 || matchedPart2) {
        return { score: 1, maxScore: 2, matchedPart1, matchedPart2 };
      }
    } else {
      // Single continuous pattern without '|'
      const variants = pattern.split('/').map(v => normalizeAnswer(v));
      if (variants.includes(cleanUser)) {
        return { score: 2, maxScore: 2, matchedPart1: true, matchedPart2: true };
      }
    }
  }

  return { score: 0, maxScore: 2, matchedPart1: false, matchedPart2: false };
}

/**
 * General answer checker for Part 1, 2, 3, 5, 6, 7
 */
export function evaluateStandardItem(userAnswer, officialAnswer, acceptedAlternatives = []) {
  const cleanUser = normalizeAnswer(userAnswer);
  if (!cleanUser) return false;

  const validOptions = [officialAnswer, ...acceptedAlternatives].map(a => normalizeAnswer(a));
  return validOptions.includes(cleanUser);
}

/**
 * Calculates complete assessment report
 */
export function calculateExamScore(exam, userAnswers) {
  let readingRaw = 0;
  let useOfEnglishRaw = 0;
  const partResults = {};

  // Part 1: Questions 1..8 (1 mark each -> Reading)
  let p1Correct = 0;
  const p1Details = {};
  exam.part1.questions.forEach(q => {
    const userVal = userAnswers[q.number] || '';
    const isCorrect = evaluateStandardItem(userVal, q.correctAnswer);
    if (isCorrect) p1Correct += 1;
    p1Details[q.number] = {
      userAnswer: userVal,
      correctAnswer: q.correctAnswer,
      isCorrect,
      explanation: q.explanation || ''
    };
  });
  readingRaw += p1Correct;
  partResults.part1 = { score: p1Correct, maxScore: 8, details: p1Details };

  // Part 2: Questions 9..16 (1 mark each -> Use of English)
  let p2Correct = 0;
  const p2Details = {};
  exam.part2.questions.forEach(q => {
    const userVal = userAnswers[q.number] || '';
    const isCorrect = evaluateStandardItem(userVal, q.correctAnswer, q.acceptedAlternatives || []);
    if (isCorrect) p2Correct += 1;
    p2Details[q.number] = {
      userAnswer: userVal,
      correctAnswer: q.correctAnswer,
      acceptedAlternatives: q.acceptedAlternatives || [],
      isCorrect,
      explanation: q.explanation || ''
    };
  });
  useOfEnglishRaw += p2Correct;
  partResults.part2 = { score: p2Correct, maxScore: 8, details: p2Details };

  // Part 3: Questions 17..24 (1 mark each -> Use of English)
  let p3Correct = 0;
  const p3Details = {};
  exam.part3.questions.forEach(q => {
    const userVal = userAnswers[q.number] || '';
    const isCorrect = evaluateStandardItem(userVal, q.correctAnswer, q.acceptedAlternatives || []);
    if (isCorrect) p3Correct += 1;
    p3Details[q.number] = {
      userAnswer: userVal,
      correctAnswer: q.correctAnswer,
      acceptedAlternatives: q.acceptedAlternatives || [],
      isCorrect,
      explanation: q.explanation || ''
    };
  });
  useOfEnglishRaw += p3Correct;
  partResults.part3 = { score: p3Correct, maxScore: 8, details: p3Details };

  // Part 4: Questions 25..30 (2 marks each -> Use of English, max 12)
  let p4Score = 0;
  const p4Details = {};
  exam.part4.questions.forEach(q => {
    const userVal = userAnswers[q.number] || '';
    const evalRes = evaluatePart4Item(userVal, q.correctAnswer, q.acceptedAlternatives || []);
    p4Score += evalRes.score;
    p4Details[q.number] = {
      userAnswer: userVal,
      correctAnswer: q.correctAnswer,
      score: evalRes.score,
      maxScore: 2,
      isCorrect: evalRes.score === 2,
      isPartial: evalRes.score === 1,
      explanation: q.explanation || ''
    };
  });
  useOfEnglishRaw += p4Score;
  partResults.part4 = { score: p4Score, maxScore: 12, details: p4Details };

  // Part 5: Questions 31..36 (2 marks each -> Reading, max 12)
  let p5Score = 0;
  const p5Details = {};
  exam.part5.questions.forEach(q => {
    const userVal = userAnswers[q.number] || '';
    const isCorrect = evaluateStandardItem(userVal, q.correctAnswer);
    const score = isCorrect ? 2 : 0;
    p5Score += score;
    p5Details[q.number] = {
      userAnswer: userVal,
      correctAnswer: q.correctAnswer,
      isCorrect,
      score,
      maxScore: 2,
      explanation: q.explanation || ''
    };
  });
  readingRaw += p5Score;
  partResults.part5 = { score: p5Score, maxScore: 12, details: p5Details };

  // Part 6: Questions 37..42 (2 marks each -> Reading, max 12)
  let p6Score = 0;
  const p6Details = {};
  exam.part6.questions.forEach(q => {
    const userVal = userAnswers[q.number] || '';
    const isCorrect = evaluateStandardItem(userVal, q.correctAnswer);
    const score = isCorrect ? 2 : 0;
    p6Score += score;
    p6Details[q.number] = {
      userAnswer: userVal,
      correctAnswer: q.correctAnswer,
      isCorrect,
      score,
      maxScore: 2,
      explanation: q.explanation || ''
    };
  });
  readingRaw += p6Score;
  partResults.part6 = { score: p6Score, maxScore: 12, details: p6Details };

  // Part 7: Questions 43..52 (1 mark each -> Reading, max 10)
  let p7Correct = 0;
  const p7Details = {};
  exam.part7.questions.forEach(q => {
    const userVal = userAnswers[q.number] || '';
    const isCorrect = evaluateStandardItem(userVal, q.correctAnswer);
    if (isCorrect) p7Correct += 1;
    p7Details[q.number] = {
      userAnswer: userVal,
      correctAnswer: q.correctAnswer,
      isCorrect,
      explanation: q.explanation || ''
    };
  });
  readingRaw += p7Correct;
  partResults.part7 = { score: p7Correct, maxScore: 10, details: p7Details };

  // Scale scores
  const readingScale = convertReadingRawToScale(readingRaw);
  const useOfEnglishScale = convertUseOfEnglishRawToScale(useOfEnglishRaw);
  const overallScale = Math.round((readingScale + useOfEnglishScale) / 2);

  // CEFR Designation
  let cefrLevel = 'Fail';
  let grade = 'Fail';
  let color = 'text-rose-600 bg-rose-50 border-rose-200';
  let pass = false;

  if (overallScale >= 180) {
    cefrLevel = 'Level C1';
    grade = 'Grade A (Outstanding)';
    color = 'text-emerald-700 bg-emerald-50 border-emerald-300';
    pass = true;
  } else if (overallScale >= 173) {
    cefrLevel = 'Level B2';
    grade = 'Grade B (Good)';
    color = 'text-blue-700 bg-blue-50 border-blue-300';
    pass = true;
  } else if (overallScale >= 160) {
    cefrLevel = 'Level B2';
    grade = 'Grade C (Pass)';
    color = 'text-sky-700 bg-sky-50 border-sky-300';
    pass = true;
  } else if (overallScale >= 140) {
    cefrLevel = 'Level B1';
    grade = 'Council of Europe Level B1';
    color = 'text-amber-700 bg-amber-50 border-amber-300';
    pass = false;
  }

  return {
    readingRaw,
    readingMax: 42,
    readingScale,
    useOfEnglishRaw,
    useOfEnglishMax: 28,
    useOfEnglishScale,
    overallScale,
    cefrLevel,
    grade,
    color,
    pass,
    partResults,
    totalRawScore: readingRaw + useOfEnglishRaw,
    totalMaxScore: 70
  };
}
