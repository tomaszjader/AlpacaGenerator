import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Context from './ThemeContext.js'
const Style = () => {
    const [hairToRender, setHairToRender] = useState(<Hair></Hair>);

    const { buttonToChange, setButtonToChange } = useContext(Context);
    useEffect(() => {
        switch (buttonToChange) {
            case 0:
                setHairToRender(<Hair></Hair>)
                break;
            case 1:
                setHairToRender(<Ears></Ears>)
                break;
            case 2:
                setHairToRender(<Eyes></Eyes>)
                break;
            case 3:
                setHairToRender(<Mouth></Mouth>)
                break;
            case 4:
                setHairToRender(<Neck></Neck>)
                break;
            case 5:
                setHairToRender(<Leg></Leg>)
                break;
            case 6:
                setHairToRender(<Accessories></Accessories>)
                break;
            case 7:
                setHairToRender(<Background></Background>)
                break;

        }
    }, [buttonToChange]);
    return (
        <div>
            <h3>Style</h3>
            {hairToRender}

        </div>)
}
const Hair = () => {
    const { hair, setHair } = useContext(Context);
    return (
        <div className="Accessorize-bootons">
            <Button onClick={() => setHair(0)}>Default</Button>
            <Button onClick={() => setHair(1)}>Bang</Button>
            <Button onClick={() => setHair(2)}>Curls</Button>
            <Button onClick={() => setHair(3)}>Elegant</Button>
            <Button onClick={() => setHair(4)}>Fancy</Button>
            <Button onClick={() => setHair(5)}>Quiff</Button>
            <Button onClick={() => setHair(6)}>Short</Button>
        </div>
    );
}
const Ears = () => {
    const { ears, setEars } = useContext(Context);
    return (
        <div className="Accessorize-bootons">
            <Button onClick={()=>setEars(0)}>Default</Button>
            <Button onClick={()=>setEars(1)}>Tit-Backward</Button>
            <Button onClick={()=>setEars(2)}>Tit-Forword</Button>
        </div>
    );
}
const Eyes = () => {
    const { eyes, setEyes } = useContext(Context);
    return (
        <div className="Accessorize-bootons">
            <Button onClick={()=>{setEyes(0)}}>Default</Button>
            <Button onClick={()=>{setEyes(1)}}>Angry</Button>
            <Button onClick={()=>{setEyes(2)}}>Naughty</Button>
            <Button onClick={()=>{setEyes(3)}}>Panda</Button>
            <Button onClick={()=>{setEyes(4)}}>Smart</Button>
            <Button onClick={()=>{setEyes(5)}}>Star</Button>
        </div>
    );
}
const Mouth = () => {
    const { mouth, setMouth } = useContext(Context);
    return (
        <div className="Accessorize-bootons">
            <Button onClick={()=>{setMouth(0)}}>Default</Button>
            <Button onClick={()=>{setMouth(1)}}>Astonished</Button>
            <Button onClick={()=>{setMouth(2)}}>Eating</Button>
            <Button onClick={()=>{setMouth(3)}}>Laugh</Button>
            <Button onClick={()=>{setMouth(4)}}>Tongue</Button>
        </div>
    );
}
const Neck = () => {
    const { neck, setNeck } = useContext(Context);
    return (
        <div className="Accessorize-bootons">
            <Button onClick={()=>{setNeck(0)}}>Default</Button>
            <Button onClick={()=>{setNeck(1)}}>Bend-Backward</Button>
            <Button onClick={()=>{setNeck(2)}}>Bend-Forward</Button>
            <Button onClick={()=>{setNeck(3)}}>Thick</Button>
        </div>
    );
}
const Leg = () => {
    const { leg, setLeg } = useContext(Context);
    return (
        <div className="Accessorize-bootons">
            <Button onClick={()=>{setLeg(0)}}>Default</Button>
            <Button onClick={()=>{setLeg(1)}}>Bubble-Tea</Button>
            <Button onClick={()=>{setLeg(2)}}>Cookie</Button>
            <Button onClick={()=>{setLeg(3)}}>Game-Gonsole</Button>
            <Button onClick={()=>{setLeg(4)}}>Tilt-Backward</Button>
            <Button onClick={()=>{setLeg(5)}}>Tilt-Forward</Button>
        </div>
    );
}
const Accessories = () => {
    const { accessories, setAccessories } = useContext(Context);
    return (
        <div className="Accessorize-bootons">
            <Button onClick={()=>{setAccessories(0)}}>Earings</Button>
            <Button onClick={()=>{setAccessories(1)}}>Flower</Button>
            <Button onClick={()=>{setAccessories(2)}}>Glasses</Button>
            <Button onClick={()=>{setAccessories(3)}}>Headphone</Button>
        </div>
    );
}
const Background = () => {
    const { background, setBackground } = useContext(Context);
    return (
        <div className="Accessorize-bootons">
            <Button onClick={()=>{setBackground(0)}} style={{backgroundColor:"#5596f6", borderColor:"#5596f6"}}>Blue 50</Button>
            <Button onClick={()=>{setBackground(1)}} style={{backgroundColor:"#2a7bf4", borderColor:"#2a7bf4"}}>Blue 60</Button>
            <Button onClick={()=>{setBackground(2)}} style={{backgroundColor:"#2a5ca7", borderColor:"#2a5ca7"}}>Blue 70</Button>
            <Button onClick={()=>{setBackground(3)}} style={{backgroundColor:"#7a8faf", borderColor:"#7a8faf"}}>Dark blue 30</Button>
            <Button onClick={()=>{setBackground(4)}} style={{backgroundColor:"#002966", borderColor:"#002966"}}>Dark blue 50</Button>
            <Button onClick={()=>{setBackground(5)}} style={{backgroundColor:"#00193d", borderColor:"#00193d"}}>Dark blue 70</Button>
            <Button onClick={()=>{setBackground(6)}} style={{backgroundColor:"#9fd966", borderColor:"#9fd966"}}>Green 50</Button>
            <Button onClick={()=>{setBackground(7)}} style={{backgroundColor:"#74bd29", borderColor:"#74bd29"}}>Green 60</Button>
            <Button onClick={()=>{setBackground(8)}} style={{backgroundColor:"#6a9440", borderColor:"#6a9440"}}>Green 70</Button>
            <Button onClick={()=>{setBackground(9)}} style={{backgroundColor:"#cccccc", borderColor:"#cccccc"}}>Grey 40</Button>
            <Button onClick={()=>{setBackground(10)}} style={{backgroundColor:"#666666", borderColor:"#666666"}}>Grey 70</Button>
            <Button onClick={()=>{setBackground(11)}} style={{backgroundColor:"#333333", borderColor:"#333333"}}>Grey 80</Button>
            <Button onClick={()=>{setBackground(12)}} style={{backgroundColor:"#e85e23", borderColor:"#e85e23"}}>Red 50</Button>
            <Button onClick={()=>{setBackground(13)}} style={{backgroundColor:"#cb4c15", borderColor:"#cb4c15"}}>Red 60</Button>
            <Button onClick={()=>{setBackground(14)}} style={{backgroundColor:"#9f370a", borderColor:"#9f370a"}}>Red 70</Button>
            <Button onClick={()=>{setBackground(15)}} style={{backgroundColor:"#fcd33f", borderColor:"#fcd33f"}}>Yellow 50</Button>
            <Button onClick={()=>{setBackground(16)}} style={{backgroundColor:"#e6b60d", borderColor:"#e6b60d"}}>Yellow 60</Button>
            <Button onClick={()=>{setBackground(17)}} style={{backgroundColor:"#cf8e10", borderColor:"#cf8e10"}}>Yellow 70</Button>
            
        </div>
    );
}

export default Style;