import "./App.css";
import Counter from "./components/Counter";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Contador c/ Redux</h2>
        <div className="Container">
          <Display />
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;
