import {map, mapTo, switchMap, tap} from "rxjs/operators";

import {ajax} from "rxjs/ajax";
import {
   correctTry,
   letsStart,
   settingGaps,
   settingNewGaps,
   settingWord,
   winnerOrLoser,
   wrongTry,
} from "../redux/actions";
import {combineEpics, ofType} from "redux-observable";

const epicWords = (action$) =>
  action$.pipe(
    ofType("LETS_START"),
    switchMap(() =>
      ajax
        .getJSON("https://random-word-api.herokuapp.com/word?number=10")
        .pipe(
          tap(words => console.log('Words_response',words)),
          map((response) =>
            settingWord(response[Math.floor(Math.random() * 10)])
          ),
          tap(word => console.log('Word_response',word)),
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
       }
       return correctTry(action.payload);
    })
  );

const epicCorrectness = (action$, state$) =>
  action$.pipe(
    ofType("CORRECT_LETTER"),
    map(() =>
       settingNewGaps(state$.value.word.split('')
          .map(e=> state$.value.guess.includes(e)? `${e} ` : '_ ')
          .join('')))
  );

const epicWinningOrLosing = (action$, state$) =>
  action$.pipe(
    ofType("SETTING_WINNER_LOSER"),
    map(() => {
       const {gaps, word, tries, status, wrongTries} = state$.value;
       let newStatus = status
       if (word === undefined || tries === 0) return newStatus
       if (!gaps.includes("_")) newStatus = "We have a Winner !!!"
       if (wrongTries === 6) newStatus = "Aaand I'm dead !!!"

       return newStatus
    }),
    map(new_status => winnerOrLoser(new_status))
  );

const epicRestart = (action$) =>
  action$.pipe(ofType("RESTART"), mapTo(letsStart()));

export default combineEpics(
  epicWords,
  epicTries,
  epicLetters,
  epicCorrectness,
  epicWinningOrLosing,
  epicRestart
);
