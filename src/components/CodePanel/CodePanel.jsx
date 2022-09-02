import React from 'react';
import styles from './CodePanel.module.css';
import { useRange, useFirstPicker, useSecondPicker } from '../../context'
import { FiCopy } from 'react-icons/fi'


const CodePanel = () => {

    const range = useRange();

    const [ first ] = useFirstPicker();

    const [ second ] = useSecondPicker();

    const textToCopy = `background-color: ${first};
                        background-image: linear-gradient(${range}deg, ${first} 0%, ${second} 100%);`;

    const TextCopying = () => {
        navigator.clipboard.writeText(textToCopy)
        alert('Code copied to clipboard!')
    }

    return (
        <div className={styles.container} >
            <code  className={styles.code}>
                <span className={styles.first_atribute} >background-color:</span> {first};<br />
                <span className={styles.first_atribute}>background-image:</span> linear-gradient({range}deg, {first} 0%, {second} 100%);
            </code>
            <FiCopy style={{color: "white", fontSize: "20px"}} onClick={TextCopying} />
        </div>
    )
}


export default CodePanel;