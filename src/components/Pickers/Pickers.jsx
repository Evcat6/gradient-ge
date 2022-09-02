import React from 'react';
import { useFirstPickerOpen, useSecondPickerOpen, useFirstPicker, useSecondPicker, } from '../../context';
import { SketchPicker } from 'react-color';

const Pickers = () => {

    const [ isPickerOpen ] = useFirstPickerOpen();

    const [ isPickerOpenScnd ] = useSecondPickerOpen(); 

    const [ first, firstPickerupdate ] = useFirstPicker();

    const [ second, secondPickerupdate ] = useSecondPicker();

    return (
        <div style={{position: 'absolute'}}>
            {isPickerOpen && <SketchPicker color={first} onChange={firstPickerupdate}/>}
            {isPickerOpenScnd && <SketchPicker color={second} onChange={secondPickerupdate}/>}
        </div>
    )
}


export default Pickers;