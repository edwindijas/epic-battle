import { IcoEpic } from "assets/svg/IcoEpic";
import { FeatureLeaderBoard } from "features/leaderboard/LeaderBoard";
import { FeatureSettings } from "features/settings/SettingsFeature";
import { useSquare } from "hooks/useSquare";
import { MouseEvent } from "react";
import { FormattedMessage } from "react-intl";
import * as StyEle from "./styles"

const LandingLayoutTestId = 'page-landing-layout',
    MessageId = 'app.page.home'



export const LandingLayout = () => {

    //prevent initial missfire
    const length = useSquare();

    const handleStartGame = (e: MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
    }


    return <>
    
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
        <FeatureLeaderBoard />
    </StyEle.Wrapper>
    </>
}