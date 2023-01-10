import { FeatureLeaderBoard } from "features/leaderboard/LeaderBoard";
import { WelcomeFeature } from "features/welcome/WelcomeFeature"
import { LandingLayout } from "./layout/LandingLayout"

const LandingTestId = 'page-landing';
    //messageId = 'app.page.home'

export const PageLanding = () => {
    return <div data-testid={LandingTestId} >
        <LandingLayout />
        <WelcomeFeature />
    </div>
}