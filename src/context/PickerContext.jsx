import React, { useState, useContext } from 'react';

const FirstPickerContext = React.createContext();
const SecondPickerContext = React.createContext();
const RandomGradientContext = React.createContext();

export const useFirstPicker = () => {
    return useContext(FirstPickerContext)
}

export const useSecondPicker = () => {
    return useContext(SecondPickerContext)
}

export const useRandomGradient = () => {
    return useContext(RandomGradientContext)
}



export const PickerProvider = ({children}) => {

    const [ first, setFirst ] = useState('#0093E9')

    const [ second, setSecond ] = useState('#80D0C7')

    const firstPickerupdate = (e) => {
        setFirst(e.hex)
    }

    const secondPickerupdate = (e) => {
        setSecond(e.hex)
    }

    const RandomColor = () => {
        const letters = '0123456789ABCDEF'.split (''); 
        let color = '#';
        for (let i = 0; i < 6; i++) { 
            color += letters [ Math.round (Math.random () * 15)]; 
        };
        return color;
    }

    const setRandomGradient = () => {
        setFirst(RandomColor)
        setSecond(RandomColor)
    }

    return (
        <FirstPickerContext.Provider value={[first, firstPickerupdate]} >
            <SecondPickerContext.Provider value={[second, secondPickerupdate]} >
                <RandomGradientContext.Provider value={setRandomGradient}>
                {children}
                </RandomGradientContext.Provider>
            </SecondPickerContext.Provider>
        </FirstPickerContext.Provider>
    )
}