export const wordsSelector = (state) => {
  const { guess, gaps, word, status, wrongTries } = state;
  return { guess, gaps, word, status, wrongTries };
};
