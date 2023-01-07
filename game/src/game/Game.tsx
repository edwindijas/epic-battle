
import { Application } from './main/application';
import React, { useEffect, useRef } from 'react';
import * as StyEle from './styles'

const application = new Application();

export const Game = () => {

  
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    
    if (!ref.current) {
      return;
    }

    const divRef = ref.current;

    /*@ts-ignore */
    divRef.appendChild(application.getView());

    return () => {
      /*@ts-ignore */
      divRef.removeChild(application.getView())
    }

  }, [])

  return (
   <StyEle.Wrapper grid ref={ref} />
  );
}

