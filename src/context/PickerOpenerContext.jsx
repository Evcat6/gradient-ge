import React, { useState, useContext } from 'react';

const FirstPickerContext = React.createContext();
const SecondPickerContext = React.createContext();


export const useFirstPickerOpen = () => {
    return useContext(FirstPickerContext);
}

export const useSecondPickerOpen = () => {
    return useContext(SecondPickerContext);
}

export const OpenPickerProvider = ({ children }) => {

    const [ isPickerOpen, setIsPickerOpen ] = useState(false);

    const [ isPickerOpenScnd, setIsPickerOpenScnd ] = useState(false);

    const firstPickerOpener = () => {
        if (isPickerOpenScnd) {
            setIsPickerOpenScnd(!isPickerOpenScnd);
        }
        setIsPickerOpen(!isPickerOpen)
    }


    const secondPickerOpener = () => {
        if (isPickerOpen) {
            setIsPickerOpen(!isPickerOpen);
        }
        setIsPickerOpenScnd(!isPickerOpenScnd)
    }

    return (
        <FirstPickerContext.Provider value={[isPickerOpen, firstPickerOpener]} >
            <SecondPickerContext.Provider value={[isPickerOpenScnd, secondPickerOpener]} >
                {children}
            </SecondPickerContext.Provider>
        </FirstPickerContext.Provider>
    )

}