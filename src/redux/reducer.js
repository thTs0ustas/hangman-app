const init = {
  word: "",
  gaps: [],
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
        gaps: action.payload,
        status: "Lets Play",
      };
    case "WRONG_TRY":
        return {
          ...state,
          wrongTries:state.wrongTries +1
        };
     case "CORRECT_LETTER":
      return {
        ...state,
      } 
    default:
      return state;
  }
};
