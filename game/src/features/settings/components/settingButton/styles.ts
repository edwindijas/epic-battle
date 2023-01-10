import styled from "styled-components";

export const Wrapper = styled.figure`
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: #fff;
    top: 0em;
    left: 0em;
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

    fill: #5A784A;
`