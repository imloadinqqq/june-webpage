import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import resume from './resume/resume.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <React.StrictMode>
    <resume />
  </React.StrictMode>
)
