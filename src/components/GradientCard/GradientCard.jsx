import React from "react";
import { StyledCard }  from './StyledCard'
import { useRange, useFirstPicker, useSecondPicker } from '../../context/index'

const GradientCard = () => {

    //input range value
    const range = useRange()

    //color from first color picker
    const [ first ] = useFirstPicker(); 

    //color from second color picker
    const [ second ] = useSecondPicker();

    return (
        <StyledCard 
            range={range}
            first={first} 
            second={second} 
        />
    );
}
 
export default GradientCard;