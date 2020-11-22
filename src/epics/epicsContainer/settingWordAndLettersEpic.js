import { map } from "rxjs/operators";
import { ofType } from "redux-observable";

import { correctTry, settingGaps, settingNewGaps, wrongTry } from "../../redux";

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
      if (!state$.value.words.word.includes(action.payload)) {
        return wrongTry();
      }
      return correctTry(action.payload);
    })
  );

const epicCorrectness = (action$, state$) =>
  action$.pipe(
    ofType("CORRECT_LETTER"),
    map(() =>
      settingNewGaps(
        state$.value.words.word
          .split("")
          .map((e) => (state$.value.tries.guess.includes(e) ? `${e} ` : "_ "))
          .join("")
      )
    )
  );

export { epicTries, epicCorrectness, epicLetters };

// // const epicWords = (action$) =>
// //   action$.pipe(
// //     ofType("LETS_START"),
// //     switchMap(() =>
// //       ajax
// //         .getJSON("https://random-word-api.herokuapp.com/word?number=10")
// //         .pipe(
// //           tap(words => console.log('Words_response',words)),
// //           map((response) =>
// //             settingWord(response[Math.floor(Math.random() * 10)])
// //           ),
// //           tap(word => console.log('Word_response',word)),
// //         )
// //     )
// //   );