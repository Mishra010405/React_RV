import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const [multiplied, setMultiplied] = useState(1);

  const multipliedfive = () => {
    setMultiplied(value * 5);
    setValue(value+1);
  };

  return (
    <>
      <h1>Main Value: {value}</h1>

      <button onClick={multipliedfive}>
        Click to Multiply
      </button>

      <hr />

      <h2>Multiplied{multiplied}</h2>
    </>
  );
}

export default App;