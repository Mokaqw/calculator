import { useState } from "react";
import * as math from "mathjs";
import "./App.css";
import Buttom from "./component/ButtonCal";
import Input from "./component/result";

const App = () => {
  
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  
  const addTo = (val) => {
    setResult("")
    setText((text) => [...text, val + ""]);
  };

  const calculate = () => {
    const input = text.join("");
    setResult(math.evaluate(input).toFixed(2));
    setText("")
  };
  const resetInput = () => {
    setText("");
    setResult("");
  };
  const backspace = () => {
    setText(text?.slice(0, -1));
  };
  return (
    <>
     
      <div className="App">
        <div className="title">
          <h1>Calculator</h1>
          <div className="cal-container">
            <Input text={text} result={result} />
            <div className="row">
              <Buttom Cal="C" color="#FF0000" text="#FFFFFF" OnClick={resetInput}/>
              <Buttom Cal="->" OnClick={backspace}/>
              <Buttom Cal="%" OnClick={addTo}/>
              <Buttom Cal="/" OnClick={addTo}/>
            </div>
            <div className="row">
              <Buttom Cal="7" color="#000000" OnClick={addTo} />
              <Buttom Cal="8" color="#000000" OnClick={addTo}/>
              <Buttom Cal="9" color="#000000" OnClick={addTo}/>
              <Buttom Cal="*" OnClick={addTo}/>
            </div>
            <div className="row">
              <Buttom Cal="4" color="#000000" OnClick={addTo}/>
              <Buttom Cal="5" color="#000000" OnClick={addTo}/>
              <Buttom Cal="6" color="#000000" OnClick={addTo}/>
              <Buttom Cal="-" OnClick={addTo}/>
            </div>
            <div className="row">
              <Buttom Cal="1" color="#000000" OnClick={addTo}/>
              <Buttom Cal="2" color="#000000" OnClick={addTo}/>
              <Buttom Cal="3" color="#000000" OnClick={addTo}/>
              <Buttom Cal="+" OnClick={addTo}/>
            </div>
            <div className="row">
              <Buttom Cal="0" color="#000000" OnClick={addTo}/>
              <Buttom Cal="." OnClick={addTo}/>
              <Buttom
                className="btn span-3"
                Cal="="
                color="#FF4500"
                text="#FFFFFF"
                OnClick={calculate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
