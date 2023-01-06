
import { Application } from 'main/application';
import React, { useEffect, useRef, MouseEvent } from 'react';
import styled from 'styled-components';

const application = new Application();

function App() {

  
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    
    if (!ref.current) {
      return;
    }


    /*@ts-ignore */
    ref.current.appendChild(application.getView());

    return () => {
      /*@ts-ignore */
      ref.current?.removeChild(application.getView())
    }

  }, [])

  return (
   <ApplicationHolder grid ref={ref} />
  );
}

const ApplicationHolder = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: yellow;
  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  position: relative;
  ${({grid}: {grid?: boolean}) => grid ? `
      &::before, &::after {
      height: 1px;
      background-color: #fff;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      content: '';
      position: absolute;
    }

    &::after {
      height: 100%;
      width: 1px;
    }

  ` : ''}
  

`

export default App;
