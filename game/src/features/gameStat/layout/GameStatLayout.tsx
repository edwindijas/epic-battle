import * as StyEle from './styles';
import { useSquare } from "hooks/useSquare";
import { GameData } from "models/Stat";
import { IcoPause } from '../assets/IcoPause';
import { IcoBall } from '../assets/IcoBall';
import { GameScoreLayoutProps } from './types';
import { IcoLife } from '../assets/IcoLife';
import { Application } from 'game/main/application';
import { useUser } from 'hooks/useUser';

export const GameStatLayout = ({stat}: GameScoreLayoutProps) => {
    const app = window.app as Application;
    const {score, life, lifeMax, armo, armoMax, boost} = stat
    const length = useSquare();
    const lifePer = life / lifeMax * 100;
    const armoPer = armo / armoMax * 100;
    const ballColor = '#56d68f';

    const { avatarUrls } = useUser();

    return <StyEle.Wrapper >
        <StyEle.UserInfo >
            <StyEle.UserProfile>
                <StyEle.UserProfileImg src={avatarUrls['48x48']} />
            </StyEle.UserProfile>
            <StyEle.UserProps>
                <StyEle.UserLife per={lifePer} >
                    <IcoLife />
                    <span >{life}</span>
                </StyEle.UserLife>
                <StyEle.UserArmo per={armoPer} color={ballColor} >
                    <IcoBall  color={ballColor} />
                    <span>{armo}</span>
                </StyEle.UserArmo>
            </StyEle.UserProps>
        </StyEle.UserInfo>
        <StyEle.BtnPause onClick={app.pause} >
            <IcoPause />
        </StyEle.BtnPause>
        <StyEle.GameStatus>
            <StyEle.GameScore >
                {score.toLocaleString('en-us').split(',').map((dig, index) => {
                    return <StyEle.GameScoreDig key={index} >
                        {dig}
                    </StyEle.GameScoreDig>
                })}
            </StyEle.GameScore>
            <StyEle.GameMultiplier >
                { boost }
            </StyEle.GameMultiplier>
        </StyEle.GameStatus>
    </StyEle.Wrapper>
}
