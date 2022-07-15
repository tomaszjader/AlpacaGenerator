import React, {useContext, useEffect} from 'react';
import './App.css';
import nose from './assets/img/alpaca/nose.png'
import neck from './assets/img/alpaca/neck/default.png'
import accessories from './assets/img/alpaca/accessories/earings.png'
import background from './assets/img/alpaca/backgrounds/blue50.png'
import AlpacaHair from './AlpacaHair.js'
import AlpacaEars from './AlpacaEars';
import AlpacaEyes from './AlpacaEyes';
import AlpacaMouth from './AlpacaMouth';
import AlpacaLeg from './AlpacaLeg';
import AlpacaNeck from './AlpacaNeck';
import AlpacaAccessories from './AlpacaAccessories';
import AlpacaBackground from './AlpacaBackground';

const AlpacaImage = () => {
    return (
        <div >
            <h3>Alpaca Image</h3>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                    

                <div style={{ position: "relative", width: "400px" }}>
                    <img src={background} className="content"></img>
                    <AlpacaBackground></AlpacaBackground>
                    
                    <AlpacaEars></AlpacaEars>
                    <AlpacaNeck></AlpacaNeck>
                    
                    <AlpacaLeg></AlpacaLeg>
                    <AlpacaHair></AlpacaHair>
                    <AlpacaAccessories></AlpacaAccessories>
                    
                    
                    <img src={nose} className="content"></img>
                    
                    <AlpacaEyes></AlpacaEyes>
                    <AlpacaMouth></AlpacaMouth>
                </div>
            </div>
        </div>)
}
export default AlpacaImage;