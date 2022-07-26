import './styles/app/App.css';
import logoVictor from './images/logo-victor.png'
import Button from './components/buttons'
import Screen from './components/Screen'
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = (value) => {
      setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    if (input){
      setInput(evaluate(input))
    }
  };


  return (
    <div className="App">
     <div className="logo-container">
      <img
        src={logoVictor}
        className = "logo"
        alt="Personal logo of Victor" />
     </div>

     <div className="calculator-container">
      <Screen input= {input} />
      <div className="row">
        <Button manageClick = {addInput}>7</Button>
        <Button manageClick = {addInput}>8</Button>
        <Button manageClick = {addInput}>9</Button>
        <Button manageClick = {addInput}>/</Button>
      </div>
      <div className="row">
        <Button manageClick = {addInput}>4</Button>
        <Button manageClick = {addInput}>5</Button>
        <Button manageClick = {addInput}>6</Button>
        <Button manageClick = {addInput}>*</Button>
      </div> 
      <div className="row">
        <Button manageClick = {addInput}>1</Button>
        <Button manageClick = {addInput}>2</Button>
        <Button manageClick = {addInput}>3</Button>
        <Button manageClick = {addInput}>-</Button>
      </div>
      <div className="row">
        <Button manageClick = {calculateResult}>=</Button>
        <Button manageClick = {addInput}>0</Button>
        <Button manageClick = {addInput}>.</Button>
        <Button manageClick = {addInput}>+</Button>
      </div>
      <div className="row">
        <ClearButton manageClick = {clearInput}>Clear</ClearButton>
      </div>
     </div>
     
    </div>
  );
}

export default App;
