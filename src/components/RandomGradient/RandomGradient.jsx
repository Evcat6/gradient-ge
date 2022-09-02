import React from 'react';
import { FaDice } from 'react-icons/fa'
import { useRandomGradient, useRandomRange } from '../../context'


const RandomGradient = () => {

    const styles = {
        fontSize: '45px', 
        fontWeight: 'bold', 
        color: '#01B0D3', 
        cursor: 'pointer',
        
    }

    const randomGradient = useRandomGradient()

    const randomRange = useRandomRange()

    return (
        <FaDice 
            style={styles} 
            onClick={() => {
                randomGradient(); 
                randomRange();
            }} />
    )
}

export default RandomGradient;