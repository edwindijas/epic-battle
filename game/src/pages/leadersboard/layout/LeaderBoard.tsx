import { IcoBack } from 'assets/svg/IcoBack';
import { User } from 'models/types';
import { FormattedMessage } from 'react-intl';
import { PageLeadersBoardUser } from '../components/UserStat/UserStat';
import * as StyEle from './styles'
import { PageLeaderBoardLayoutProps } from './types';
import mockUser from "mock/User.json"
import mockData from "mock/user.data.json"
import { FloralBackground } from 'components/floralBackground/FloralBackground';
import { useCallback, useState } from 'react';
import { useLeaderBoard } from 'hooks/useLeaderBoard';

const testid = 'page-leader-board-layout',
    messageId = 'app.page.leaderboard';

export const PageLeaderBoardLayout = ({handleBack}: PageLeaderBoardLayoutProps) => {
    const sliceNum = 4;
    const [currentIndex, setIndex] = useState(0);

    const startSlice = currentIndex * sliceNum;
    const endSlice = startSlice + sliceNum;

    const users = useLeaderBoard();


    const next = useCallback(() => {
        setIndex((index) => index + 1);
    }, [setIndex])

    const prev = useCallback(() => {
        setIndex(index => index - 1);
    }, [setIndex])

    return <>
        <FloralBackground />
        <StyEle.Container data-testid={testid} >
       <StyEle.TitleWrapper >
            <StyEle.BackButton data-testid={testid + '-btn-back'} 
                onClick={handleBack}
            >
                <IcoBack />
            </StyEle.BackButton>
            <StyEle.Title data-testid={testid + '-title'} >
                <FormattedMessage
                    id={messageId + '.title'}
                    defaultMessage="leader's board"
                />
            </StyEle.Title>
       </StyEle.TitleWrapper>
       <StyEle.List >
        {
            users.slice(startSlice, endSlice).map((user, index) => {
                return <StyEle.ListItem  key={user.accountId}  >
                    <PageLeadersBoardUser user={user} key={index} index={ startSlice + index + 1} />;
                </StyEle.ListItem>
            })
        }
       </StyEle.List>
       <StyEle.BtnContainer >
            <StyEle.Prevbutton data-testid={testid + '-btn-prev'} onClick={prev} >
                <FormattedMessage
                    id='app.prev'
                    defaultMessage='previous'
                />
            </StyEle.Prevbutton>
            <StyEle.NextButton data-testid={testid + '-btn-next'} onClick={next} >
                <FormattedMessage
                    id='app.next'
                    defaultMessage='next'
                />
            </StyEle.NextButton>
       </StyEle.BtnContainer>
    </StyEle.Container>
    </>
}