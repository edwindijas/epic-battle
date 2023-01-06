import { uniPos } from "library/main";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75em;
    &:last-child {
        margin-bottom: 0;
    }
`

export const Switch = styled.div`
    width: 3em;
    height: 1.5em;
    background-color: #fff;
    border-radius: 1.5em;
`

export const SwitchCircle = styled.div.attrs(({active}: {active: boolean}) => {
    return {
        style: {
            left: active ? '50%': 0
        }
    }
})`
    width: 50%;
    height: 100%;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    ${({active}: {active: boolean}) => ``}

    transition: all .2s;

    ${({theme}) => `
        &::before {
            content: '';
            position: absolute;
            ${uniPos(0.1)}
            background-image: ${theme?.gradient?.general};
            border-radius: 50%;
        }
    `}
`

export const Label = styled.p`
    text-transform: capitalize;
`