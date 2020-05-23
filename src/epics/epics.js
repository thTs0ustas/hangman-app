import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import {
  settingWord,
  settingGaps,
  wrongTry,
  correctTry,
  settingNewGaps,
} from "../redux/actions";
import { ofType, combineEpics } from "redux-observable";

const epicWords = (action$) =>
  action$.pipe(
    ofType("LETS_START"),
    mergeMap(() =>
      ajax
        .getJSON("https://random-word-api.herokuapp.com/word?number=10")
        .pipe(
          map((response) =>
            settingWord(response[Math.floor(Math.random() * 10)])
          )
        )
    )
  );

const epicTries = (action$) =>
  action$.pipe(
    ofType("SETTING_WORD"),
    map((action) => {
      const gapsArray = Array(action.payload.length).fill("_ ");
      return settingGaps(gapsArray);
    })
  );

const epicLetters = (action$, state$) =>
  action$.pipe(
    ofType("SETTING_LETTER"),
    map((action) => {
      if (!state$.value.word.includes(action.payload)) {
        return wrongTry();
      } else {
        return correctTry(action.payload);
      }
    })
  );
const epicCorrectness = (action$, state$) =>
  action$.pipe(
    ofType("CORRECT_LETTER"),
    map((action) => {
      const { word, guess } = state$.value;
      let newGuess = [...guess, action.payload];

      const correctness = (word, guess) => {
        let guessed = [];
        let newWord = word.split("");
        newWord.map((letter) =>
          guess.includes(letter) ? guessed.push(letter) : guessed.push("_")
        );
        return guessed.join(" ");
      };
      return settingNewGaps(correctness(word, newGuess));
    })
  );

export default combineEpics(epicWords, epicTries, epicLetters, epicCorrectness);
