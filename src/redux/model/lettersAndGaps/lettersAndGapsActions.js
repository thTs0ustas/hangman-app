import {
  SETTING_GAPS,
  SETTING_LETTER,
  SETTING_NEW_GAPS,
} from "./lettersAndGapsActionTypes";

export const settingGaps = (gaps) => ({
  type: SETTING_GAPS,
  payload: gaps,
});

export const settingLetter = (letter) => ({
  type: SETTING_LETTER,
  payload: letter,
});

export const settingNewGaps = (newGap) => ({
  type: SETTING_NEW_GAPS,
  payload: newGap,
});
