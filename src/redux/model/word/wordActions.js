import { SETTING_WORD } from "./actionTypes";
import {createAction} from "@reduxjs/toolkit";

export const settingWord = createAction(SETTING_WORD,word=>({payload:word}));
