import { map, mergeMap, mapTo } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import {
  letsStart,
  settingWord,
  settingGaps,
  wrongTry,
  correctTry,
  winnerOrLosser,
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

const epicWinningOrLossing = (action$, state$) =>
  action$.pipe(
    ofType("SETTING_WINNER_LOSSER"),
    map(() => {
      const { gaps, word, tries, status, wrongTries } = state$.value;
      let winnerStatus = "We have a Winner !!!";
      let losserStatus = "Aaand I'm dead !!!";
      let newStatus =
        word === undefined || tries === 0
          ? status
          : !gaps.includes("_ ")
          ? winnerStatus
          : wrongTries === 6
          ? losserStatus
          : status;
      return winnerOrLosser(newStatus);
    })
  );
const epicRestart = (action$) =>
  action$.pipe(ofType("RESTART"), mapTo(letsStart()));

export default combineEpics(
  epicWords,
  epicTries,
  epicLetters,
  epicCorrectness,
  epicWinningOrLossing,
  epicRestart
);
