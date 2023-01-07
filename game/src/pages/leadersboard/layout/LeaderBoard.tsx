import { IcoBack } from 'assets/svg/IcoBack';
import { User } from 'models/types';
import { FormattedMessage } from 'react-intl';
import { BackgroundFlex } from '../assets/BackgroundFlex';
import { PageLeadersBoardUser } from '../components/UserStat/UserStat';
import * as StyEle from './styles'
import { PageLeaderBoardLayoutProps } from './types';

const testid = 'page-leader-board-layout',
    messageId = 'app.page.leaderboard',
    users: User[] = [
        {
            firstname: 'Edwin',
            lastname: 'Chiwona',
            highscore: 9308260
        },
        {
            firstname: 'Micheal',
            lastname: 'Chanza',
            highscore: 9308260
        },
        {
            firstname: 'Magret',
            lastname: 'Chulu',
            highscore: 9308260
        },
        {
            firstname: 'Edith',
            lastname: 'Jalo',
            highscore: 9308260
        }
    ]

export const PageLeaderBoardLayout = ({handleBack}: PageLeaderBoardLayoutProps) => {
    return <StyEle.Container data-testid={testid} >
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
            <StyEle.BackgroundWrapper >
                <BackgroundFlex />
            </StyEle.BackgroundWrapper>
       </StyEle.TitleWrapper>
       <StyEle.Body >
        {
            users.map((user, index) => {
                return <PageLeadersBoardUser user={user} key={index} index={index + 1} />;
            })
        }
       </StyEle.Body>
       <StyEle.BtnContainer >
            <StyEle.Prevbutton data-testid={testid + '-btn-prev'} >
                <FormattedMessage
                    id='app.prev'
                    defaultMessage='previous'
                />
            </StyEle.Prevbutton>
            <StyEle.NextButton data-testid={testid + '-btn-next'} >
                <FormattedMessage
                    id='app.next'
                    defaultMessage='next'
                />
            </StyEle.NextButton>
       </StyEle.BtnContainer>
    </StyEle.Container>
}