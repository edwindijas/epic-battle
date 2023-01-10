import { useSquare } from 'hooks/useSquare'
import * as StyEle from './styles'
import imgBackground from 'assets/background/floral.svg';

export const FloralBackground = () => {
    const length = useSquare();

    return <StyEle.Wrapper length={length} >
        <StyEle.Img src={imgBackground} />
    </StyEle.Wrapper>
}