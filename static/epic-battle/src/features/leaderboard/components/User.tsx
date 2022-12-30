import { FeatureLeaderBoardUserProps } from "./types";
import * as StyEle from './style'


const TestId = 'feature-leaderboard-component-user'

export const LeaderBoardFeatureUser = ({}: FeatureLeaderBoardUserProps ) => {
    return <StyEle.Wrapper data-testid={TestId} >
        <StyEle.UserRating data-testid={TestId + '-rating'} >1</StyEle.UserRating>
        <StyEle.UserProfilePicture data-testid={TestId + '-profile-picture'} />
        <StyEle.Username data-testid={TestId + '-name'} >Edwin</StyEle.Username>
    </StyEle.Wrapper>
}