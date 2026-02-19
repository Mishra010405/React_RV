import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full min-h-screen transition-all duration-300 flex items-end justify-center"
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

          </div>
        </div>
      </div>
    </>
  )
}

export default App
