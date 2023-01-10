
import { Application } from './main/application';
import React, { useEffect, useRef } from 'react';
import * as StyEle from './styles'
import background from 'assets/background/background.jpg'


export const Game = () => {

  
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const application = new Application();

    if (!ref.current) {
      return;
    }

    const divRef = ref.current;

    /*@ts-ignore */
    //divRef.appendChild(application.getView());

    return () => {
      /*@ts-ignore */
      //divRef.removeChild(application.getView());
      application.destroy()
    }

  }, [])

  return (
   <StyEle.Wrapper ref={ref} src={background} />
  );
}

