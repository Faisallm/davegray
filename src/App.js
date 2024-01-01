// we can import image
import logo from "./logo.svg";
// we can import css
import "./App.css";

function App() {
  const handleNameChange = () => {
    const names = ["Faisal", "Lawan", "Muhammad"]
    // randomly generate a number between 0 and 2
    const int = Math.floor(Math.random()*3)
    return names[int];
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}!
        </p>
      </header>
    </div>
  );
}

// allows us to import the App component
export default App;
