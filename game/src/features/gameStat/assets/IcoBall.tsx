import styled from "styled-components"

export const IcoBall = ({color} : {color: string}) => {
    return <StyEleWrapper color={color} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="linear-gradient" x1="50" y1="100" x2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#2b2b2b"/>
        <stop offset="0.79" stop-opacity="0"/>
      </linearGradient>
      <radialGradient id="radial-gradient" cx="50" cy="50" r="50" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff"/>
        <stop offset="1" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="linear-gradient-2" x1="50" x2="50" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff"/>
        <stop offset="0.79" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="linear-gradient-3" x1="0" y1="50" x2="100" y2="50" />
    </defs>
    <circle className="cls-2" cx="50" cy="50" r="50"/>
    <circle className="cls-3" cx="50" cy="50" r="50"/>
    <circle className="cls-4" cx="50" cy="50" r="50"/>
    <circle className="cls-5" cx="50" cy="50" r="50"/>
    <circle className="cls-6" cx="50" cy="50" r="50"/>
  </StyEleWrapper>
}

export const StyEleWrapper = styled.svg`
    .cls-1 {
        isolation: isolate;
    }

    .cls-2 {
        fill: ${({color}: {color: string}) => color};
    }

    .cls-3 {
        mix-blend-mode: multiply;
        opacity: 0.16;
        fill: url(#linear-gradient);
    }

    .cls-4, .cls-5, .cls-6 {
        mix-blend-mode: screen;
    }

    .cls-4 {
        opacity: 0.42;
        fill: url(#radial-gradient);
    }

    .cls-5 {
        opacity: 0.54;
        fill: url(#linear-gradient-2);
    }

    .cls-6 {
        opacity: 0.32;
        fill: url(#linear-gradient-3);
    }
`