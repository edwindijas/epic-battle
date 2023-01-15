import { uniPos } from "library/main";
import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3000;
    ${uniPos(0)};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Background = styled.div`
    position: absolute;
    ${uniPos(0)};
`

export const CloseBtn = styled.button`
    background: none;
    border: 0.1em solid #6A9C59;
    fill: #6A9C59;
    position: absolute;
    top: 2em;
    right: 2em;
    width: 3em;
    height: 3em;
    padding: 0.75em;
    border-radius: 50%;
`

export const ContentInfo = styled.div`
    width: 90%;
    height: 90%;
    background-color: #fff;
    border-radius: 1em;
    max-width: 45em;
    max-height: 35em;
    color: #000;
    padding: 2em 0;
    position: relative;
    z-index: 6;
`



export const Title = styled.h2`
    text-align: left;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 3em;
    color: #6A9C59;
    padding: 0 1.2em;
`

export const List = styled.ul`
    padding: 1.5em 3em;
`

export const ListItem = styled.li`
    font-size: 1.1em;
    padding: 0.75em 1em;
    line-height: 1.5;
    border-bottom: 1px solid #efefef;
    &:last-child {
        border: 0;
    }
    list-style: lao;
    color: #7a8b7a;
    margin: 0 1em;
`

export const HowToPar = styled.p`
    color: #7a8b7a;
`