import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToggleThemeProvider } from './context/toggle-theme.context.jsx'
import { AppProvider } from './context/app.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ToggleThemeProvider>
        <App />
      </ToggleThemeProvider>
    </AppProvider>
  </React.StrictMode>
)
