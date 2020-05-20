export const letsStart = () => ({
  type: "LETS_START",
});

export const settingGame = () => ({
  type: "SETTING_GAME",
  payload: {
    tries: 0,
    wrongTries: 0,
  },
});

export const settingWord = (word) => ({
  type: "SETTING_WORD",
  payload: word,
});

export const settingGaps = (gaps) => ({
  type: "SETTING_GAPS",
  payload: gaps,
});

export const settingLetter = (letter) => ({
  type: "SETTING_LETTER",
  payload: letter,
});

export const wrongTry = () => ({
  type: "WRONG_TRY",
});

export const correctTry = (correctLetter) => ({
  type: "CORRECT_LETTER",
  payload: correctLetter,
});
