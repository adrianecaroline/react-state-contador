import React, {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h3>Contador = {count}</h3>
      <section>
        <button onClick={ ()=> {setCount (count + 5)}}>Somar</button>
        <button onClick={ ()=> {setCount (count - 3)}}>Subtrair</button>
      </section>
    </div>
  );
}

export default App;
