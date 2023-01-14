import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    height: 100%;
    max-height: 100vh;
    overflow: hidden;
    ${({scale}: {scale: number}) => `
        font-size: ${scale}em;
    `}
`