import * as StyEle from './styles'
import { PageLeadersBoardUserProps } from './types';
const testid = 'page-leaderboard-user';

export const PageLeadersBoardUser = ({user, index}: PageLeadersBoardUserProps) => {
    return <StyEle.Container
        data-testid={testid}
    >
        <StyEle.Rating data-testid={testid + '-rating'} >{index}</StyEle.Rating>
        <StyEle.Profile data-testid={testid + '-profile-picture'} ></StyEle.Profile>
        <StyEle.Name data-testid={testid + '-name'} >{user.firstname}<span >{ user.lastname }</span></StyEle.Name>
        <StyEle.Score data-testid={testid + '-score'} >{user.highscore}</StyEle.Score>
    </StyEle.Container>
}