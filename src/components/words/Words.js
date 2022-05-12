import React from 'react';
import '.styles/words.css';

import { Buttons } from '../button/Button';

import { gameLostAfterThisTries } from './constants/losingContitions';
import { letters } from './constants/letters';
import { useWordsModel } from './hooks/useWordsModel';

export const Words = () => {
  const { letterMap, word, guess, gaps, setStart, setRestart, status, wrongTries } =
    useWordsModel();

  return (
    <div className="gameContainer">
      <div className={'status'}>{status || 'Press Start'}</div>
      <h1 className="word">{gaps || '.................'}</h1>
      <p>{`Retries Left: ${gameLostAfterThisTries - wrongTries}`}</p>
      <p>
        Your Guesses: <span>{guess}</span>
      </p>

      <div className="buttonsContainer">{letterMap(letters)}</div>
      <div className="startResetButtons">
        <Buttons bigButton={true} value={'Start'} disabled={word} onClick={setStart} />
        <Buttons bigButton={true} value={'Restart'} disabled={!word} onClick={setRestart} />
      </div>
    </div>
  );
};
