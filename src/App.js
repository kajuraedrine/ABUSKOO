import logo from './logo.svg';
import './App.css';
import myImage from "./assets/mobile.png"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav >
          <a href="#">
            <img src={myImage} className="logo"/>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default App;
