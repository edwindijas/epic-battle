import { uniPos } from "library/main"
import styled from "styled-components"

export const Background = () => {
    return <StyEle.Wrapper xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456.43 197.45">
        <path d="M454.52,43.14C474.84,49.72,326,19.34,341.88,104c15.82,84.41-180,94.64-215.7,93.35C1.47,192.8-42.33,104.58,47.59,47.53S258.76-20.23,454.52,43.14Z"/>
    </StyEle.Wrapper>
}

 const Wrapper = styled.svg`
    ${uniPos(0)};
    position: absolute;
    
    path {
        fill: #a3c189;
        isolation: isolate;
        opacity: 0.28;
    }
`

const StyEle = {
    Wrapper
}