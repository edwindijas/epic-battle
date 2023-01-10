import { FormattedMessage } from 'react-intl'
import { Background } from '../assets/Background';
import { LeaderBoardFeatureUser } from '../components/User';
import * as StyEle from './styles'

const TestId = 'feature-leaderboard-layout',
    messageId = 'app.feature.leaderboard';

const sampleUsers = [
    {
        name: 'Edwin Chiwona',
        highScore: 900,
        position: 1
    },
    {
        name: 'Wonderful Kunje',
        highScore: 900,
        position: 1
    },
]

export const FeatureLeaderBoardLayout = () => {
    return <StyEle.Wrapper data-testid={TestId} >
            <Background />
            <StyEle.Members data-testid={TestId + '-members'} >
                {
                    sampleUsers.map((user) => {
                        return <StyEle.Member key={user.name} >
                            <LeaderBoardFeatureUser  {...user}  />
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