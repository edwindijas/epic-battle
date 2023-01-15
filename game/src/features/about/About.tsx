import { IcoClose } from "assets/svg/IcoClose"
import { FormattedMessage } from "react-intl"
import * as StyEle from "./styles"
import { AboutProps } from "./types"

const messageId = 'app.feature.about'

export const About = ({closeAbout, isOpen}: AboutProps) => {
    const howToItems = 7;

    if (!isOpen) {
        return null;
    }

    return <StyEle.Wrapper  >
        <StyEle.Background onClick={closeAbout} />
        <StyEle.ContentInfo >
            <StyEle.CloseBtn onClick={closeAbout} >
                <IcoClose />
            </StyEle.CloseBtn>
            <StyEle.Title >
                <FormattedMessage 
                    id={messageId + '.title'}
                />
            </StyEle.Title>
            <StyEle.List >
                {
                    Array(howToItems).fill('').map((value, index) => {
                        return <StyEle.ListItem key={index} >
                            <StyEle.HowToPar >
                                <FormattedMessage 
                                        id={messageId + `.howTo_${index+1}`}
                                />
                            </StyEle.HowToPar>
                        </StyEle.ListItem>
                    })
                }
            </StyEle.List>
        </StyEle.ContentInfo>
    </StyEle.Wrapper>
}