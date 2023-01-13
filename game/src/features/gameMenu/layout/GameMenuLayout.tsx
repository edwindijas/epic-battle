import { IcoClose } from 'assets/svg/IcoClose'
import { Application } from 'game/main/application'
import { MouseEvent } from 'react'
import { FormattedMessage } from 'react-intl'
import * as StyEle from './style'
import { GameMenuLayoutProps } from './types'

const messageId = 'app.feature.gamemenu'

export const GameMenuLayout = ({funFact, gameOver}: GameMenuLayoutProps) => {

    const app = window.app as Application;
    const restartGame = (e: MouseEvent) => {
        e.stopPropagation()
        app.start();
    }



    return <StyEle.Wrapper >
        <StyEle.Menu >
            <StyEle.BtnClose onClick={app.resume} >
                <IcoClose />
            </StyEle.BtnClose>
            <StyEle.Title >
                <FormattedMessage
                    id={messageId + '.title.paused'}
                    defaultMessage='Game Paused'
                />
            </StyEle.Title>
            <StyEle.Quote >
                <StyEle.QuoteParagraph >
                    { funFact }
                </StyEle.QuoteParagraph>
                <StyEle.QuoteAuthor >

                </StyEle.QuoteAuthor>
            </StyEle.Quote>
            <StyEle.Buttons >
                <StyEle.BtnExit $gameOver={gameOver} to='/' >
                    <span >
                        <FormattedMessage
                            id='app.quit'
                        />
                    </span>
                </StyEle.BtnExit>
                {   
                    !gameOver ?
                    <StyEle.BtnResume onClick={app.resume} as='button' >
                        <span >
                            <FormattedMessage
                                id='app.resume'
                            />
                        </span>
                    </StyEle.BtnResume> : null
                }
                
                <StyEle.BtnRestart $gameOver={gameOver} as='button' onClick={restartGame} >
                    <span >
                        <FormattedMessage
                            id='app.restart'
                        />
                    </span>
                </StyEle.BtnRestart>
            </StyEle.Buttons>
        </StyEle.Menu>
        
    </StyEle.Wrapper>
}