import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './Store/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    < Provider store={store}>
    <RouterProvider router={router}/>
    <App />
    </Provider>
  </React.StrictMode>,
)
