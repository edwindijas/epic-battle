import { uniPos } from "library/main";
import styled from "styled-components";

export const Picture = styled.figure`
    position: absolute;
    ${uniPos(0, ['right'])};
    right: -500%;
    width: 500%;

    @keyframes orignal-keyframe {
        0% {
            left: 0;
        }

        100% {
            left: -400%;
        }
    }

    animation: orignal-keyframe 190s infinite linear;
    background-size:  auto 100%;
    background-repeat: repeat-x;

    ${({src, speed}: {src: string, speed: number}) => `
        animation-duration: ${300 / speed}s;
        background-image: url(${src});
        &:last-child {
            opacity: 0.4;
        }
    `}
`