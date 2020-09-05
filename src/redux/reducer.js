const init = {
  word: "",
  tries: 0,
  guess: [],
  wrongTries: 0,
  status: "",
};
init.gaps = Array(init.word.length).fill("_").join(" ");

export const reducer = (state = init, action) => {
  switch (action.type) {
    case "SETTING_GAME":
      return {
        ...state,
        tries: action.payload.tries,
        wrongTries: action.payload.wrongTries,
      };
    case "RESTART":
      return Object.assign({}, init);
    case "SETTING_WORD":
      return {
        ...state,
        word: action.payload,
      };
    case "SETTING_GAPS":
      return {
        ...state,
        gaps: Array(action.payload.length).fill("_").join(" "),
        status: "Lets Play",
      };
    case "SETTING_LETTER":
      return {
        ...state,
        tries: ++state.tries,
        guess: [...state.guess, action.payload],
      };
    case "WRONG_TRY":
      return {
        ...state,
        wrongTries: ++state.wrongTries,
      };
    case "SETTING_NEW_GAPS":
      return {
        ...state,
        gaps: action.payload,
      };
    case "WINNER_OR_LOSER":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
