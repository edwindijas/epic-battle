import { uniPos } from "library/main";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
`

export const BackgroundImage = styled.img`
    background-color: yellow;
    opacity: .3;
`

export const Darken = styled.div`
    position: absolute;
    ${uniPos(0)}
    background: #111;
`