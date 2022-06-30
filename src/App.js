import './App.css';
import logoVictor from './images/logo-victor.png'

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
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
     </div>
     
    </div>
  );
}

export default App;
