import { useLeaderBoard } from "hooks/useLeaderBoard";
import { useUser } from "hooks/useUser";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl"
import * as StyEle from './style';


const WelcomeFeatureLayoutTestId = 'feature-welcome-layout',
    WelcomeFeatureLangId = 'app.feature.welcome';

export const WelcomeFeatureLayout = () => {
    const [active, setActive] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 1000);
    }, [])

    const user = useUser();
    const leaders = useLeaderBoard();

    //find my number

    const index = leaders.findIndex(lUser => lUser.accountId === user.accountId);

    if (user.mock) {
        return null;
    }

    const [name] = user.displayName.split(' ');
    //const name = user.displayName;
    const imgSrc = user.avatarUrls["48x48"];

    return <StyEle.Wrapper data-testid={WelcomeFeatureLayoutTestId} active={active} >
        <StyEle.UserProfilePicture data-testid={ WelcomeFeatureLayoutTestId + '-user-profile' } >
            <StyEle.Avatar src={imgSrc} />
        </StyEle.UserProfilePicture>
        <StyEle.UserGreet  >
            <span data-testid={WelcomeFeatureLayoutTestId + '-greeting'} >
                <FormattedMessage 
                    id={WelcomeFeatureLangId + '.greeting'}
                    defaultMessage='Welcome'
                />
            </span>
            <span data-testid={WelcomeFeatureLayoutTestId + '-user-name'} >
                {name}
            </span>
        </StyEle.UserGreet>
        <StyEle.UserRating data-testid={WelcomeFeatureLayoutTestId + '-user-rating'} >
            #{ index === -1 ? 1 : index + 1 }
        </StyEle.UserRating>
    </StyEle.Wrapper>
}