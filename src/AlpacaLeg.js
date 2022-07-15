import React, { useContext, useEffect, useState } from 'react';
import defaultLeg from './assets/img/alpaca/leg/default.png'
import bubbleTeaLeg from './assets/img/alpaca/leg/bubble-tea.png'
import cookieLeg from './assets/img/alpaca/leg/cookie.png'
import gameContainerLeg from './assets/img/alpaca/leg/game-console.png'
import tiltBackwardLeg from './assets/img/alpaca/leg/tilt-backward.png'
import tiltForwardLeg from './assets/img/alpaca/leg/tilt-forward.png'

import Context from './ThemeContext.js'
const AlpacaLeg = () => {
    const { leg } = useContext(Context);
    const [legToSet, setLegToSet] = useState(defaultLeg);
    useEffect(() => {
        switch (leg) {
            case 0:
                setLegToSet(defaultLeg);
                break;
            case 1:
                setLegToSet(bubbleTeaLeg);
                break;
            case 2:
                setLegToSet(cookieLeg);
                break;
            case 3:
                setLegToSet(gameContainerLeg);
                break;
            case 4:
                setLegToSet(tiltBackwardLeg);
                break;
            case 5:
                setLegToSet(tiltForwardLeg);
                break;

        }
    }, [leg])
    return (
        <div >
            <img className="content" src={legToSet} alt={legToSet}></img>
        </div>)
}
export default AlpacaLeg; 