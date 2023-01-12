import * as StyEle from './styles';
import { useSquare } from "hooks/useSquare";
import { GameStat } from "models/Stat";

export const GameStatLayout = ({score, life, maxLife}: GameStat) => {
    const gameLength = useSquare();
    const {innerWidth, innerHeight} = window;

    const top = (innerHeight - gameLength) / 2;
    const left = (innerWidth - gameLength) / 2;

    return <StyEle.Wrapper top={top} left={left - 300} >
        <StyEle.Info >
            <StyEle.Multiply ></StyEle.Multiply>
            <StyEle.Score >{score}</StyEle.Score>
        </StyEle.Info>
        <StyEle.Group >
            <StyEle.Bar >
                <span >{life}</span>
                <span >{maxLife}</span>
            </StyEle.Bar>
        </StyEle.Group>
        <StyEle.Group>
            <StyEle.Bar />
        </StyEle.Group>
        <StyEle.Group>
            <StyEle.Bar />
        </StyEle.Group>
    </StyEle.Wrapper>
}