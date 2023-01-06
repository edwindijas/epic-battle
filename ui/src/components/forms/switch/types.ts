export interface SwitchProps {
    defaultValue?: boolean,
    onClick?: (value: boolean) => void,
    messageId: string,
    defaultMessage?: string
}