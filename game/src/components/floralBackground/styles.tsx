import { uniPos } from "library/main";
import styled from "styled-components";

export const Wrapper = styled.div`
    ${({length, mousePointer}: {length: number, mousePointer?: string}) => `
        width: ${length}px;
        height: ${length}px;
        ${mousePointer ? `
            cursor: url(${mousePointer}), crosshair;
        `: ''}
    `}

    ${uniPos(0)};
    position: fixed;
    margin: auto;
    z-index: 5;
`

export const Img = styled.img`
    position: absolute;
    ${uniPos(-20, [], '%')};
`