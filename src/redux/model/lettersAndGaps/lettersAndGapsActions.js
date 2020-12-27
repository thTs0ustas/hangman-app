import {
  SETTING_GAPS,
  SETTING_LETTER,
  SETTING_NEW_GAPS,
} from "./lettersAndGapsActionTypes";
import { createAction } from "@reduxjs/toolkit";

export const settingGaps = createAction(SETTING_GAPS);
export const settingLetter = createAction(SETTING_LETTER);
export const settingNewGaps = createAction(SETTING_NEW_GAPS);
