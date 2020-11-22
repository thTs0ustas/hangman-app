import { SETTING_WORD } from "./actionTypes";

export const settingWord = (word) => ({
  type: SETTING_WORD,
  payload: word,
});
