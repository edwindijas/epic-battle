import { About } from "features/about/About";
import { FeatureLeaderBoard } from "features/leaderboard/LeaderBoard";
import { WelcomeFeature } from "features/welcome/WelcomeFeature"
import { useState } from "react";
import { LandingLayout } from "./layout/LandingLayout"

const LandingTestId = 'page-landing';
    //messageId = 'app.page.home'

export const PageLanding = () => {

    const [showAbout, setShowAbout] = useState(false);

    const openAbout = () => setShowAbout(true);

    const closeAbout = () => setShowAbout(false);

    return <div data-testid={LandingTestId} >
        <About closeAbout={closeAbout} isOpen={showAbout} />
        <LandingLayout openAbout={openAbout} />
        <WelcomeFeature />
    </div>
}