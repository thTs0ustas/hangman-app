import { useDispatch, useSelector } from "react-redux";
import { wordsSelector } from "./selector";
import {
  letsStart,
  restart,
  settingLetter,
  settingWinnerOrLoser,
} from "../../redux";

export const useWordsModel = () => {
  const dispatch = useDispatch();

  return {
    words: useSelector(wordsSelector),
    setStart: () => dispatch(letsStart()),
    setRestart: () => dispatch(restart()),
    winnerLoser: () => dispatch(settingWinnerOrLoser()),
    setLetter: (letter) => dispatch(settingLetter(letter)),
  };
};
