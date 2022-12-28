import { IcoEpic } from "assets/svg/IcoEpic";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import * as StyEle from "./LandingLayout.style"

const LandingLayoutTestId = 'page-landing-layout',
    MessageId = 'app.page.home'



export const LandingLayout = () => {
    return <StyEle.Wrapper data-testid={LandingLayoutTestId} >
        <StyEle.IcoEpic data-testid={LandingLayoutTestId + '-ico-epic'} >
            <IcoEpic />
        </StyEle.IcoEpic>
        <StyEle.Title data-testid={LandingLayoutTestId + '-title'} >
            <StyEle.TitleSpan >
                <FormattedMessage
                    id={MessageId + '.title.epic'}
                    defaultMessage='Epic'
                />
            </StyEle.TitleSpan>
            <StyEle.TitleSpan >
                <FormattedMessage
                    id={MessageId + '.title.battle'}
                    defaultMessage='Battle'
                />
            </StyEle.TitleSpan>
        </StyEle.Title>
        <StyEle.LnkStartGame to='/game' data-testid={LandingLayoutTestId + '-lnk-game'} >
            <StyEle.ThreeDots />
            <span >
                <FormattedMessage
                    id={MessageId + '.startGame'}
                    defaultMessage='start game'
                />
            </span>
            <StyEle.ThreeDots />
        </StyEle.LnkStartGame>
    </StyEle.Wrapper> 
}