import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Context from "./ThemeContext.js";
const Accessorize = () => {
  const { buttonToChange, setButtonToChange } = useContext(Context);
  return (
    <div className="Accessorize">
      <h3>Accessorize</h3>
      <div className="Accessorize-bootons">
        <Button
          onClick={() => {
            setButtonToChange(0);
          }}
        >
          Hair
        </Button>
        <Button
          onClick={() => {
            setButtonToChange(1);
          }}
        >
          Ears
        </Button>
        <Button
          onClick={() => {
            setButtonToChange(2);
          }}
        >
          Eyes
        </Button>
        <Button
          onClick={() => {
            setButtonToChange(3);
          }}
        >
          Mouth
        </Button>
        <Button
          onClick={() => {
            setButtonToChange(4);
          }}
        >
          Neck
        </Button>
        <Button
          onClick={() => {
            setButtonToChange(5);
          }}
        >
          Leg
        </Button>
        <Button
          onClick={() => {
            setButtonToChange(6);
          }}
        >
          Accessories
        </Button>
        <Button
          onClick={() => {
            setButtonToChange(7);
          }}
        >
          Background
        </Button>
      </div>
    </div>
  );
};
export default Accessorize;
