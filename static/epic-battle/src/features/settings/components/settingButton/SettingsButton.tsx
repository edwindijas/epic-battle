import { SettingsIco } from 'features/settings/assets/SettingsIco'
import * as StyEle from './styles'
import { SettingFeatureComponentButtonProps } from './types'

const TestId = 'feature-settings-component-setting-toggle'

export const SettingsToggle = ({onClick}: SettingFeatureComponentButtonProps ) => {
    return <StyEle.Wrapper data-testid={TestId} onClick={onClick} >
        <SettingsIco />
    </StyEle.Wrapper>
}