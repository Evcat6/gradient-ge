import React from 'react';
import { PickerButton } from '../';
import styles from './PickerButtons.module.css';
import { useFirstPickerOpen, useSecondPickerOpen } from '../../context'


const PickerButtons = () => {

    const [ isPickerOpen, firstPickerOpener ] = useFirstPickerOpen();

    const [ isPickerOpenScnd, secondPickerOpener ] = useSecondPickerOpen();

    return (
        <div className={styles.container} >
            <PickerButton onClick={firstPickerOpener}>Set first color</PickerButton>
            <PickerButton onClick={secondPickerOpener}>Set second color</PickerButton>
        </div>
    )
}

export default PickerButtons;