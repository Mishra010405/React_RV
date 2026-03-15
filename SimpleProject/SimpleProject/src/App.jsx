import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(1);
  const [multiplied, setMultiplied] = useState(1);

  const multipliedfive = () => {
    setMultiplied(value * 5);
    set