
import React, { useCallback, useEffect, useRef, useState} from 'react';
import * as StyEle from './styles'
import { FloralBackground } from 'components/floralBackground/FloralBackground';
import { useSquare } from 'hooks/useSquare';
import { GameStat } from 'features/gameStat/GameStat';
import { AddStatListener } from 'models/Stat';
import { Application } from './main/application';

const mousePointer = "crosshair";



export const Game = () => {
  const length = useSquare();
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const app = window.app as Application;

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
      app.pause()
    }
  }, [])
  
  useEffect(() => {
    if (!ref.current) { return; }

    const divRef = ref.current;
    
    app.start();

    /*@ts-ignore */
    divRef.appendChild(app.getView());

    window.addEventListener('keydown', keyDownHandler)

    return () => {
      /*@ts-ignore */
      divRef.removeChild(app.getView());

      window.removeEventListener('keydown', keyDownHandler)
      app.reset()
    }

  }, [])

  return (
    <>
      <FloralBackground mousePointer={mousePointer} />
      <GameStat
        paused={paused}
      />
      <StyEle.Wrapper  >
        <StyEle.CanvasWrapper length={length} ref={ref} />
      </StyEle.Wrapper>
    </>
   
  );
}

