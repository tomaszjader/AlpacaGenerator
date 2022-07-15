import React, { useContext, useEffect, useState } from 'react';
import defaultNeck from './assets/img/alpaca/neck/default.png'
import bendBackwardNeck from './assets/img/alpaca/neck/bend-backward.png'
import bendForwardNeck from './assets/img/alpaca/neck/bend-forward.png'
import thickNeck from './assets/img/alpaca/neck/thick.png'
import Context from './ThemeContext.js'
const AlpacaNeck = () => {
    const { neck } = useContext(Context);
    const [neckToSet, setNeckToSet] = useState(defaultNeck);
    useEffect(() => {
        switch (neck) {
            case 0:
                setNeckToSet(defaultNeck);
                break;
            case 1:
                setNeckToSet(bendBackwardNeck);
                break;
            case 2:
                setNeckToSet(bendForwardNeck);
                break;
            case 3:
                setNeckToSet(thickNeck);
                break;

        }
    }, [neck])
    return (
        <div >
            <img className="content" src={neckToSet} alt={neckToSet}></img>
        </div>)
}
export default AlpacaNeck; 