import logo from './img/logo.svg';
import './styles/App.css';
import coder from './img/21004063.png'

function App() {
  return (
    <div className="App" id="App">
      <header className="App-header">
        <img src={coder} className="coder" alt="coder" />
        <h3 class="typewriter">Hi! My name is Trystan,<br />a self-taught coder,<br />a full stack developer <br />wanna-be.</h3>
      </header>
    </div>
  );
}

export default App;
