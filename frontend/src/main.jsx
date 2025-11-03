import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './styles/global.css'
import './styles/animations.css'
import './styles/badge.css'
import './styles/avatar.css'
import './styles/accordion.css'
import './styles/signature.css'
import './styles/modal.css'
import './styles/loader.css'
import './styles/buttons.css'
import './styles/card.css'
import './styles/list.css'
import './styles/table.css'
import './styles/form.css'
import './styles/tooltip.css'
import './styles/iconBtn.css'
import './styles/timelineItem.css'
import './styles/statsCard.css'
import './styles/projectCard.css'
import './styles/serviceCard.css'
import './styles/marquee.css'
import { ThemeProvider } from './context/ThemeContext.jsx';
import { ModalProvider } from "./context/ModalContext.jsx";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)