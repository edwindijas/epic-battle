
import React, { useCallback, useEffect, useRef, useState} from 'react';
import * as StyEle from './styles'
import { FloralBackground } from 'components/floralBackground/FloralBackground';
import { useSquare } from 'hooks/useSquare';
import { GameStat } from 'features/gameStat/GameStat';
import { Application } from './main/application';
import { GameMenu } from 'features/gameMenu/GameMenu';

const mousePointer = "crosshair";



export const Game = () => {
  const length = useSquare();
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const app = window.app as Application;

  const keyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (app.paused) {
        app.resume()
      } else {
        app.pause()
      }
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
      app.pause()
    }

  }, [])

  return (
    <>
      <FloralBackground mousePointer={mousePointer} />
      <GameStat />
      <GameMenu />
      <StyEle.Wrapper  >
        <StyEle.CanvasWrapper length={length} ref={ref} />
      </StyEle.Wrapper>
    </>
   
  );
}

