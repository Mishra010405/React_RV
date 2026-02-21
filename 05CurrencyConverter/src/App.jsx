import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'





function App() {
  const [amount , setAmount] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to,setTo]  = useState("inr")
  const [convertedAmount  , setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to);
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)

  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  
export default App
