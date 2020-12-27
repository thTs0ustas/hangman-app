import {
  LETS_START,
  SETTING_GAME,
  WRONG_TRY,
  CORRECT_LETTER,
  SETTING_WINNER_LOSER,
  WINNER_OR_LOSER,
  RESTART,
} from "./gameActionTypes";
import { createAction } from "@reduxjs/toolkit";

export const letsStart = createAction(LETS_START);
export const settingGame = () =>
  createAction(SETTING_GAME)({
    tries: 0,
    wrongTries: 0,
  });
export const wrongTry = createAction(WRONG_TRY);
export const correctTry = createAction(CORRECT_LETTER);
export const settingWinnerOrLoser = createAction(SETTING_WINNER_LOSER);
export const winnerOrLoser = createAction(WINNER_OR_LOSER);
export const restart = createAction(RESTART);
