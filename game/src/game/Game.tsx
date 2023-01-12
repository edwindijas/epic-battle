
import { Application } from './main/application';
import React, { useCallback, useEffect, useRef, useState} from 'react';
import * as StyEle from './styles'
import { FloralBackground } from 'components/floralBackground/FloralBackground';
import { useSquare } from 'hooks/useSquare';
import { GameStat } from 'features/gameStat/GameStat';
import { AddStatListener } from 'models/Stat';

const mousePointer = "crosshair";

const application = new Application();


export const Game = () => {
  const length = useSquare();
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const gamePause = useCallback(() => {
    console.log('paused');
  }, [])

  const gameResume = useCallback(() => {
    console.log('resumed')
  }, [])

  const gameRestart = useCallback(() => {
    console.log('restarted')
  }, [])

  const keyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {

    }
  }, [])
  
  useEffect(() => {
    if (!ref.current) { return; }

    const divRef = ref.current;
    

    /*@ts-ignore */
    divRef.appendChild(application.getView());

    window.addEventListener('keydown', keyDownHandler)

    return () => {
      /*@ts-ignore */
      divRef.removeChild(application.getView());

      window.removeEventListener('keydown', keyDownHandler)
      application.reset()
    }

  }, [])

  return (
    <>
      <FloralBackground mousePointer={mousePointer} />
      <GameStat 
        listener={application.addStatListener}
        removeListener={application.removeStatListener}
        paused={paused}
        gamePause={gamePause}
        gameResume={gameResume}
        gameRestart={gameRestart}
      />
      <StyEle.Wrapper  >
        <StyEle.CanvasWrapper length={length} ref={ref} />
      </StyEle.Wrapper>
    </>
   
  );
}

