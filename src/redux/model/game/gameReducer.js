import { INITIAL_STATE } from "../../INITIAL_STATE";

export const gameReducer = (state = { title: INITIAL_STATE.title }, action) => {
  switch (action.type) {
    case "RESTART":
      return Object.assign({}, { title: INITIAL_STATE.title });
    case "WINNER_OR_LOSER":
      return {
        ...state,
        title: action.payload,
      };
    case "SETTING_GAPS":
      return {
        ...state,
        title: "Lets Play",
      };
    default:
      return state;
  }
};
