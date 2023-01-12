import { useSquare } from 'hooks/useSquare'
import * as StyEle from './styles'
import imgBackground from 'assets/background/floral.svg';
import { FloralBackgroundProps } from './types';

export const FloralBackground = ({mousePointer}: FloralBackgroundProps) => {
    const length = useSquare();

    return <StyEle.Wrapper length={length} mousePointer={mousePointer} >
        <StyEle.Img src={imgBackground} draggable={false} />
    </StyEle.Wrapper>
}