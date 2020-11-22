export const wordsSelector = (state) => {
  const { words, tries, game } = state;
  return { words, tries, game };
};
