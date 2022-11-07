import React, { useContext, useEffect, useRef } from 'react';
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
import domtoimage from 'dom-to-image';
import {
    exportComponentAsJPEG,
    exportComponentAsPDF,
    exportComponentAsPNG,
} from 'react-component-export-image';


const AlpacaImage = () => {
    const downloadRef = useRef();

    const handleDownloadImage = () => {
        const targetEl = downloadRef.current;
        domtoimage.toJpeg(targetEl, { quality: 0.95 }).then((dataUrl) => {
            let link = document.createElement('a');
            link.download = 'my-image-name.jpeg';
            link.href = dataUrl;
            link.click();
        });
    };
    return (
        <div >
            <h3>Alpaca Image</h3>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>


                <div style={{ position: "relative", width: "400px" }} ref={downloadRef}>
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
                <button className="download" onClick={handleDownloadImage}>
                    Download
                </button>
            </div>
        </div>)
}
export default AlpacaImage;