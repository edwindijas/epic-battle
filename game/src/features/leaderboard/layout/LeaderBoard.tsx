import { User } from 'models/types';
import { FormattedMessage } from 'react-intl'
import { Background } from '../assets/Background';
import { LeaderBoardFeatureUser } from '../components/User';
import * as StyEle from './styles'
import { FeatureLeaderBoardLayoutProps } from './types';

const TestId = 'feature-leaderboard-layout',
    messageId = 'app.feature.leaderboard';

export const FeatureLeaderBoardLayout = ({users}: FeatureLeaderBoardLayoutProps) => {
    return <StyEle.Wrapper data-testid={TestId} >
            <Background />
            <StyEle.Members data-testid={TestId + '-members'} >
                {
                    users.slice(0, 2).map((user: User, index) => {
                        return <StyEle.Member key={user.accountId} >
                            <LeaderBoardFeatureUser  {...user} position={index + 1}  />
                        </StyEle.Member>
                    })
                }
            </StyEle.Members>
            <StyEle.LnkLeaderboard data-testid={TestId + '-lnk-leaderboard'} to='/leaderboard' >
                <FormattedMessage
                    id={messageId + '.lnk.viewLeaderboard' }
                />
            </StyEle.LnkLeaderboard>
    </StyEle.Wrapper>
}