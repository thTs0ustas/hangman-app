import { ofType } from "redux-observable";
import { map, mapTo, tap } from "rxjs/operators";

import { rword } from "rword";

import { RESTART } from "../../redux/model/game";
import { settingWord, letsStart } from "../../redux";

const epicWords = (action$) =>
  action$.pipe(
    ofType("LETS_START"),
    map(() => rword.generate(1, { length: "4-12" })),
    tap((word) => console.log(word)),
    map((word) => settingWord(word))
  );

const epicRestart = (action$) =>
  action$.pipe(ofType(RESTART), mapTo(letsStart()));

export { epicWords, epicRestart };
