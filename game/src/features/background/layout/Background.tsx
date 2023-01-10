import * as StyEle from './styles';

import { useRef, useState } from 'react';
import { useSquare } from 'hooks/useSquare';

const TestId = 'feature-background'


export const FeatureBackgroundLayout = () => {
    const width = useSquare();
    return <StyEle.Wrapper data-testid={TestId} >
        <StyEle.Board width={width} />
    </StyEle.Wrapper>
}