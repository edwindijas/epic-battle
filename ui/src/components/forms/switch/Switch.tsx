import { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import * as StyEle from './styles'
import { SwitchProps } from './types'

const testid = 'component-switch'

export const Switch = ({onClick, messageId, defaultMessage, defaultValue}: SwitchProps) => {
    const [active, setActive] = useState(defaultValue || false)
    const handleOnClick = () => {
        const newValue = !active;
        setActive(newValue);
        if (onClick) {
            onClick(newValue);
        }
    }

    return <StyEle.Container data-testid={testid} >
        <StyEle.Label data-testid={testid + '-label'} >
            <FormattedMessage
                id={messageId}
                defaultMessage={defaultMessage}
            />
        </StyEle.Label>
        <StyEle.Switch data-testid={testid + '-switch'} onClick={handleOnClick} >
            <StyEle.SwitchCircle active={active} data-testid={testid + '-switch-circle'} />
        </StyEle.Switch>
    </StyEle.Container>
}