import {
  LETS_START,
  SETTING_GAME,
  WRONG_TRY,
  CORRECT_LETTER,
  SETTING_WINNER_LOSER,
  WINNER_OR_LOSER,
  RESTART,
} from "./gameActionTypes";

export const letsStart = () => ({
  type: LETS_START,
});

export const settingGame = () => ({
  type: SETTING_GAME,
  payload: {
    tries: 0,
    wrongTries: 0,
  },
});

export const wrongTry = () => ({
  type: WRONG_TRY,
});

export const correctTry = (correctLetter) => ({
  type: CORRECT_LETTER,
  payload: correctLetter,
});

export const settingWinnerOrLoser = () => ({
  type: SETTING_WINNER_LOSER,
});

export const winnerOrLoser = (newStatus) => ({
  type: WINNER_OR_LOSER,
  payload: newStatus,
});

export const restart = () => ({
  type: RESTART,
});
