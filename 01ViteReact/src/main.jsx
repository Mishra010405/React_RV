import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import Shiv from './shiv.jsx'



const myelemnt = (
    <a href='https://google.com' target='_blank'>Click me to visit the Google</a>
)


// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click me to visit Google'
// );



createRoot(document.getElementById('root')).render(
    //  reactElement
   

  <>


  {myelemnt}
    <br/>
  // Import app and SHiv file   
     <App />
    <Shiv /> 
    </>
)
