import logo from './logo.svg';
import './App.css';
import {Button} from "@mui/material"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
      
        </a>
        <Button variant="text">Text</Button>
      </header>
    </div>
  );
}

export default App;
