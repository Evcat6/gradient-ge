import React from 'react';
import { useRange, useUpdRange } from '../../context'
import styles from './Range.module.css';

const RangeInput = () => {

    const range = useRange();

    const changeRange = useUpdRange();

    return <input className={styles.range_input} type="range" min='0' max="360" value={range} onChange={changeRange} />
}

export default RangeInput;