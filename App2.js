import logo from './logo.svg';
import './App.css';


function App() {
  const x = new Date();

  return (
    <header>
      <h1>Current Date and Time</h1>
      <h1>{x.toString()}</h1>
    </header>
  );
}

export default App;
