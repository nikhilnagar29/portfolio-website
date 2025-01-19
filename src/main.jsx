import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import DynamicVideo from './components/DynamicVideo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <DynamicVideo/> */}
  </StrictMode>,
)
