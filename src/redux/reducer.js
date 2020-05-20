const init = {
  word: "",
  gaps: "",
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
        word: action.payload,
      };
    case "SETTING_GAPS":
      return {
        ...state,
        gaps: action.payload.gaps,
      };
    case "PRESSING_THE_WRONG_BUTTON":
      return {
        wrongTries: state.wrongTries + 1,
      };
    default:
      return state;
  }
};
