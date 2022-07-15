import React, { useContext, useEffect, useState } from 'react';
import defaultEars from './assets/img/alpaca/ears/default.png'
import tiltBackground from './assets/img/alpaca/ears/tilt-backward.png'
import tiltForward from './assets/img/alpaca/ears/tilt-forward.png'

import Context from './ThemeContext.js'
const AlpacaEars = () => {
    const { ears } = useContext(Context);
    const [earsToSet, setEarsToSet] = useState(defaultEars);
    useEffect(() => {
        switch (ears) {
            case 0:
                setEarsToSet(defaultEars);
                break;
            case 1:
                setEarsToSet(tiltBackground);
                break;
            case 2:
                setEarsToSet(tiltForward);
                break;
            
        }
    }, [ears])
    return (
        <div >
            <img className="content" src={earsToSet} alt={earsToSet}></img>
        </div>)
}
export default AlpacaEars; 