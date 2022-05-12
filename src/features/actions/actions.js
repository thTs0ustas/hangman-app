import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';

const letsStart = createAction(actionTypes.LETS_START);
const statusCheck = createAction(actionTypes.STATUS_CHECK);
const setLetter = createAction(actionTypes.SET_LETTER);
const restart = createAction(actionTypes.RESTART);
const correctLetter = createAction(actionTypes.CORRECT_LETTER);
export { letsStart, setLetter, restart, correctLetter, statusCheck };
