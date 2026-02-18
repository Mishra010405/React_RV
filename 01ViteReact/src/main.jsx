import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import Shiv from './shiv.jsx'



const myelemnt = (
    <a href='https://google.com' target='_blank'>Click me to visit hte Google</a>
)

createRoot(document.getElementById('root')).render(
  <>


    {myelemnt}
    





    <br/>
  // Import app and SHiv file   

     <App />
    <Shiv /> 
    </>
  
)
