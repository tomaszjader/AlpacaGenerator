import React, { useContext, useEffect, useState } from 'react';
import earingsAccessories from './assets/img/alpaca/accessories/earings.png'
import flowerAccessories from './assets/img/alpaca/accessories/flower.png'
import glassesAccessories from './assets/img/alpaca/accessories/glasses.png'
import headphoneAccessories from './assets/img/alpaca/accessories/headphone.png'
import Context from './ThemeContext.js'
const AlpacaAccessories = () => {
    const { accessories } = useContext(Context);
    const [accessoriesToSet, setAccessoriesToSet] = useState(earingsAccessories);
    useEffect(() => {
        switch (accessories) {
            case 0:
                setAccessoriesToSet(earingsAccessories);
                break;
            case 1:
                setAccessoriesToSet(flowerAccessories);
                break;
            case 2:
                setAccessoriesToSet(glassesAccessories);
                break;
            case 3:
                setAccessoriesToSet(headphoneAccessories);
                break;

        }
    }, [accessories])
    return (
        <div >
            <img className="content" src={accessoriesToSet} alt={accessoriesToSet}></img>
        </div>)
}
export default AlpacaAccessories; 