import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { IssuesProvider } from './features/issues/store/IssuesProvider.tsx' 
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <IssuesProvider>
        <App />
      </IssuesProvider>
    </BrowserRouter>
  </StrictMode>,
)
