import "primereact/resources/themes/lara-light-pink/theme.css";
//Importa um tema (lara-...) do PrimeReact

import "primereact/resources/primereact.min.css";
//Importa o CSS do PrimeReact

import { PrimeReactProvider } from "primereact/api"; //Importa Provider do PrimeReact


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
