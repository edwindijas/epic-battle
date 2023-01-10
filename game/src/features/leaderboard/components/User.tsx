import { FeatureLeaderBoardUserProps } from "./types";
import * as StyEle from './style'


const TestId = 'feature-leaderboard-component-user'

export const LeaderBoardFeatureUser = ({name, position, highScore}: FeatureLeaderBoardUserProps ) => {
    return <StyEle.Wrapper data-testid={TestId} >
        <StyEle.User >
            <StyEle.UserRating data-testid={TestId + '-rating'} >{position}</StyEle.UserRating>
            <StyEle.UserProfilePicture data-testid={TestId + '-profile-picture'} />
            <StyEle.Username data-testid={TestId + '-name'} >{name}</StyEle.Username>
        </StyEle.User>
        <StyEle.Points >{highScore}</StyEle.Points>
    </StyEle.Wrapper>
}