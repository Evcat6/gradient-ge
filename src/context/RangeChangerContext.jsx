import React, { useState, useContext } from 'react';


const RangeContext = React.createContext();
const updRangeContext = React.createContext();
const RandomRangeContext = React.createContext();

export const useRange = () => {
    return useContext(RangeContext)
}

export const useUpdRange = () => {
    return useContext(updRangeContext)
}

export const useRandomRange = () => {
    return useContext(RandomRangeContext)
}

export const RangeChangerProvider = ({ children }) => {

    const [ range, setRange ] = useState(160);

    const updateRange = (e) => {
        setRange(e.currentTarget.valueAsNumber)
    };

    const randomRange = () => {
        const range = Math.floor(Math.random() * 360);
        setRange(range);
    }

    return (
        <RangeContext.Provider value={range} >
            <updRangeContext.Provider value={updateRange} >
                <RandomRangeContext.Provider value={randomRange}>
                {children}
                </RandomRangeContext.Provider>   
            </updRangeContext.Provider>
        </RangeContext.Provider>
    )
}



