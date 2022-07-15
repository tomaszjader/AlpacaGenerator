import React, { useContext, useEffect, useState } from 'react';
import defaultHair from './assets/img/alpaca/hair/default.png'
import bangHair from './assets/img/alpaca/hair/bang.png'
import curlsHair from './assets/img/alpaca/hair/curls.png'
import elegantHair from './assets/img/alpaca/hair/elegant.png'
import fancyHair from './assets/img/alpaca/hair/fancy.png'
import quiffHair from './assets/img/alpaca/hair/quiff.png'
import shortHair from './assets/img/alpaca/hair/short.png'
import Context from './ThemeContext.js'
const AlpacaHair = () => {
    const { hair } = useContext(Context);
    const [hairToSet, setHairToSet] = useState(defaultHair);
    useEffect(() => {
        switch (hair) {
            case 0:
                setHairToSet(defaultHair);
                break;
            case 1:
                setHairToSet(bangHair);
                break;
            case 2:
                setHairToSet(curlsHair);
                break;
            case 3:
                setHairToSet(elegantHair);
                break;
            case 4:
                setHairToSet(fancyHair);
                break;
            case 5:
                setHairToSet(quiffHair);
                break;
            case 6:
                setHairToSet(shortHair);
                break;

        }
    }, [hair])
    return (
        <div >
            <img className="content" src={hairToSet} alt={hairToSet}></img>
        </div>)
}
export default AlpacaHair; 