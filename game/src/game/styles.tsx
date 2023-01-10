import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
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
