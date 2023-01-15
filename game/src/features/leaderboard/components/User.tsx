import { FeatureLeaderBoardUserProps } from "./types";
import * as StyEle from './style'
import { User } from "models/types";


const TestId = 'feature-leaderboard-component-user'

export const LeaderBoardFeatureUser = ({displayName, position , highscore, avatarUrls}: User & { position: number} ) => {
    return <StyEle.Wrapper data-testid={TestId} >
        <StyEle.User >
            <StyEle.UserRating data-testid={TestId + '-rating'} >{position}</StyEle.UserRating>
            <StyEle.UserProfilePicture data-testid={TestId + '-profile-picture'} >
                <StyEle.UserProfilePictureImg src={avatarUrls["48x48"]} />
            </StyEle.UserProfilePicture>
            <StyEle.Username data-testid={TestId + '-name'} >{displayName}</StyEle.Username>
        </StyEle.User>
        <StyEle.Points >{highscore?.toLocaleString('en-us')}</StyEle.Points>
    </StyEle.Wrapper>
}