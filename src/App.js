import './App.css';
import logoVictor from './images/logo-victor.png'
import Button from './components/buttons'

function App() {
  return (
    <div className="App">
     <div className="logo-container">
      <img 
        src={logoVictor} 
        className = "logo"
        alt="Personal logo of Victor" />
     </div>

     <div className="calculator-container">
      <div className="row">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </div>
      <div className="row">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
      </div>
      <div className="row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>*</Button>
      </div>
      <div className="row">
        <Button>=</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>/</Button>
      </div>
      <div className="row"></div>
     </div>
     
    </div>
  );
}

export default App;
