const init = {
  word: "",
  tries: 0,
  wrongTries: 0,
  status: "",
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "SETTING_GAME":
      return {
        ...state,
        tries: action.payload.tries,
        wrongTries: action.payload.wrongTries,
      };
    case "SETTING_WORD":
      return {
        ...state,
        word: action.payload.word,
      };
    default:
      return state;
  }
};
