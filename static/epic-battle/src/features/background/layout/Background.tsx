import * as StyEle from './styles'
import backgroundImage from '../assets/background.jpg'

const TestId = 'feature-background'

export const FeatureBackgroundLayout = () => {
    return <StyEle.Wrapper data-testid={TestId} >
        <StyEle.BackgroundImage data-testid={TestId + '-background-image'} src={backgroundImage} />
    </StyEle.Wrapper>
}