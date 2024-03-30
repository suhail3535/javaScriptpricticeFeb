import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { FireBaseProvider } from '../firebase/fireBaseContext.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <FireBaseProvider>
      <App />
    </FireBaseProvider>
  // </React.StrictMode>,
)
