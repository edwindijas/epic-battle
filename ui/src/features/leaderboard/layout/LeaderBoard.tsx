import { FormattedMessage } from 'react-intl'
import { BackgroundButton } from '../assets/ButtonBackground';
import { LeftHookDeco } from '../assets/LeftHookDeco';
import { LeaderBoardFeatureUser } from '../components/User';
import * as StyEle from './LeaderBoardstyle'

const TestId = 'feature-leaderboard-layout',
    messageId = 'app.feature.leaderboard';

export const FeatureLeaderBoardLayout = () => {
    return <StyEle.Wrapper data-testid={TestId} >
        <StyEle.Title
                data-testid={TestId + '-title'}
            >
                <FormattedMessage
                    id={messageId + '.title'}
                />
            </StyEle.Title>
        <StyEle.BottomRow >
            <StyEle.LeftHookDeco >
                <LeftHookDeco />
            </StyEle.LeftHookDeco>
            <StyEle.Members data-testid={TestId + '-members'} >
                    <li >
                        <LeaderBoardFeatureUser ></LeaderBoardFeatureUser>
                    </li>
                    <li >
                        <LeaderBoardFeatureUser ></LeaderBoardFeatureUser>
                    </li>
            </StyEle.Members>
            <StyEle.LnkLeaderboard data-testid={TestId + '-lnk-leaderboard'} to='/leaderboard' >
                <BackgroundButton />
                <FormattedMessage
                    id={messageId + '.lnk.viewLeaderboard' }
                />
            </StyEle.LnkLeaderboard>
        </StyEle.BottomRow>
    </StyEle.Wrapper>
}