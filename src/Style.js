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
            <Button onClick={()=>{setBackground(0)}} >Earings</Button>
            <Button onClick={()=>{setBackground(1)}} >Flower</Button>
            <Button onClick={()=>{setBackground(2)}} >Glasses</Button>
            <Button onClick={()=>{setBackground(3)}} >Headphone</Button>
            <Button onClick={()=>{setBackground(4)}} >Earings</Button>
            <Button onClick={()=>{setBackground(5)}} >Flower</Button>
            <Button onClick={()=>{setBackground(6)}} >Glasses</Button>
            <Button onClick={()=>{setBackground(7)}} >Headphone</Button>
            <Button onClick={()=>{setBackground(8)}} >Earings</Button>
            <Button onClick={()=>{setBackground(9)}} >Flower</Button>
            <Button onClick={()=>{setBackground(10)}} >Glasses</Button>
            <Button onClick={()=>{setBackground(11)}} >Headphone</Button>
            <Button onClick={()=>{setBackground(12)}} >Earings</Button>
            <Button onClick={()=>{setBackground(13)}} >Flower</Button>
            <Button onClick={()=>{setBackground(14)}} >Glasses</Button>
            <Button onClick={()=>{setBackground(15)}} >Headphone</Button>
            <Button onClick={()=>{setBackground(16)}} >Earings</Button>
            <Button onClick={()=>{setBackground(17)}} >Flower</Button>
            
        </div>
    );
}

export default Style;