import logo from './logo.svg';
import './App.css';
import Coin from './coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>3D Rotating Coin Example</h1>
      <Coin />
      <button>Flip</button>
      </header>
    </div>
  );
}

export default App;
