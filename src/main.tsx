import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppProvider, Router } from './app'
import './index.css'

const rootElement = document.getElementById('root')

if (!rootElement) throw new Error('Root element not found')

createRoot(rootElement).render(
  <StrictMode>
    <AppProvider>
      <Router />
    </AppProvider>
  </StrictMode>,
)
