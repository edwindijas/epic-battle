import { IcoBoost } from "assets/svg/IcoBoost";
import { IcoEpic } from "assets/svg/IcoEpic";
import { IcoHelp } from "assets/svg/IcoHelp";
import { FloralBackground } from "components/floralBackground/FloralBackground";
import { FeatureLeaderBoard } from "features/leaderboard/LeaderBoard";
import { FeatureSettings } from "features/settings/SettingsFeature";
import { useSquare } from "hooks/useSquare";
import { MouseEvent, useState } from "react";
import { FormattedMessage } from "react-intl";
import * as StyEle from "./styles"
import { LandingLayoutProps } from "./types";

const LandingLayoutTestId = 'page-landing-layout',
    MessageId = 'app.page.home'



export const LandingLayout = ({openAbout}: LandingLayoutProps) => {

    //prevent initial missfire
    const length = useSquare();
    const [showBoostHelp, setBoostHelp] = useState(false);

    const toggleBoostHelp = () => {
        setBoostHelp(boost => !boost);
    }

    const handleStartGame = (e: MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
    }


    return <>
    <FloralBackground />
    <StyEle.Wrapper data-testid={LandingLayoutTestId} length={length} >
        <FeatureSettings />
        <StyEle.IcoEpic data-testid={LandingLayoutTestId + '-ico-epic'} >
            <IcoEpic />
        </StyEle.IcoEpic>
        <StyEle.Title data-testid={LandingLayoutTestId + '-title'} >
                <FormattedMessage
                    id={MessageId + '.title'}
                    defaultMessage='Epic Battle'
                />
        </StyEle.Title>
        <StyEle.LnkStartGame onClick={handleStartGame} to='/game' data-testid={LandingLayoutTestId + '-lnk-game'} >
            <span >
                <FormattedMessage
                    id={MessageId + '.startGame'}
                    defaultMessage='start game'
                />
            </span>
        </StyEle.LnkStartGame>
        <StyEle.AboutBoost >
            <StyEle.BoostIcon >
                <IcoBoost />
            </StyEle.BoostIcon>
            <StyEle.AboutBoostPar >
                <StyEle.AboutBoostFig > 
                    15
                </StyEle.AboutBoostFig>
            </StyEle.AboutBoostPar>
            

            <StyEle.HelpIcon onClick={openAbout} >?</StyEle.HelpIcon>
        </StyEle.AboutBoost>
        <FeatureLeaderBoard />
    </StyEle.Wrapper>
    </>
}