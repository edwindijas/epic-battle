import { IcoClose } from 'assets/svg/IcoClose';
import { Switch } from 'components/forms/switch/Switch';
import { FormattedMessage } from 'react-intl';
import * as StyEle from './styles'
import { SettingFeatureLayoutProps } from './types';

const TestId = 'feature-settings-layout',
    messageId = 'app.feature.settings';

export const SettingsFeatureLayout = ({onClose, btnOnClick, btnMessageId, btnDefaultMessage}: SettingFeatureLayoutProps) => {

    const handleOther = () => {
        if (btnOnClick) {
            btnOnClick()
        } else if (onClose) {
            onClose();
        }
    }

    return <StyEle.Container data-testid={TestId} >
        <StyEle.Wrapper data-testid={TestId + '-wrapper'} >
            <StyEle.CloseButton data-testid={TestId + '-btn-close'} onClick={onClose} >
                <IcoClose />
                <span className='shadow' />
            </StyEle.CloseButton>
            <StyEle.Title data-testid={TestId + '-title'} >
                <h2><FormattedMessage
                    id={messageId + '.title'}
                    defaultMessage='Settings'
                /></h2>
            </StyEle.Title>
            <StyEle.SettingsContainer >
                <Switch messageId={messageId + '.music'} defaultMessage='music' />
                <Switch messageId={messageId + '.sfx'} defaultMessage='sound effects' />
            </StyEle.SettingsContainer>
            <StyEle.BtnCloseOrOther as='button' onClick={handleOther} >
                <span >
                    <FormattedMessage
                        id={btnMessageId || messageId + '.close'}
                        defaultMessage={ btnDefaultMessage || 'Close'}
                    />
                </span>
            </StyEle.BtnCloseOrOther>
        </StyEle.Wrapper>
    </StyEle.Container>
}