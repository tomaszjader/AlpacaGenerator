import React, { useContext, useEffect, useState } from 'react';
import defaultEyes from './assets/img/alpaca/eyes/default.png'
import angryEyes from './assets/img/alpaca/eyes/angry.png'
import naughtyEyes from './assets/img/alpaca/eyes/naughty.png'
import pandaEyes from './assets/img/alpaca/eyes/panda.png'
import smartEyes from './assets/img/alpaca/eyes/smart.png'
import starEyes from './assets/img/alpaca/eyes/star.png'
import Context from './ThemeContext.js'
const AlpacaEyes = () => {
    const { eyes } = useContext(Context);
    const [eyesToSet, setEyesToSet] = useState(defaultEyes);
    useEffect(() => {
        switch (eyes) {
            case 0:
                setEyesToSet(defaultEyes);
                break;
            case 1:
                setEyesToSet(angryEyes);
                break;
            case 2:
                setEyesToSet(naughtyEyes);
                break;
            case 3:
                setEyesToSet(pandaEyes);
                break;
            case 4:
                setEyesToSet(smartEyes);
                break;
            case 5:
                setEyesToSet(starEyes);
                break;

        }
    }, [eyes])
    return (
        <div >
            <img className="content" src={eyesToSet} alt={eyesToSet}></img>
        </div>)
}
export default AlpacaEyes; 