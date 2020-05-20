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
  payload: { gaps },
});

export const pressingButton = (letter) => ({
  type: "PRESSING_BUTTON",
  payload: letter,
});

export const pressingWrongButton = () => ({
  type: "PRESSING_THE_WRONG_BUTTON",
});
