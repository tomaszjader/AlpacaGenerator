import React, { useContext, useEffect, useState } from 'react';
import defaultMouth from './assets/img/alpaca/mouth/default.png'
import astonishedMouth from './assets/img/alpaca/mouth/astonished.png'
import eatingMouth from './assets/img/alpaca/mouth/eating.png'
import laughMouth from './assets/img/alpaca/mouth/laugh.png'
import tongueMouth from './assets/img/alpaca/mouth/tongue.png'

import Context from './ThemeContext.js'
const AlpacaMouth = () => {
    const { mouth } = useContext(Context);
    const [mouthToSet, setMouthToSet] = useState(defaultMouth);
    useEffect(() => {
        switch (mouth) {
            case 0:
                setMouthToSet(defaultMouth);
                break;
            case 1:
                setMouthToSet(astonishedMouth);
                break;
            case 2:
                setMouthToSet(eatingMouth);
                break;
            case 3:
                setMouthToSet(laughMouth);
                break;
            case 4:
                setMouthToSet(tongueMouth);
                break;
        }
    }, [mouth])
    return (
        <div >
            <img className="content" src={mouthToSet} alt={mouthToSet}></img>
        </div>)
}
export default AlpacaMouth; 