import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  let [color, setColor] = useState("white");
  console.log(color);
  
  
  return (
    <>
    
      <div
        className="transition-all duration-300 flex items-end justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">

            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              
            >
            RED
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
            GREEN
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
            YELLOW
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
            PINK
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
