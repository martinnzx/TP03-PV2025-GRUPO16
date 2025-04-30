import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tarea from './assets/components/Tarea.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tarea/>
  </StrictMode>,
)
