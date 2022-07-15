import logo from './logo.svg';
import React from 'react';
import './App.css';
import AlpacaImage from './AlpacaImage.js'
import Accessorize from './Accessorize.js'
import Style from './Style.js'
import Context from './ThemeContext.js'
import { useState } from 'react';
const App = () => {
  const [alpacaImage, setalpacaImage] = useState(["ten", "nieTen"]);
  const [hair, setHair] = useState(0);
  const [ears, setEars] = useState(0);
  const [buttonToChange, setButtonToChange] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [leg, setLeg] = useState(0);
  const [ neck, setNeck ] = useState(0);
  const [ accessories, setAccessories ] = useState(0);
  const [ background, setBackground ] = useState(0);
  return (
    <Context.Provider value={{ hair, alpacaImage, setalpacaImage, 
      setHair, neck, setNeck , accessories, setAccessories,
    buttonToChange, setButtonToChange, ears, 
    setEars,eyes, setEyes, mouth, setMouth,
    leg, setLeg, background, setBackground }}>
      <div className="App">
        <header className='container'>
          <h1>Alpaca Generator</h1>
          <AlpacaImage />
          <Accessorize ></Accessorize>
          <Style className='container'></Style>

        </header>

      </div>
    </Context.Provider>
  );
};


export default App;
