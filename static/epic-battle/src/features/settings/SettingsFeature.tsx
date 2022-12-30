import { useState } from "react"
import { SettingsToggle } from "./components/settingButton/SettingsButton"
import { SettingsFeatureLayout } from "./layout/SettingsFeatureLayout"

export const FeatureSettings = () => {
    const [show, setShow] = useState(false);

    const handleOpen = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false)
    }

    return <>
        <SettingsToggle onClick={handleOpen} />
        {show && <SettingsFeatureLayout onClose={handleClose} />}
    </>
}