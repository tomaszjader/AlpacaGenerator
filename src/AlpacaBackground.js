import React, { useContext, useEffect, useState } from 'react';
import blue50Background from './assets/img/alpaca/backgrounds/blue50.png'
import blue60Background from './assets/img/alpaca/backgrounds/blue60.png'
import blue70Background from './assets/img/alpaca/backgrounds/blue70.png'

import darkblue50Background from './assets/img/alpaca/backgrounds/darkblue30.png'
import darkblue60Background from './assets/img/alpaca/backgrounds/darkblue50.png'
import darkblue70Background from './assets/img/alpaca/backgrounds/darkblue70.png'

import green50Background from './assets/img/alpaca/backgrounds/green50.png'
import green60Background from './assets/img/alpaca/backgrounds/green60.png'
import green70Background from './assets/img/alpaca/backgrounds/green70.png'

import grey50Background from './assets/img/alpaca/backgrounds/grey40.png'
import grey60Background from './assets/img/alpaca/backgrounds/grey70.png'
import grey70Background from './assets/img/alpaca/backgrounds/grey80.png'


import red50Background from './assets/img/alpaca/backgrounds/red50.png'
import red60Background from './assets/img/alpaca/backgrounds/red60.png'
import red70Background from './assets/img/alpaca/backgrounds/red70.png'

import yellow50Background from './assets/img/alpaca/backgrounds/yellow50.png'
import yellow60Background from './assets/img/alpaca/backgrounds/yellow60.png'
import yellow70Background from './assets/img/alpaca/backgrounds/yellow70.png'

import Context from './ThemeContext.js'
const AlpacaBackground = () => {
    const { background } = useContext(Context);
    const [backgroundToSet, setBackgroundToSet] = useState(blue50Background);
    useEffect(() => {
        switch (background) {
            case 0:
                setBackgroundToSet(blue50Background);
                break;
            case 1:
                setBackgroundToSet(blue60Background);
                break;
            case 2:
                setBackgroundToSet(blue70Background);
                break;
            case 3:
                setBackgroundToSet(darkblue50Background);
                break;
            case 4:
                setBackgroundToSet(darkblue60Background);
                break;
            case 5:
                setBackgroundToSet(darkblue70Background);
                break;
            case 6:
                setBackgroundToSet(green50Background);
                break;
            case 7:
                setBackgroundToSet(green60Background);
                break;
            case 8:
                setBackgroundToSet(green70Background);
                break;
            case 9:
                setBackgroundToSet(grey50Background);
                break;
            case 10:
                setBackgroundToSet(grey60Background);
                break;
            case 11:
                setBackgroundToSet(grey70Background);
                break;
            case 12:
                setBackgroundToSet(red50Background);
                break;
            case 13:
                setBackgroundToSet(red60Background);
                break;
            case 14:
                setBackgroundToSet(red70Background);
                break;
            case 15:
                setBackgroundToSet(yellow50Background);
                break;
            case 16:
                setBackgroundToSet(yellow60Background);
                break;
            case 17:
                setBackgroundToSet(yellow70Background);
                break;

        }
    }, [background])
    return (
        <div >
            <img className="content" src={backgroundToSet} alt={backgroundToSet}></img>
        </div>)
}
export default AlpacaBackground; 