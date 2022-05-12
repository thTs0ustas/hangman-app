import { createAction } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';

const letsStart = createAction(actionTypes.LETS_START);
const setLetter = createAction(actionTypes.SET_LETTER);
const restart = createAction(actionTypes.RESTART);

export { letsStart, setLetter, restart };
