import React from 'react';
import styles from './Changer.module.css';
import { PickerButtons, RangeInput, Pickers, RandomGradient } from '..'


const GradientChanger = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title} >Editor</h2>
            <RangeInput />
            <PickerButtons/>
            <Pickers/>
            <div  className={styles.random}>
            <RandomGradient />
            </div>
        </div>
    )
}

export default GradientChanger;