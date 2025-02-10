import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TaskProvider } from './contexts/taskContext.tsx'
import { LoginProvider } from './contexts/loginContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </LoginProvider>
  </StrictMode >,
)
