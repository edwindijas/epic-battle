import styled from "styled-components";

export const Wrapper = styled.figure`
    position: fixed;
    width: 4em;
    height: 4em;
    border: 0.1em solid rgba(255, 255, 255, 0.4);
    top: 4em;
    left: 4em;
    border-radius: 50%;
    fill: #fff;
    padding: 0.75em;
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.4s;
    &:hover {
        opacity: 1;
        background: #fff;
        padding: 0.5em;
    }

    ${({theme}) => `
        &:hover {
            fill: ${theme?.colors.background};
        }
    `}}
`